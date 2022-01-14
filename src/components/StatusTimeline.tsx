import React, { useState } from "react";
import Storage, { useLocalStoredUser } from "adapters/storage";
import IRegistrationData from "adapters/RegistrationData";
import StatusTimelineMessage from "./StatusTimelineMessage";
import "styles/StatusTimelineMessage.css";

interface StatusTimelineProps {
  registrationCode: string;
}

function StatusTimeline(props: StatusTimelineProps) {
  const [userData, setUserData] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  return (
    <div id="status-timeline">
      <StatusTimelineMessage
        data={{
          timeLabel: "2 hours",
          text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ju",
          name: "Student Office",
          isError: true,
        }}
      />
      <StatusTimelineMessage
        data={{
          timeLabel: "2 hours",
          text: "lLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et ju",
          name: "Student Office",
          isError: false,
        }}
      />
      <StatusTimelineMessage
        data={{
          timeLabel: "2 hours",
          text: "Content",
          isError: false,
        }}
      />
    </div>
  );
}

export default StatusTimeline;
