import Reacto from "../vendor/reacto.js";

const { div, h1, p } = Reacto;

const Home = () => div(
  h1("Homepage"),
  p("Bem vindo amigo!"),
).attr("class", "container");

export default Home;