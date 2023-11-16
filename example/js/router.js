import Fausto from "./pages/fausto.js";
import Home from "./pages/home.js";
import NotFound from "./pages/not-found.js";
import Recato from "../../recato.js";
import Pokemon from "./pages/pokemon.js";

const { router } = Recato;

const Router = () => router({
  "/": Home,
  "/fausto": Fausto,
  "/pokemon": Pokemon,
  "/404": NotFound,
}, ({ currentUrl }) => {
  console.log("Navigated to " + currentUrl);
});

export default Router;