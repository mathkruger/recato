import Reacto from "../../../reacto.js";
const { div, a, nav } = Reacto;

const Header = () => {
  return nav(
    div(
      a("Sistemas de testes")
        .attr("class", "navbar-item")
        .attr("href", "#"),
    ).attr("class", "navbar-brand"),
    div(
      div(
        a("Fausto")
          .attr("class", "navbar-item")
          .attr("href", "#/fausto")
      ).attr("class", "navbar-start")
    ).attr("class", "navbar-menu is-active")
  ).attr("class", "navbar");
};

export default Header;