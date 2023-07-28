import { Button } from "../../components/button/index";
import Input from "../../components/input";
import Block from "../../services/block";
import template from "./chatList.hbs";
import { focusin, focusout, submit } from "../../services/validation";

export class ChatList extends Block {
  constructor() {
    super();
  }

  protected init(): void {
    this.children.chatListInput = new Input({
      classInput: "input chatListInput",
      name: "message",
      type: "text",
      label: "",
      placeholder: "",
      error: "",
      value: "",
      events: {
        focusOut: focusout,
        focusIn: focusin,
      },
    });
    this.children.chatListButton = new Button({
      label: "Отправить",
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
