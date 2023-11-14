import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { h1, p, div, button, element, img } = Recato;

let data = null;
let pokemonName = "";

const FetchTest = (router) => {
  const onInputChange = (event) => {
    const value = event.target.value;
    pokemonName = value;
  }

  const fetchData = () => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(api).then(value => {
      return value.json();
    }).then(value => {
      data = value;

      page.update();
    });
  };

  const page = BasePage(
    router,
    h1("Teste Fetch"),
    div(
      p("Bem vindo amigo!"),
      element("input")
        .attr("class", "input")
        .attr("placeholder", "Nome do Pokemon")
        .attr("value", pokemonName)
        .change(onInputChange),
      button("Fetch Data").attr("class", "button").click(fetchData),
      element("br"),
    ).attr("class", "mb-4"),
    () => data ? div(
      div(
        div(
          img(data.sprites.front_default).attr("class", "image")
        ).attr("class", "column"),
        div(
          img(data.sprites.back_default).attr("class", "image")
        ).attr("class", "column"),
        div(
          img(data.sprites.front_shiny).attr("class", "image")
        ).attr("class", "column"),
        div(
          img(data.sprites.back_shiny).attr("class", "image")
        ).attr("class", "column")
      ).attr("class", "columns"),
      p("Name: " + data.name),
      p("Habilidades: " + data.abilities.map(x => x.ability.name).join(", ")),
      p("Movimentos: " + data.moves.map(x => x.move.name).join(", ")),
    ) : div()
  );

  return page;
}

export default FetchTest;