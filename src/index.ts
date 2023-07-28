import Authorization from "./pages/authorization/index";
import renderDOM from "./services/renderInDom";

window.addEventListener("DOMContentLoaded", () => {
  //   const homePage = new HomePage({
  //     inputs: [],
  //   });
  const authorizationPage = new Authorization({
    inputs: [],
  });
  //   const deleteUserPage = new DeleteUserPage({
  //     inputs: [],
  //   });
  //   const addUserPage = new AddUserPage({
  //     inputs: [],
  //   });
  //   const editPasswordPage = new EditPasswordPage({
  //     inputs: [],
  //   });
  //   const profilePage = new ProfilePage({
  //     inputs: [],
  //   });
  //   const editDetailsPage = new EditDetailsPage({
  //     inputs: [],
  //   });
  //   const registrationPage = new RegistrationPage({
  //     inputs: [],
  //   });
  //   const loadFilePage = new LoadFilePage({});
  //   const error500Page = new Error500Page({});
  //   const error404Page = new Error404Page({});

  switch (window.location.pathname) {
    case "/authorization":
      renderDOM(authorizationPage);
      break;
    // case "/registration":
    //   renderDOM(registrationPage);
    //   break;
    // case "/load-file":
    //   renderDOM(loadFilePage);
    //   break;
    // case "/error-500":
    //   renderDOM(error500Page);
    //   break;
    // case "/error-404":
    //   renderDOM(error404Page);
    //   break;
    // case "/edit-password":
    //   renderDOM(editPasswordPage);
    //   break;
    // case "/profile":
    //   renderDOM(profilePage);
    //   break;
    // case "/edit-details":
    //   renderDOM(editDetailsPage);
    //   break;
    // case "/delete-user":
    //   renderDOM(deleteUserPage);
    //   break;
    // case "/add-user":
    //   renderDOM(addUserPage);
    //   break;
    default:
      renderDOM(authorizationPage);
      break;
  }
});
