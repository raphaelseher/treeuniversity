import StudentCard from "components/StudentCard";
import Button from "@mui/material/Button";
import StatusTimeline from "components/StatusTimeline";
import {
  addSubmitMessage,
  addRegistrationCodeMessage,
} from "adapters/FakeTimelineGenerator";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import "styles/RegisterSidebar.css";

interface RegisterSidebarProps {}

function RegisterSidebar(props: RegisterSidebarProps) {
  const { state, dispatch } = useUserDataContext();
  const buttonTitle = "Submit";

  return (
    <div id="sidebar">
      <div className="sidebar-content">
        <StudentCard />
        <Button
          className="submit-button"
          variant="contained"
          onClick={() => {
            if (state) {
              dispatch({
                type: ActionType.UpdateUserData,
                payload: {
                  newData: addSubmitMessage(state.userData),
                },
              });
              if (state.registrationCode) {
                dispatch({
                  type: ActionType.UpdateUserData,
                  payload: {
                    newData: addRegistrationCodeMessage(
                      state.registrationCode,
                      state.userData
                    ),
                  },
                });
              }
            }
          }}
        >
          {buttonTitle}
        </Button>
      </div>
      <hr />
      <div className="sidebar-content">
        <h2>Status Timeline</h2>
        <StatusTimeline />
      </div>
    </div>
  );
}

export default RegisterSidebar;
