import Header from "./components/header.js";
import Router from "./router.js";
import Recato from "../../recato.js";

Recato.init("app",
  Header(),
  Router()
);
