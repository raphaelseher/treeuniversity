interface IRegistrationData {
  firstname?: string;
  lastname?: string;
  birthDate?: string;
  faculty?: string;
  studySubject?: string;
  image?: string; // base64 encoded
  validUntil?: string; // fixed date for end of summer semester
}

export default IRegistrationData;
