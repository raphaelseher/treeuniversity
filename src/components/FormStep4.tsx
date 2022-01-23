import { useEffect, useRef } from "react";
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

  const currentUpload = useRef<number>(0);

  let currentErrorMessage: string | undefined;
  if (errors.length) {
    if (errors[0].fileSizeTooSmall) {
      currentErrorMessage = "File size is too small!";
    } else if (errors[0].fileSizeToolarge) {
      currentErrorMessage = "File size is too large!";
    } else if (errors[0].readerError) {
      currentErrorMessage = "Problem occured while reading file!";
    } else if (errors[0].maxLimitExceeded) {
      currentErrorMessage = "Too many files";
    } else if (errors[0].minLimitNotReached) {
      currentErrorMessage = "Not enought files";
    }
  }

  let errorMessage1: string | undefined;
  let errorMessage2: string | undefined;

  if (currentUpload.current == 0) {
    errorMessage1 = currentErrorMessage;
  } else {
    errorMessage2 = currentErrorMessage;
  }

  if (showErrorState && !userData.proofOfCitizinship && !errorMessage1) {
    errorMessage1 = "Upload is missing!";
  }
  if (showErrorState && !userData.entranceQualification && !errorMessage2) {
    errorMessage2 = "Upload is missing!";
  }

  useEffect(() => {
    const base64FileName = filesContent[0]?.name;
    if (!base64FileName) return;

    if (currentUpload.current == 0) {
      dispatch({
        type: ActionType.UpdateUserData,
        payload: {
          newData: { ...userData, proofOfCitizinship: base64FileName },
        },
      });
    } else {
      dispatch({
        type: ActionType.UpdateUserData,
        payload: {
          newData: { ...userData, entranceQualification: base64FileName },
        },
      });
    }
  }, [filesContent]);

  const icon = userData.entranceQualification ? (
    <img
      width="22px"
      height="32px"
      className="done-icon"
      src={process.env.PUBLIC_URL + "/image/done.svg"}
    />
  ) : (
    <p></p>
  );
  return (
    <div id="step4">
      <FormStepTitle step={Step.Step4} title="Step 4: Documents" />
      <div id="step4-content">
        <div className="row">
          <div className="column-text">
            <p className="text">Proof of Citizenship</p>
            <p className="subtext">(allowed File Formats: pdf, jpg, png)</p>
          </div>
          <div className="column-button">
            <Button
              variant="outlined"
              onClick={() => {
                currentUpload.current = 0;
                openFileSelector();
              }}
            >
              Upload
            </Button>
          </div>
          <div className="column-upload">
            {errorMessage1 ? (
              <Alert severity="error">{errorMessage1}</Alert>
            ) : (
              <Chip
                className={
                  "rounded-chip " +
                  (userData.proofOfCitizinship
                    ? "primary-chip"
                    : "inactive-chip")
                }
                label={
                  userData.proofOfCitizinship
                    ? userData.proofOfCitizinship
                    : "Upload a file"
                }
                variant="outlined"
                onDelete={() => {}}
                deleteIcon={
                  userData.proofOfCitizinship ? (
                    <img
                      width="22px"
                      height="22px"
                      className="done-icon"
                      src={process.env.PUBLIC_URL + "/image/done.svg"}
                    />
                  ) : (
                    <p></p>
                  )
                }
              />
            )}
          </div>
        </div>

        <div className="row">
          <div className="column-text">
            <p className="text">University Entrance Qualification</p>
            <p className="subtext">(allowed File Formats: pdf, jpg, png)</p>
          </div>
          <div className="column-button">
            <Button
              variant="outlined"
              onClick={() => {
                currentUpload.current = 1;
                openFileSelector();
              }}
            >
              Upload
            </Button>
          </div>
          <div className="column-upload">
            {errorMessage2 ? (
              <Alert severity="error">{errorMessage2}</Alert>
            ) : (
              <Chip
                className={
                  "rounded-chip " +
                  (userData.entranceQualification
                    ? "primary-chip"
                    : "inactive-chip")
                }
                label={
                  userData.entranceQualification
                    ? userData.entranceQualification
                    : "Upload a file"
                }
                variant="outlined"
                onDelete={() => {}}
                deleteIcon={
                  userData.entranceQualification ? (
                    <img
                      width="22px"
                      height="22px"
                      className="done-icon"
                      src={process.env.PUBLIC_URL + "/image/done.svg"}
                    />
                  ) : (
                    <p></p>
                  )
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormStep4;
