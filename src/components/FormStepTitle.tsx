import IRegistrationData from "adapters/RegistrationData";
import { useUserDataContext } from "context/UserDataContext";
import Progress, { Step } from "helper/progress";
import "styles/FormStepTitle.css";

type FormStepTitleProps = {
  step: Step;
  title: string;
};

function FormStepTitle(props: FormStepTitleProps) {
  const { state, dispatch } = useUserDataContext();

  return (
    <div className={"step-title step" + props.step}>
      <h2>{props.title}</h2>

      <div className="image-wrapper">
        {Progress.isStepComplete(state.userData, props.step) && (
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
