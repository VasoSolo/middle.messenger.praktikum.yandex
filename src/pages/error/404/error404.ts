import Block from "../../../services/block";
import template from "./error404.hbs";

export class Error404 extends Block {
  constructor() {
    super();
  }

  protected render(): DocumentFragment {
    return this.compile(template, this.props);
  }
}
