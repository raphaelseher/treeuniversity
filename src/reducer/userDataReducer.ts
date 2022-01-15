import IRegistrationData from "adapters/RegistrationData";
import Storage from "adapters/storage";

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

export enum ActionType {
  UpdateUserData,
  UpdateRegistrationCode,
}

export type Action = {
  type: ActionType;
  payload: UpdateUserDataAction | UpdateRegistrationCodeAction;
};

export const reducer = (state: State, action: Action): State => {
  // normally we would reduce with a switch and different actions. For now this should work.

  switch (action.type) {
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
          "[UserDataReducer] No registrationCode set. Cannto save to localstore."
        );
      }
      return { ...state, userData: newUserData };

    default:
      return state;
  }
};

export const defaultUserData: State = {
  registrationCode: "",
  userData: { statusMessages: [] },
};