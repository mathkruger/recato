import Recato from "../../../recato.js";

const { div, h1, p, img, figure } = Recato;

const faustoImgUrl =
  "https://s2.glbimg.com/JR1i4c1glD-70EYjUY-IEIzEUuc=/640x424/top/i.glbimg.com/og/ig/infoglobo/f/original/2021/04/30/faustao.jpg";

const Fausto = () => {
  function imageClick() {
    this.classList.toggle("is-128x128");
  }

  const component = div(
    h1("Olá"),
    p("eae irmao"),
    figure(
      img(faustoImgUrl),
    ).attr("class", "image").click(imageClick),
  ).attr("class", "container");

  return component;
}

export default Fausto;