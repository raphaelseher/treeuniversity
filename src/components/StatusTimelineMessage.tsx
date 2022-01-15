import React, { useState } from "react";
import "styles/StatusTimelineMessage.css";

interface StatusTimelineMessageProps {
  data: {
    timeLabel: string;
    text: string;
    name?: string;
    isError: boolean;
  };
}

function StatusTimelineMessage(props: StatusTimelineMessageProps) {
  const borderClass = props.data.name ? "border-right" : "border-left";
  const errorClass = props.data.isError ? "error" : "";

  return (
    <div id="status-message" className={borderClass}>
      {props.data.isError && <p className="status-message-error">!</p>}
      <div className={"status-message-content " + errorClass}>
        {props.data.name && (
          <p className="status-message-name">{props.data.name}</p>
        )}
        <p className="status-message-time">{props.data.timeLabel}</p>
        <p className="status-message-text">{props.data.text}</p>
      </div>
    </div>
  );
}

export default StatusTimelineMessage;
