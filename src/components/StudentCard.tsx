import React from "react";
import Card from "@mui/material/Card";
import Storage, { useLocalStoredUser } from "adapters/storage";
import IRegistrationData from "adapters/RegistrationData";
import LinearProgress from "@mui/material/LinearProgress";
import PlaceholderText from "components/PlaceholderText";
import "styles/StudentCard.css";

// Parameters are called Props in React.
type StudentCardProps = {
  registrationCode: string;
};
function StudentCard(props: StudentCardProps) {
  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  return (
    <Card id="student-card">
      <div className="card-header flex-row">
        <img
          width="24px"
          height="24px"
          className="logo"
          src={process.env.PUBLIC_URL + "/image/logo24.png"}
        />
        <h4>Tree University | Student Card</h4>
      </div>
      <div className="card-content">
        <div className="name-image-row flex-row">
          <div className="img-wrapper">
            <img
              width="82px"
              height="82px"
              className="user-image"
              src={undefined}
            />
          </div>
          <div className="name-content">
            <PlaceholderText placeholder="John" value={userData?.firstname} />
            <PlaceholderText placeholder="Doe" value={userData?.lastname} />
            <PlaceholderText
              className="date"
              placeholder="01.01.1960"
              value={new Date(
                userData?.birthDate ?? new Date()
              ).toLocaleDateString()}
            />
          </div>
        </div>
        <div className="flex-row studies-row">
          <p className="studies-title">
            <strong>Studies:</strong>
          </p>
          <PlaceholderText
            className="studies-value"
            placeholder="Choosen Studies"
            value={undefined}
          />
        </div>
        <div className="flex-row studies-row">
          <p className="studies-title">
            <strong>Valid until:</strong>
          </p>
          <PlaceholderText
            className="studies-value"
            placeholder="01.03.2022"
            value={undefined}
          />
        </div>
      </div>
      <LinearProgress className="progress" variant="buffer" value={20} />
    </Card>
  );
}

export default StudentCard;
