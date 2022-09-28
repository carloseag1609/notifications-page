import { Notifications } from "./components/notifications";
import { NotificationsProvider } from "./context/NotificationsProvider";

function App() {
  return (
    <NotificationsProvider>
      <Notifications />
    </NotificationsProvider>
  );
}

export default App;
