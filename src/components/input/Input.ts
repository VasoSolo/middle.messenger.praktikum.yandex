import Block from "../../services/block";
import template from "./input.hbs";

export interface InputProps {
  label?: string;
  type: string;
  value?: string;
  classInput?: string;
  classLabel?: string;
  placeholder?: string;
  name?: string;
  disabled?: boolean;
  events?: Record<string, (e: InputEvent) => void>;
  errorLabelClass?: string;
  error?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
