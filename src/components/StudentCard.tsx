import React from "react";
import Card from "@mui/material/Card";
import LinearProgress from "@mui/material/LinearProgress";
import "styles/StudentCard.css";

// Parameters are called Props in React.
type StudentCardProps = {};
function StudentCard(props: StudentCardProps) {
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
            <p>Max</p>
            <p>Mustermann</p>
            <p className="date">03.12.1993</p>
          </div>
        </div>
        <div className="flex-row studies-row">
          <p className="studies-title">
            <strong>Studies:</strong>
          </p>
          <p className="studies-value">Some Studies, dont know what.</p>
        </div>
        <div className="flex-row studies-row">
          <p className="studies-title">
            <strong>Valid until:</strong>
          </p>
          <p className="studies-value">21.02.2022</p>
        </div>
      </div>
      <LinearProgress className="progress" variant="buffer" value={20} />
    </Card>
  );
}

export default StudentCard;
