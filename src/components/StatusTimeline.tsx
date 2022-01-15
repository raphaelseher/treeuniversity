import React, { useEffect, useState } from "react";
import Storage, { useLocalStoredUser } from "adapters/storage";
import IRegistrationData from "adapters/RegistrationData";
import StatusTimelineMessage from "./StatusTimelineMessage";
import "styles/StatusTimeline.css";
import { EnvironmentConsumer } from "context/Environment";

interface StatusTimelineProps {
  registrationCode: string;
}

function StatusTimeline(props: StatusTimelineProps) {
  const [userData, setUserData, test] = useLocalStoredUser<
    IRegistrationData | undefined
  >(props.registrationCode, undefined);

  const messageComponents = userData?.statusMessages.map((message) => {
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
  });
  console.log(messageComponents);

  return (
    <EnvironmentConsumer>
      {([environment, _]) => (
        <div id="status-timeline">
          {environment.registrationCode}
          {userData?.statusMessages.map((message) => {
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
      )}
    </EnvironmentConsumer>
  );
}

export default StatusTimeline;
