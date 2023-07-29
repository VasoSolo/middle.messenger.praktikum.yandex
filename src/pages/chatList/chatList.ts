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
      classInput: "input chat-list-input",
      name: "message",
      type: "text",
      label: "",
      placeholder: "",
      error: "",
      value: "",
      events: {
        focusout: focusout,
        focusin: focusin,
      },
    });
    this.children.chatListButton = new Button({
      label: "Отправить",
      buttonClass: "chat-list-button",
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
