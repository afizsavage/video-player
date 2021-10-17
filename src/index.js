import _ from "lodash";
import "./style.css";
import LogoImg from "./assets/logo.png";

const Logo = new Image();
Logo.src = LogoImg;
Logo.width = 30;

function Header() {
  const header = document.createElement("header");

  header.classList.add("header");
  // header.innerHTML = _.join(["Hello"], " ");
  header.appendChild(Logo);

  return header;
}

const Page = () => {
  const container = document.createElement("div");

  container.classList.add("page");
  container.appendChild(Header());

  return container;
};

document.body.appendChild(Page());
