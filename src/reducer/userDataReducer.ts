import IRegistrationData, {
  StatusMessageType,
} from "adapters/RegistrationData";
import Storage from "adapters/storage";
import {
  addSubmitMessage,
  addRegistrationCodeMessage,
  addErrorMessage,
  addSuccessMessage,
  addProgressErrorMessage,
} from "adapters/FakeTimelineGenerator";
import Progress from "helper/progress";

export interface State {
  registrationCode: string;
  userData: IRegistrationData;
}

interface UpdateUserDataAction {
  newData: IRegistrationData;
}

interface UpdateRegistrationCodeAction {
  newCode: string;
}

interface CreateUserDataAction {}

export enum ActionType {
  CreateUserData,
  UpdateUserData,
  UpdateRegistrationCode,
  UpdateSubmitState,
}

export type Action = {
  type: ActionType;
  payload:
    | UpdateUserDataAction
    | UpdateRegistrationCodeAction
    | CreateUserDataAction;
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.CreateUserData:
      const code = Storage.createNewEntry();
      const createdData = addRegistrationCodeMessage(
        code,
        Storage.dataFor(code)
      );
      return { registrationCode: code, userData: createdData };

    case ActionType.UpdateRegistrationCode:
      const newCode = (action.payload as UpdateRegistrationCodeAction).newCode;
      const data = Storage.dataFor(newCode);
      return { registrationCode: newCode, userData: data };

    case ActionType.UpdateUserData:
      const newUserData = (action.payload as UpdateUserDataAction).newData;
      if (state.registrationCode) {
        Storage.setdata(state.registrationCode, newUserData);
      } else {
        console.log(
          "[UserDataReducer] No registrationCode set. Cannot save to localstore."
        );
      }
      return { ...state, userData: newUserData };

    case ActionType.UpdateSubmitState:
      // first, only works when finishes -> 100% progress
      if (Progress.calculateProgress(state.userData) < 100) {
        console.log(
          "[UserDataReducer] User cannot submit, not completely filled form."
        );

        return { ...state, userData: addProgressErrorMessage(state.userData) };
      }

      // second step, show wrong uploaded file
      var newUserDataWithMessages = addSubmitMessage(state.userData);

      const hasRequestMessage = state.userData.statusMessages.some(
        (message) => message.type == StatusMessageType.Request
      );
      console.log(state.userData.statusMessages);
      if (!hasRequestMessage) {
        newUserDataWithMessages = addErrorMessage(newUserDataWithMessages);
      } else {
        newUserDataWithMessages = addSuccessMessage(newUserDataWithMessages);
      }

      return { ...state, userData: newUserDataWithMessages };

    default:
      return state;
  }
};

export const defaultUserData: State = {
  registrationCode: "",
  userData: { validStudentData: false, statusMessages: [] },
};
