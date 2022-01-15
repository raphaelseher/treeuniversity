export interface IStatusMessage {
  type: StatusMessageType;
  timestamp: Date;
  name?: string;
  message: string;
  isError: boolean;
}

export enum StatusMessageType {
  RegistrationCode,
  Submit,
  Request,
  Finish,
}

interface IRegistrationData {
  firstname?: string;
  lastname?: string;
  birthDate?: string;
  faculty?: string;
  studySubject?: string;
  image?: string; // base64 encoded
  validUntil?: string; // fixed date for end of summer semester
  statusMessages: IStatusMessage[];
}

export type Action = {
  newData: IRegistrationData;
};

export default IRegistrationData;
