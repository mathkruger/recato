import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { h1, p } = Recato;

const Home = (router) => BasePage(
  router,
  h1("Homepage"),
  p("Bem vindo amigo!"),
);

export default Home;