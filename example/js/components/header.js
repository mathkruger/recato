import Recato from "../../../recato.js";
const { div, a, nav } = Recato;

const Header = (router) => {
  const routes = [
    {
      label: "Fausto",
      url: "/fausto",
    },
    {
      label: "Pokemon",
      url: "/pokemon",
    },
  ];

  const component = nav(
    div(
      a("Sistemas de testes")
        .attr(
          "class",
          "navbar-item"
        )
        .attr("href", "#/")
    ).attr("class", "navbar-brand"),
    div(
      div(
        ...routes.map((x) =>
          a(x.label)
            .attr(
              "class",
              "navbar-item " +
                (router.currentUrl === x.url ? "is-active" : "")
            )
            .attr("href", `#${x.url}`)
        )
      ).attr("class", "navbar-start")
    ).attr("class", "navbar-menu is-active")
  ).attr("class", "navbar");

  return component;
};

export default Header;
