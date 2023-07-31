import { Error404 } from "./pages/error/404/error404";
import { ChatList } from "./pages/chatList/chatList";
import Authorization from "./pages/authorization/index";
import { Registration } from "./pages/registration/registration";
import { UserSettings } from "./pages/userSettings/userSettings";
import { Error500 } from "./pages/error/500/error500";
import renderDOM from "./services/renderInDom";

window.addEventListener("DOMContentLoaded", () => {
  const authorizationPage = new Authorization();
  const registrationPage = new Registration();
  const chatListPage = new ChatList();
  const userSettingsPage = new UserSettings();
  const error404Page = new Error404();
  const error500Page = new Error500();

  switch (window.location.pathname) {
    case "/authorization":
      renderDOM(authorizationPage);
      break;
    case "/":
      renderDOM(authorizationPage);
      break;
    case "/registration":
      renderDOM(registrationPage);
      break;
    case "/chatList":
      renderDOM(chatListPage);
      break;
    case "/userSettings":
      renderDOM(userSettingsPage);
      break;
    case "/error404":
      renderDOM(error404Page);
      break;
    case "/error500":
      renderDOM(error500Page);
      break;

    default:
      renderDOM(error404Page);
      break;
  }
});
