import { useEffect } from "react";
import { useUserDataContext } from "context/UserDataContext";
import FormStepTitle from "components/FormStepTitle";
import { Step } from "helper/progress";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import { ActionType } from "reducer/userDataReducer";
import { useFilePicker } from "use-file-picker";
import Progress from "helper/progress";
import "styles/FormStep2.css";

function FormStep2() {
  const { state, dispatch } = useUserDataContext();
  const userData = state.userData;
  const showErrorState = Progress.showErrorState(state.userData);
  const [openFileSelector, { filesContent, loading, errors }] = useFilePicker({
    readAs: "DataURL",
    maxFileSize: 0.5,
    accept: [".png", ".jpg", ".jpeg"],
  });

  let errorMessage: string | undefined;
  if (errors.length) {
    if (errors[0].fileSizeTooSmall) {
      errorMessage = "File size is too small!";
    } else if (errors[0].fileSizeToolarge) {
      errorMessage = "File size is too large!";
    } else if (errors[0].readerError) {
      errorMessage = "Problem occured while reading file!";
    } else if (errors[0].maxLimitExceeded) {
      errorMessage = "Too many files";
    } else if (errors[0].minLimitNotReached) {
      errorMessage = "Not enought files";
    }
  }

  if (showErrorState && !userData.image) {
    errorMessage = "Photo is missing!";
  }

  useEffect(() => {
    const base64Image = filesContent[0]?.content;
    if (base64Image) {
      if (userData.image != base64Image) {
        dispatch({
          type: ActionType.UpdateUserData,
          payload: {
            newData: { ...userData, image: base64Image },
          },
        });
      }
    }
  }, [filesContent]);

  return (
    <div id="step2">
      <FormStepTitle step={Step.Step2} title="Step 2: Photo" />
      <div id="step2-content">
        <div className="img-wrapper">
          <img
            width="200px"
            height="200px"
            className="user-image"
            src={userData?.image && userData.image}
          />
        </div>
        <div className="step2-buttons">
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Button
            variant="outlined"
            onClick={() => {
              openFileSelector();
            }}
          >
            Upload
          </Button>
          <p>(allowed File Formats: pdf, jpg, png. Max Filesize 512kb)</p>
        </div>
      </div>
    </div>
  );
}

export default FormStep2;
