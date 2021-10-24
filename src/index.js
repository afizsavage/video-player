import _ from "lodash";
import "./style.css";
import LogoImg from "./assets/logo.png";

const Logo = new Image();
Logo.src = LogoImg;
Logo.width = 30;

function mount_element(element, style, child) {
  element.classList.add(style);
  header.appendChild(child);

  return header;
}

function Header() {
  const header = document.createElement("header");

  mount_element(header, "header", Logo);
  // header.classList.add("header");
  // // header.innerHTML = _.join(["Hello"], " ");
  // header.appendChild(Logo);

  // return header;
}

// const Main = (params) => {
//   const main = document.createElement("main");
// };

const Page = () => {
  const container = document.createElement("div");

  container.classList.add("page");
  container.appendChild(Header());

  return container;
};

document.body.appendChild(Page());
