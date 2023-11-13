import Recato from "../../../recato.js";
import Header from "../components/header.js";
const { div } = Recato;

const BasePage = (router, ...children) => {
  const base = div(
    Header(router),
    () => div(...children).attr("class", "container")
  );

  return base;
}

export default BasePage;