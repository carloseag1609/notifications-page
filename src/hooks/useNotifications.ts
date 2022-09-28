import { useContext } from "react";
import { NotificationsContext } from "../context/notificationsContext";

export const useNotifications = () => {
  return useContext(NotificationsContext);
};
