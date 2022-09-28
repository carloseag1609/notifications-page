import { useNotifications } from "../../hooks/useNotifications";
import { Notification } from "./Notification";

export function Notifications() {
  const { unread, notifications, markAllAsRead } = useNotifications();

  return (
    <div className="container">
      <div className="header">
        <h2 className="header__title">
          Notifications <span className="header__unread">{unread}</span>
        </h2>
        <a className="header__mark-unread" onClick={markAllAsRead}>
          Mark all as read
        </a>
      </div>
      <div className="notifications">
        {notifications.map((notification) => (
          <Notification notification={notification} />
        ))}
      </div>
    </div>
  );
}
