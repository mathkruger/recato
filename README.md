# Recato

Um framework web duvidoso, sem pretensão de ser levado a sério. É só mais um framework js, pode parar de olhar, ok?

## Recursos

- JS puro
- Sem dependências externas, é só um script de 99 linhas
- Páginas escritas em JS, sem essa frescura de HTML
- Eu já falei que é tudo JS?
- Tem um router bem legalzinho.
- Controle de estado sem frescura. Uma variável é uma variável!
- Ok, se você ainda quiser usar HTML, você pode, seu frescurento! (Exemplo abaixo)

## Uso

``` html
<html>
  <head>
    <title>Olá</title>
  </head>

  <body>
    <div id="app"></div>

    <script type="module">
      import Recato from "./recato.js";

      const app = Recato.router({
        "/": (router) => Recato.div(
          Recato.h1("Olá, mundo!"),
          Recato.p("Rota atual: " + router.currentUrl),
          Recato.a("faustop").attr("href", "#/faustop")
        ),
        "/faustop": () => {
          let counter = 7;

          const onClick = () => {
            counter += 1;
            page.update();
          }

          const page = Recato.div(
            Recato.h1("Oloco meu!"),
            () => Recato.html`<p>Exatamente as 8 e ${counter}</p>`,
            Recato.element("button", "Hora").click(onClick),
            Recato.a("voltar").attr("href", "#/")
          );

          return page;
        },
      });

      Recato.init("app", router);
    </script>
  </body>
</html>
```

Se quiser um exemplo mais sofisticado, usando padrões de projeto e toda essa porcaria, veja a pasta `example`