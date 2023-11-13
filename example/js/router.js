import Fausto from "./pages/fausto.js";
import Home from "./pages/home.js";
import NotFound from "./pages/not-found.js";
import Recato from "../../recato.js";
const { router } = Recato;

const Router = () => router({
  "/": Home,
  "/fausto": Fausto,
  "/404": NotFound
}, ({ currentUrl }) => {
  console.log("Navigated to " + currentUrl);
});

export default Router;