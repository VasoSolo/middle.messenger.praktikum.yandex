import LoginController from "./controllers/LoginController";
import router from "./routing/router";
import {
  CHAT_PAGE,
  LOGIN_PAGE,
  Routers,
  REGISTRATION_PAGE,
} from "./routing/routes";

// window.addEventListener("DOMContentLoaded", () => {
//   Object.keys(Routers).map((item) => router.use(item, Routers[item] as any));
//   console.log("DOMContentLoaded");
//   router.start();
//   router.go(LOGIN_PAGE);
// });
window.addEventListener("DOMContentLoaded", async () => {
  Object.keys(Routers).map((item) => router.use(item, Routers[item] as any));
  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case LOGIN_PAGE:
    case REGISTRATION_PAGE:
      isProtectedRoute = false;
      break;
  }
  try {
    await LoginController.fetchUser();
    router.start();
    if (!isProtectedRoute) {
      // router.go(CHAT_PAGE);
    }
  } catch (e) {
    console.log(e);
    router.start();
    if (isProtectedRoute) {
      // router.go(CHAT_PAGE);
    }
  }
});
