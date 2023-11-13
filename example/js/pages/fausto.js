import Recato from "../../../recato.js";
import BasePage from "./_base.js";

const { h1, img, figure, p } = Recato;

let faustoIndex = 0;

const faustoImgUrl = [
  "https://s2.glbimg.com/JR1i4c1glD-70EYjUY-IEIzEUuc=/640x424/top/i.glbimg.com/og/ig/infoglobo/f/original/2021/04/30/faustao.jpg",
  "https://s2-quem.glbimg.com/qYjuVNNPZP-hhkb7FPG1-MhXMVk=/0x0:1200x678/888x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_b0f0e84207c948ab8b8777be5a6a4395/internal_photos/bs/2023/f/e/9WL9srR7GInZ0OmAzXPA/fausto-silva-apresentador.jpg",
];

const messages = ["Orra meu", "Essa fera ai bicho"];

const Fausto = (router) => {
  const imageClick = () => {
    faustoIndex = faustoIndex === 0 ? 1 : 0;
    component.update();
  };

  const component = BasePage(
    router,
    h1("Olá"),
    () => p(messages[faustoIndex]),
    () => figure(img(faustoImgUrl[faustoIndex]))
      .attr("class", "image")
      .click(imageClick)
  );

  return component;
};

export default Fausto;
