import Fausto from "./pages/fausto.js";
import Home from "./pages/home.js";
import NotFound from "./pages/not-found.js";
import Reacto from "./vendor/reacto.js";
const { router } = Reacto;

const Router = () => router({
  "/": Home,
  "/fausto": Fausto,
  "/404": NotFound
});

export default Router;