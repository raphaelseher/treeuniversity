import { useEffect } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Chip from "@mui/material/Chip";
import { ActionType } from "reducer/userDataReducer";
import { useFilePicker } from "use-file-picker";
import Progress from "helper/progress";
import "styles/FormStep4.css";

function FormStep4() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);

  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    maxFileSize: 0.5,
    accept: [".pdf", ".png", ".jpg", ".jpeg"],
  });

  let errorMessage1: string | undefined;
  let errorMessage2: string | undefined;
  if (errors.length) {
    if (errors[0].fileSizeTooSmall) {
      errorMessage1 = "File size is too small!";
    } else if (errors[0].fileSizeToolarge) {
      errorMessage1 = "File size is too large!";
    } else if (errors[0].readerError) {
      errorMessage1 = "Problem occured while reading file!";
    } else if (errors[0].maxLimitExceeded) {
      errorMessage1 = "Too many files";
    } else if (errors[0].minLimitNotReached) {
      errorMessage1 = "Not enought files";
    }
  }

  if (showErrorState && true) {
    errorMessage1 = "Upload is missing!";
  }

  return (
    <div id="step4">
      <FormStepTitle step={Step.Step4} title="Step 4: Documents" />
      <div id="step4-content">
        <div className="row">
          <div className="column-text">
            <p>Proof of Citizenship</p>
            <p className="subtext">(allowed File Formats: pdf, jpg, png)</p>
          </div>
          <div className="column-button">
            <Button
              variant="outlined"
              onClick={() => {
                openFileSelector();
              }}
            >
              Upload
            </Button>
          </div>
          <div className="column-upload">
            {errorMessage1 && <Alert severity="error">{errorMessage1}</Alert>}
            <Chip
              className="rounded-chip inactive-chip"
              label="Upload a file"
              variant="outlined"
            />
          </div>
        </div>

        <div className="row">
          <div className="column-text">
            <p>Proof of Citizenship</p>
            <p className="subtext">(allowed File Formats: pdf, jpg, png)</p>
          </div>
          <div className="column-button">
            <Button
              variant="outlined"
              onClick={() => {
                openFileSelector();
              }}
            >
              Upload
            </Button>
          </div>
          <div className="column-upload">
            {errorMessage1 && <Alert severity="error">{errorMessage1}</Alert>}
            <Chip
              className="rounded-chip inactive-chip"
              label="Upload a file"
              variant="outlined"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStep4;
