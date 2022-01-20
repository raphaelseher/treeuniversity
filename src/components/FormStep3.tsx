import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle, { Step } from "components/FormStepTitle";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Alert from "@mui/material/Alert";
import { ActionType } from "reducer/userDataReducer";
import "styles/FormStep3.css";

function FormStep3() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;

  const optionsMap = new Map<string, string[]>([
    ["", []],
    ["Informatics", ["Applied Informatic", "Telematic", "Business Informatic"]],
  ]);

  return (
    <div id="step3">
      <FormStepTitle step={Step.Step3} title="Step 3: Study Selection" />
      <div id="step3-content">
        <Autocomplete
          disablePortal
          value={userData?.faculty ?? ""}
          onChange={(e, newValue) => {
            dispatch({
              type: ActionType.UpdateUserData,
              payload: {
                newData: { ...userData, faculty: newValue },
              },
            });
          }}
          options={Array.from(optionsMap.keys())}
          renderInput={(params) => (
            <TextField {...params} label="Faculty Selection" />
          )}
        />

        <Autocomplete
          disablePortal
          disabled={userData?.faculty === undefined}
          value={userData?.studySubject ?? ""}
          onChange={(e, newValue) => {
            dispatch({
              type: ActionType.UpdateUserData,
              payload: {
                newData: { ...userData, studySubject: newValue },
              },
            });
          }}
          options={optionsMap.get(userData?.faculty ?? "") ?? []}
          renderInput={(params) => (
            <TextField {...params} label="Study Field Selection" />
          )}
        />
      </div>
    </div>
  );
}

export default FormStep3;
