import { useEffect } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { ActionType } from "reducer/userDataReducer";
import Progress from "helper/progress";
import "styles/FormStep4.css";

function FormStep4() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);

  return (
    <div id="step4">
      <FormStepTitle step={Step.Step4} title="Step 4: Documents" />
      <div id="step4-content"></div>
    </div>
  );
}

export default FormStep4;
