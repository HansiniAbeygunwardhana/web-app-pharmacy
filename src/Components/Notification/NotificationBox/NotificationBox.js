import React from "react";
import "./NotificationBox.scss";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";

const NotificationBox = ({ message, time }) => {
  return (
    <div className="Notificationbox">
      <div>
        <MarkChatUnreadIcon />
      </div>
      <div className="Notificationbox__message">{message}</div>
      <div className="Notificationbox__time">{time}</div>
    </div>
  );
};

export default NotificationBox;
