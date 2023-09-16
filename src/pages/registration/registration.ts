import { Button } from "../../components/button/index";
import Input from "../../components/input";
import Block from "../../services/block";
import template from "./registration.hbs";
import { focusin, focusout, submit } from "../../services/validation";
import router from "../../routing/router";
import { CHAT_PAGE, ERROR_PAGE_404 } from "../../routing/routes";

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
        focusout: focusout,
        focusin: focusin,
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
        focusout: focusout,
        focusin: focusin,
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
        focusout: focusout,
        focusin: focusin,
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
        focusout: focusout,
        focusin: focusin,
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
        focusout: focusout,
        focusin: focusin,
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
        focusout: focusout,
        focusin: focusin,
      },
    });

    this.children.registrationButton = new Button({
      label: "Зарегистрироваться",
      buttonClass: "registration-button",
      typeButton: "submit",
      events: {
        click: (event: Event) => {
          event.preventDefault();
          console.log("click");
          submit(event);
        },
      },
    });
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
