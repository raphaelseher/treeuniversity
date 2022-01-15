import React, { useEffect, useState } from "react";
import Storage, { useLocalStoredUser } from "adapters/storage";
import IRegistrationData from "adapters/RegistrationData";
import StatusTimelineMessage from "./StatusTimelineMessage";
import "styles/StatusTimeline.css";
import { EnvironmentConsumer } from "context/Environment";
import { useUserDataContext } from "context/UserDataContext";

interface StatusTimelineProps {}

function StatusTimeline(props: StatusTimelineProps) {
  const { state, dispatch } = useUserDataContext();

  return (
    <div id="status-timeline">
      {state?.userData.statusMessages.map((message) => {
        return (
          <StatusTimelineMessage
            data={{
              timeLabel: message.timestamp.toString(),
              text: message.message,
              name: message.name,
              isError: message.isError,
            }}
          />
        );
      })}
    </div>
  );
}

export default StatusTimeline;
