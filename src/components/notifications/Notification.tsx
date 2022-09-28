import { INotification } from "../../context/notificationsContext";
import { useNotifications } from "../../hooks/useNotifications";

interface Props {
  notification: INotification;
}

export const Notification = ({ notification }: Props) => {
  const { markAsRead } = useNotifications();

  return (
    <div
      className={`notification notification--${
        notification.type
      } notification--${notification.read ? "read" : "unread"}`}
      onClick={() => markAsRead(notification.id)}
    >
      <div className="notification__container">
        <img
          className="notification__sender-avatar"
          src={`/assets/images/${notification.sender.avatar}`}
          alt={notification.sender.name}
        />
        <div className="notification__body">
          <p className="notification__body__content">
            <span className="notification__body__sender-name">
              {notification.sender.name}{" "}
            </span>
            <span className="notification__body__message">
              {notification.message}{" "}
            </span>
            <a
              className={`notification__body__subject notification__body__subject--${
                notification.type
              } notification__body__subject--${
                notification.read ? "read" : "unread"
              }`}
            >
              {notification.subject}{" "}
            </a>
          </p>
          <p className="notification__body__date">{notification.date}</p>
        </div>
        {notification.image && (
          <img
            className="notification__image"
            src={`/assets/images/${notification.image}`}
            alt="Notification image"
          />
        )}
      </div>
      {notification.privateMessageContent && (
        <p className="notification__private-message">
          {notification.privateMessageContent}
        </p>
      )}
    </div>
  );
};
