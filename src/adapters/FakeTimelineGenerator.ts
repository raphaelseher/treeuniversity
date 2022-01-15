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

export default TimelineGenerator;
