import IRegistrationData, {
  StatusMessageType,
} from "adapters/RegistrationData";

export enum Step {
  Step1 = 1,
  Step2,
  Step3,
  Step4,
}

class Progress {
  static isEnrolled = (userData: IRegistrationData): boolean => {
    const progress = Progress.calculateProgress(userData);
    const finishedMessage = userData.statusMessages.some(
      (message) => message.type == StatusMessageType.Finish
    );

    if (progress < 100) {
      console.log("[Progress.isEnrolled] Progress is not 100%.");
    }

    if (!finishedMessage) {
      console.log("[Progress.isEnrolled] User got no Finished message.");
    }

    return progress >= 100 && finishedMessage;
  };

  static calculateProgress = (userData: IRegistrationData) => {
    const isComplete = this.getStepArray(userData, [
      Step.Step1,
      Step.Step2,
      Step.Step3,
      Step.Step4,
    ]).map((arr) => {
      const itemsValid = arr
        .map((item) => item ?? "")
        .map((item) => item.length > 0);
      return itemsValid.reduce((result, bool) => {
        return result && bool;
      });
    });

    return isComplete
      .map<number>((item) => (item ? 25 : 0))
      .reduce((result, val) => {
        return result + val;
      });
  };

  static isStepComplete = (userData: IRegistrationData, step: Step) => {
    const isComplete = this.getStepArray(userData, [step]).map((arr) => {
      const itemsValid = arr
        .map((item) => item ?? "")
        .map((item) => item.length > 0);
      return itemsValid.reduce((result, bool) => {
        return result && bool;
      });
    });

    return isComplete.reduce((result, bool) => {
      return result && bool;
    });
  };

  private static getStepArray = (
    userData: IRegistrationData,
    steps: Step[]
  ) => {
    const step1 = [
      userData.firstname,
      userData.lastname,
      userData.birthDate,
      userData.svnr,
      userData.placeOfBirth,
      userData.plz,
      userData.town,
      userData.street,
      userData.streetNumber,
      userData.phone,
      userData.email,
    ];
    const step2 = [userData.image];
    const step3 = [userData.faculty, userData.studySubject];
    const step4 = [userData.proofOfCitizinship, userData.entranceQualification];

    let stepsArrays: (string | undefined)[][] = [];
    steps.forEach((step) => {
      switch (step) {
        case Step.Step1:
          stepsArrays.push(step1);
          break;
        case Step.Step2:
          stepsArrays.push(step2);
          break;
        case Step.Step3:
          stepsArrays.push(step3);
          break;
        case Step.Step4:
          stepsArrays.push(step4);
          break;
      }
    });

    return stepsArrays;
  };
}

export default Progress;
