import { Button } from "../../components/button/index";
import Input from "../../components/input";
import Block from "../../services/block";
import template from "./authorization.hbs";
import { focusin, focusout, submit } from "../../services/validation";

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
        click: submit,
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
