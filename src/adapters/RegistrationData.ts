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
  Missing,
  Request,
  Finish,
}

interface IRegistrationData {
  validStudentData: boolean;
  firstname?: string;
  lastname?: string;
  birthDate?: string;
  svnr?: string;
  placeOfBirth?: string;
  plz?: string;
  town?: string;
  street?: string;
  streetNumber?: string;
  phone?: string;
  email?: string;
  faculty?: string;
  studySubject?: string;
  image?: string; // base64 encoded
  proofOfCitizinship?: string; // base64 encoded
  entranceQualification?: string; // base64 encoded
  validUntil?: string; // fixed date for end of summer semester
  statusMessages: IStatusMessage[];
}

export type Action = {
  newData: IRegistrationData;
};

export default IRegistrationData;
