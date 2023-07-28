import Block from "./block";

export default function renderDOM(block: Block) {
  const root = document.querySelector("#app") as HTMLElement; // Add type assertion here

  root.innerHTML = "";
  root.appendChild(block.getContent());
}
