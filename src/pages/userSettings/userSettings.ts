import { Button } from "../../components/button/index";
import Input from "../../components/input";
import Block from "../../services/block";
import template from "./userSettings.hbs";
import { focusin, focusout, submit } from "../../services/validation";

export class UserSettings extends Block {
  constructor() {
    super();
  }

  protected init(): void {
    this.children.userSettingsFirstName = new Input({
      classInput: "input userSettingsFirstName",
      name: "first_name",
      type: "text",
      label: "Имя",
      placeholder: "Имя",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.userSettingssecondName = new Input({
      classInput: "input userSettingssecondName",
      name: "second_name",
      type: "text",
      label: "Фамилия",
      placeholder: "Фамилия",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.userSettingsLogin = new Input({
      classInput: "input userSettingsLogin",
      name: "login",
      type: "text",
      label: "Логин",
      placeholder: "Логин",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.userSettingsEmail = new Input({
      classInput: "input registrationEmail",
      name: "email",
      type: "text",
      label: "Почта",
      placeholder: "Почта",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.userSettingsPassword = new Input({
      classInput: "input userSettingsPassword",
      name: "password",
      type: "text",
      label: "Пароль",
      placeholder: "Пароль",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.userSettingsPhone = new Input({
      classInput: "input userSettingsPhone",
      name: "phone",
      type: "text",
      label: "Телефон",
      placeholder: "Телефон",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });

    this.children.userSettingsOldPassword = new Input({
      classInput: "input userSettingsOldPassword",
      name: "oldPassword",
      type: "text",
      label: "Старый пароль",
      placeholder: "Старый пароль",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });

    this.children.userSettingsNewPassword = new Input({
      classInput: "input userSettingsNewPassword",
      name: "newPassword",
      type: "text",
      label: "Новый пароль",
      placeholder: "Новый пароль",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });

    this.children.userSettingsButton = new Button({
      label: "Сохранить",
      buttonClass: "user-settings-button",
      typeButton: "submit",
      events: {
        click: submit,
      },
    });
  }

  protected render(): DocumentFragment {
    console.log(template);
    return this.compile(template, this.props);
  }
}
