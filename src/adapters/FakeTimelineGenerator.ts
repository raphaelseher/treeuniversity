import IRegistrationData, {
  IStatusMessage,
  StatusMessageType,
} from "adapters/RegistrationData";

class TimelineGenerator {}

const addMessage = (message: IStatusMessage, userData: IRegistrationData) => {
  const messages = userData.statusMessages;
  messages.push(message);

  return { ...userData, statusMessages: messages };
};

export const addSubmitMessage = (userData: IRegistrationData) => {
  return addMessage(
    {
      type: StatusMessageType.Submit,
      timestamp: new Date(),
      message:
        "Registration send to office. We will notify you, when we reviewed your data.",
      isError: false,
    },
    userData
  );
};

export const addRegistrationCodeMessage = (
  registrationCode: string,
  userData: IRegistrationData
) => {
  if (
    userData.statusMessages.find(
      (message) => message.type == StatusMessageType.RegistrationCode
    )
  ) {
    return userData;
  }

  return addMessage(
    {
      type: StatusMessageType.RegistrationCode,
      timestamp: new Date(),
      message:
        "Your registration code is: " +
        registrationCode +
        ". Please remember it to resume registration.",
      isError: false,
    },
    userData
  );
};

export const addErrorMessage = (userData: IRegistrationData) => {
  return addMessage(
    {
      type: StatusMessageType.Request,
      timestamp: new Date(),
      name: "Students Office",
      message:
        "You uploaded a wrong school report. Please upload a new one and submit again.",
      isError: true,
    },
    userData
  );
};

export const addProgressErrorMessage = (
  userData: IRegistrationData,
  message?: string
) => {
  return addMessage(
    {
      type: StatusMessageType.Missing,
      timestamp: new Date(),
      name: "System",
      message:
        message ??
        "Not all required data is submitted. Please verify and add missing required data.",
      isError: true,
    },
    userData
  );
};

export const addSuccessMessage = (userData: IRegistrationData) => {
  return addMessage(
    {
      type: StatusMessageType.Finish,
      timestamp: new Date(),
      name: "Students Office",
      message:
        "Your registration is complete. Please continue for additional information.",
      isError: false,
    },
    userData
  );
};

export default TimelineGenerator;
