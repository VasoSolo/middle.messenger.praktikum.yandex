import { Button } from "../../components/button/index";
import Input from "../../components/Input/index";
import Block from "../../services/block";
import template from "./registration.hbs";
import { focusin, focusout, submit } from "../../services/validation";

export class Registration extends Block {
  constructor() {
    super();
  }

  protected init(): void {
    this.children.registrationFirstName = new Input({
      classInput: "input registrationFirstName",
      name: "first_name",
      type: "text",
      label: "",
      placeholder: "Имя",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.registrationSecondName = new Input({
      classInput: "input registrationSecondName",
      name: "second_name",
      type: "text",
      label: "",
      placeholder: "Фамилия",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.registrationLogin = new Input({
      classInput: "input registrationLogin",
      name: "login",
      type: "text",
      label: "",
      placeholder: "Логин",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.registrationEmail = new Input({
      classInput: "input registrationEmail",
      name: "email",
      type: "text",
      label: "",
      placeholder: "Почта",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.registrationPassword = new Input({
      classInput: "input registrationPassword",
      name: "password",
      type: "text",
      label: "",
      placeholder: "Пароль",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.registrationPhone = new Input({
      classInput: "input registrationPhone",
      name: "phone",
      type: "text",
      label: "",
      placeholder: "Телефон",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });

    this.children.registrationButton = new Button({
      label: "Зарегистрироваться",
      buttonClass: "registrationButton",
      typeButton: "submit",
      events: {
        click: submit,
      },
    });
  }

  protected render(): DocumentFragment {
    console.log(this.props);
    return this.compile(template, this.props);
  }
}