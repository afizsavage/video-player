import _ from "lodash";
import "./style.css";

function Header() {
  const header = document.createElement("header");

  header.classList.add("header");
  header.innerHTML = _.join(["Hello"], " ");

  return header;
}

const Page = () => {
  const container = document.createElement("div");

  container.classList.add("page");
  container.appendChild(Header());

  return container;
};

document.body.appendChild(Page());
