import { Button } from "../../components/button/index";
import Input from "../../components/input";
import Block from "../../services/block";
import template from "./authorization.hbs";
import { focusin, focusout, submit } from "../../services/validation";
import router from "../../routing/router";
import { REGISTRATION_PAGE } from "../../routing/routes";
import LoginController from "../../controllers/LoginController";

export class Authorization extends Block {
  constructor() {
    super();
  }

  protected init(): void {
    this.children.authorizationLogin = new Input({
      classInput: "input input-login",
      name: "login",
      type: "text",
      label: "",
      placeholder: "login",
      error: "",
      value: "",
      events: {
        focusout: focusout,
        focusin: focusin,
      },
    });
    this.children.authorizationPassword = new Input({
      classInput: "input input-password",
      name: "password",
      label: "",
      value: "",
      error: "",
      placeholder: "password",
      type: "password",
      events: {
        focusout: focusout,
        focusin: focusin,
      },
    });
    this.children.authorizationSubmitButton = new Button({
      label: "Войти",
      buttonClass: "authorization-button",
      typeButton: "submit",
      events: {
        click: (event: Event) => {
          event.preventDefault();
          if (submit(event)) {
            const formInputs =
              document.querySelectorAll<HTMLInputElement>(".input");
            console.log(formInputs[0].value, formInputs[1].value);
            LoginController.signin({
              login: formInputs[0].value,
              password: formInputs[1].value,
            });
          }
        },
      },
    });
    this.children.authorizationGoToReg = new Button({
      label: "Зарегистрироваться",
      buttonClass: "go-registration-button",
      events: {
        click: () => {
          router.go(REGISTRATION_PAGE);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
