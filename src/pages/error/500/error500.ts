import Block from "../../../services/block";
import template from "./error500.hbs";

export class Error500 extends Block {
  constructor() {
    super();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
