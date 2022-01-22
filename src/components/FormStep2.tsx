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
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    readAs: "DataURL",
    maxFileSize: 0.5,
    accept: [".png", ".jpg", ".jpeg"],
  });

  useEffect(() => {
    const base64Image = filesContent[0]?.content;
    if (base64Image) {
      if (userData.image != base64Image) {
        console.log(base64Image.length);
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
          {showErrorState && !userData.faculty && (
            <Alert severity="error">Faculty is missing!</Alert>
          )}
          <Button
            variant="outlined"
            onClick={() => {
              openFileSelector();
            }}
          >
            Upload
          </Button>
          <Button variant="outlined">Take Photo</Button>
          <p>(allowed File Formats: pdf, jpg, png. Max Filesize 512kb)</p>
        </div>
      </div>
    </div>
  );
}

export default FormStep2;
