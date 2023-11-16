import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { h1, p, div, button, element, img, html } = Recato;

const Pokemon = (router) => {
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
    () => data ? html`
    <div class="card p-4">
      <div class="columns">
        <div class="column">
          <img src="${data.sprites.front_default}" class="image" />
        </div>

        <div class="column">
          <img src="${data.sprites.back_default}" class="image" />
        </div>

        <div class="column">
          <img src="${data.sprites.front_shiny}" class="image" />
        </div>

        <div class="column">
          <img src="${data.sprites.back_shiny}" class="image" />
        </div>
      </div>

      <p>Nome: ${data.name}</p>
      <p>Habilidades: ${data.abilities.map(x => x.ability.name).join(", ")}</p>
      <p>Movimentos: ${data.moves.map(x => x.move.name).join(", ")}</p>
    </div>` : div()
  );

  return page;
}

export default Pokemon;