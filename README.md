# Recato

Um framework web duvidoso, sem pretensão de ser levado a sério. É só mais umm framework js, pode parar de olhar, ok?

## Recursos

- JS puro
- Páginas escritas em JS, sem essa frescura de HTML
- Eu já falei que é tudo JS?
- Tem um router bem legalzinho.


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
          let counter = 0;

          const onClick = () => {
            counter += 1;
            page.update();
          }

          const page = Recato.div(
            Recato.h1("Oloco meu!"),
            () => Recato.p("EXATAMENTE 8 E " + counter),
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