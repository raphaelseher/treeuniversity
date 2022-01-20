import IRegistrationData from "adapters/RegistrationData";
import { useUserDataContext } from "context/UserDataContext";
import "styles/FormStepTitle.css";

export enum Step {
  Step1 = 1,
  Step2,
  Step3,
  Step4,
}

type FormStepTitleProps = {
  step: Step;
  title: string;
};

function FormStepTitle(props: FormStepTitleProps) {
  const { state, dispatch } = useUserDataContext();

  const isStepComplete = (step: Step) => {
    const step1 = [
      state.userData.firstname,
      state.userData.lastname,
      state.userData.birthDate,
      state.userData.svnr,
      state.userData.placeOfBirth,
      state.userData.plz,
      state.userData.town,
      state.userData.street,
      state.userData.streetNumber,
      state.userData.phone,
      state.userData.email,
    ];
    const step2 = [state.userData.image];
    const step3 = [state.userData.faculty, state.userData.studySubject];
    const step4 = [
      state.userData.proofOfCitizinship,
      state.userData.entranceQualification,
    ];

    let stepsArrays = [];
    switch (step) {
      case Step.Step1:
        stepsArrays = [step1];
        break;
      case Step.Step2:
        stepsArrays = [step2];
        break;
      case Step.Step3:
        stepsArrays = [step3];
        break;
      case Step.Step4:
        stepsArrays = [step4];
        break;
    }

    const isComplete = stepsArrays.map((arr) => {
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

  return (
    <div className={"step-title step" + props.step}>
      <h2>{props.title}</h2>

      <div className="image-wrapper">
        {isStepComplete(props.step) && (
          <img
            width="32px"
            height="32px"
            className="done-icon"
            src={process.env.PUBLIC_URL + "/image/done-circle.svg"}
          />
        )}
      </div>
    </div>
  );
}

export default FormStepTitle;
