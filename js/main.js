import Header from "./components/header.js";
import Router from "./router.js";
import Reacto from "./vendor/reacto.js";

Reacto.init("app",
  Header(),
  Router()
);
