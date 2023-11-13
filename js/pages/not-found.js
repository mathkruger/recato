import Reacto from "../vendor/reacto.js";

const { div, h1, p } = Reacto;

const NotFound = () => div(
  h1("Erroooooou"),
  p("Essa página não existe bicho"),
).attr("class", "container");

export default NotFound;