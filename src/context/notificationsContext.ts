import { createContext } from "react";

export interface INotification {
  id: number | string;
  type: TNotificationType;
  sender: ISender;
  message: string;
  subject: string;
  date: string;
  image?: string;
  privateMessageContent?: string;
  read: boolean;
}

export interface ISender {
  name: string;
  avatar: string;
}

export type TNotificationType =
  | "reaction"
  | "comment"
  | "group"
  | "follow"
  | "private-message";

export interface NotificationsContextProps {
  notifications: INotification[];
  unread: number;
  markAllAsRead: () => void;
  markAsRead: (notificationId: number) => void;
}

export const NotificationsContext = createContext(
  {} as NotificationsContextProps
);
