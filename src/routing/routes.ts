import Authorization from "../pages/authorization";
import ChatList from "../pages/chatList";
import Error404 from "../pages/error/404";
import Error500 from "../pages/error/500";
import Registration from "../pages/registration";
import UserSettings from "../pages/userSettings";

export type TRoutes = {
  [key: string]: any;
};

export const LOGIN_PAGE = "/";
export const REGISTRATION_PAGE = "/registration";
export const CHAT_PAGE = "/chatList";
export const PROFILE_PAGE = "/userSettings";
// export const PROFILE_EDIT_PAGE = "/settings/edit";
// export const PROFILE_CHANGE_PASSWORD_PAGE = "/settings/change-password";
export const ERROR_PAGE_404 = "/error/404";
export const ERROR_PAGE_500 = "/error/500";

export const Routers: TRoutes = {
  [LOGIN_PAGE]: Authorization,
  [REGISTRATION_PAGE]: Registration,
  [CHAT_PAGE]: ChatList,
  [PROFILE_PAGE]: UserSettings,
  [ERROR_PAGE_404]: Error404,
  [ERROR_PAGE_500]: Error500,
};
