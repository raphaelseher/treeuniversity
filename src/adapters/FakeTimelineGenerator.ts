import storage, { useLocalStoredUser } from "adapters/storage";
import IRegistrationData, {
  IStatusMessage,
  StatusMessageType,
} from "adapters/RegistrationData";

class TimelineGenerator {}

export const addSubmitMessage = (
  data: [
    userData: IRegistrationData | undefined,
    setUserData: (value: IRegistrationData) => void
  ]
) => {
  const [userData, setUserData] = data;

  if (!userData) {
    return;
  }

  const message: IStatusMessage = {
    type: StatusMessageType.Submit,
    timestamp: new Date(),
    message:
      "Registration send to office. We will notify you, when we reviewed your data.",
    isError: false,
  };

  const messages = userData.statusMessages;
  messages.push(message);

  setUserData({
    ...userData,
    statusMessages: messages,
  });
};

export default TimelineGenerator;
