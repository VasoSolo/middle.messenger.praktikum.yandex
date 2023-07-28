import { Button } from "../../../components/button/index";
import Input from "../../../components/Input/index";
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
