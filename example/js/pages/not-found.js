import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { div, h1, p } = Recato;

const NotFound = (router) => BasePage(router, div(
  h1("Erroooooou"),
  p(`A páginna ${router.currentUrl} página não existe bicho`),
).attr("class", "container"));

export default NotFound;