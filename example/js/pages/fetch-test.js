import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { h1, p, div, button, element, img } = Recato;

const FetchTest = (router) => {
  let data = null;
  let pokemonName = "";

  const onInputChange = (event) => {
    pokemonName = event.target.value;
  }

  const fetchData = async () => {
    const api = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
    data = await fetch(api).then(value => value.json());
    page.update();
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