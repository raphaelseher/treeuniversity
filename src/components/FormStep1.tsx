import { useEffect } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { ActionType } from "reducer/userDataReducer";
import Progress from "helper/progress";
import "styles/FormStep2.css";

function FormStep2() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);

  // regex used for validation of input
  const nameRegex = new RegExp("^([ \u00c0-\u01ffa-zA-Z'-])+$");
  let isNameValid: boolean =
    (userData?.firstname?.length ?? 0) == 0
      ? true
      : nameRegex.test(userData?.firstname ?? "");

  return (
    <div id="step1">
      <FormStepTitle step={Step.Step1} title="Step 1: Student Data" />
      <div id="step1-content">
        <TextField
          variant="outlined"
          label="Firstname"
          type="name"
          value={userData.firstname}
          onChange={(e) => {
            dispatch({
              type: ActionType.UpdateUserData,
              payload: {
                newData: { ...userData, firstname: e.target.value },
              },
            });
          }}
          placeholder="John"
          helperText={isNameValid ? undefined : "Keine Sonderzeichen verwenden"}
          error={!isNameValid}
        />
      </div>
    </div>
  );
}

export default FormStep2;
