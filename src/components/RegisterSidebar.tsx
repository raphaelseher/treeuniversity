import StudentCard from "components/StudentCard";
import Button from "@mui/material/Button";
import StatusTimeline from "components/StatusTimeline";
import { useUserDataContext } from "context/UserDataContext";
import { ActionType } from "reducer/userDataReducer";
import "styles/RegisterSidebar.css";

interface RegisterSidebarProps {}

function RegisterSidebar(props: RegisterSidebarProps) {
  const { state, dispatch } = useUserDataContext();
  const buttonTitle = "Submit";

  const onSubmit = () => {
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
      <hr />
      <div className="sidebar-content">
        <h2>Status Timeline</h2>
        <StatusTimeline />
      </div>
    </div>
  );
}

export default RegisterSidebar;
