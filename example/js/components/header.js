import Recato from "../../../recato.js";
const { div, a, nav } = Recato;

const Header = (router) => {
  const component = nav(
    div(
      a("Sistemas de testes")
        .attr("class", "navbar-item " + (router.currentUrl === '/' ? "is-active" : ""))
        .attr("href", "#"),
    ).attr("class", "navbar-brand"),
    div(
      div(
        a("Fausto")
          .attr("class", "navbar-item " + (router.currentUrl === '/fausto' ? "is-active" : ""))
          .attr("href", "#/fausto")
      ).attr("class", "navbar-start")
    ).attr("class", "navbar-menu is-active")
  ).attr("class", "navbar");

  return component;
};

export default Header;
