import Recato from "../../../recato.js";

const { div, h1, p } = Recato;

const NotFound = () => div(
  h1("Erroooooou"),
  p("Essa página não existe bicho"),
).attr("class", "container");

export default NotFound;