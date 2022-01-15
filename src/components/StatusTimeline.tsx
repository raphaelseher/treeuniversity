import StatusTimelineMessage from "./StatusTimelineMessage";
import "styles/StatusTimeline.css";
import { useUserDataContext } from "context/UserDataContext";

interface StatusTimelineProps {}

function StatusTimeline(props: StatusTimelineProps) {
  const state = useUserDataContext().state;

  const formatDate = (timestamp: Date) => {
    const now = new Date();
    const date = new Date(timestamp);
    const hDiff = Math.abs(now.valueOf() - date.valueOf()) / 36e5;

    if (hDiff * 60 < 1) {
      return "now";
    } else if (hDiff < 1) {
      // return date in minutes
      return (hDiff * 60).toFixed(0) + " minutes";
    }

    return date.toLocaleDateString();
  };

  return (
    <div id="status-timeline">
      {state?.userData.statusMessages
        .sort((lhs, rhs) => lhs.timestamp.valueOf() - rhs.timestamp.valueOf())
        .map((message, index) => {
          const dateString = formatDate(message.timestamp);
          return (
            <StatusTimelineMessage
              key={index}
              data={{
                timeLabel: dateString,
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
