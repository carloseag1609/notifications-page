import { PropsWithChildren, useEffect, useState } from "react";
import {
  INotification,
  NotificationsContext,
  NotificationsContextProps,
} from "./notificationsContext";

type NotificationsState = Omit<
  NotificationsContextProps,
  "markAllAsRead" | "markAsRead"
>;

const notifications: INotification[] = [
  {
    id: 1,
    type: "reaction",
    sender: {
      name: "Mark Webber",
      avatar: "avatar-mark-webber.webp",
    },
    message: "reacted to your recent post",
    subject: "My first tournament today!",
    date: "1m ago",
    read: false,
  },
  {
    id: 2,
    type: "follow",
    sender: {
      name: "Angela Gray",
      avatar: "avatar-angela-gray.webp",
    },
    message: "followed you",
    subject: "",
    date: "5m ago",
    read: false,
  },
  {
    id: 3,
    type: "group",
    sender: {
      name: "Jacob Thompson",
      avatar: "avatar-jacob-thompson.webp",
    },
    message: "has joined your group",
    subject: "Chess Club",
    date: "1 day ago",
    read: false,
  },
  {
    id: 4,
    type: "private-message",
    sender: {
      name: "Rizky Hasanuddin",
      avatar: "avatar-rizky-hasanuddin.webp",
    },
    message: "sent you a private message",
    subject: "",
    date: "5 days ago",
    read: true,
    privateMessageContent:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
  },
  {
    id: 5,
    type: "comment",
    sender: {
      name: "Kimberly Smith",
      avatar: "avatar-kimberly-smith.webp",
    },
    message: "commented on your picture",
    subject: "",
    image: "image-chess.webp",
    date: "1 week ago",
    read: true,
  },
  {
    id: 6,
    type: "comment",
    sender: {
      name: "Nathan Peterson",
      avatar: "avatar-nathan-peterson.webp",
    },
    message: "reacted to your recent post",
    subject: "5 end-game strategies to increase your win rate",
    date: "2 week ago",
    read: true,
  },
  {
    id: 7,
    type: "comment",
    sender: {
      name: "Anna Kim",
      avatar: "avatar-anna-kim.webp",
    },
    message: "left the group Chess Club",
    subject: "Chess Club",
    date: "2 week ago",
    read: true,
  },
];

const INITIAL_STATE: NotificationsState = {
  notifications,
  unread: notifications.filter((notification) => !notification.read).length,
};

export const NotificationsProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState(INITIAL_STATE);

  const markAllAsRead = () => {
    const newNotifications = state.notifications.map((notification) => ({
      ...notification,
      read: true,
    }));
    setState({
      ...state,
      notifications: newNotifications,
    });
  };

  const markAsRead = (notificationId: number) => {
    const newNotifications = state.notifications.map((notification) => {
      if (notification.id === notificationId) {
        return {
          ...notification,
          read: true,
        };
      }
      return notification;
    });
    setState({
      ...state,
      notifications: newNotifications,
    });
  };

  useEffect(() => {
    const unread = state.notifications.filter(
      (notification) => !notification.read
    ).length;
    setState({
      ...state,
      unread,
    });
  }, [state.notifications]);

  return (
    <NotificationsContext.Provider
      value={{
        ...state,
        markAllAsRead,
        markAsRead,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};
