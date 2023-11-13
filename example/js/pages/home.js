import Recato from "../../../recato.js";

const { div, h1, p } = Recato;

const Home = () => div(
  h1("Homepage"),
  p("Bem vindo amigo!"),
).attr("class", "container");

export default Home;