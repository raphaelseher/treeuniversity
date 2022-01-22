import StudentCard from "components/StudentCard";
import Button from "@mui/material/Button";
import StatusTimeline from "components/StatusTimeline";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import { useNavigate } from "react-router-dom";
import Progress from "helper/progress";
import "styles/RegisterSidebar.css";

interface RegisterSidebarProps {}

function RegisterSidebar(props: RegisterSidebarProps) {
  const { state, dispatch } = useUserDataContext();
  const navigate = useNavigate();

  const isEnrolled = Progress.isEnrolled(state.userData);
  const buttonTitle = isEnrolled ? "Finish Enrollment" : "Submit";

  const onSubmit = () => {
    if (isEnrolled) {
      navigate("/complete");
      return;
    }

    dispatch({ type: ActionType.UpdateSubmitState, payload: {} });
  };

  return (
    <div id="sidebar">
      <div className="sidebar-content">
        <StudentCard />
        <Button
          className="submit-button"
          variant="contained"
          onClick={() => {
            onSubmit();
          }}
        >
          {buttonTitle}
        </Button>
      </div>
      <div className="sidebar-scroll-content">
        <div className="sidebar-status-content">
          <h2>Status Timeline</h2>
          <StatusTimeline />
        </div>
      </div>
    </div>
  );
}

export default RegisterSidebar;
