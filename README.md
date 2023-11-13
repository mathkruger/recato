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
      import Recato from "https://cdn.jsdelivr.net/gh/mathkruger/recato/recato.js";

      let counter = 0;

      const router = Recato.router({
        "/": () => Recato.div(
          Recato.h1("Olá, mundo!"),
          Recato.a("faustop").attr("href", "#/faustop")
        ),
        "/faustop": (router) => {
          const onClick = () => {
            counter += 1;
            router.updateAll();
          }

          return Recato.div(
            Recato.h1("Oloco meu!"),
            Recato.p("EXATAMENTE 8 E " + counter),
            Recato.element("button", "Hora").click(onClick),
            Recato.a("voltar").attr("href", "#/")
          )
        },
      });

      Recato.init("app", router);
    </script>
  </body>
</html>
```

Se quiser um exemplo mais sofisticado, usando padrões de projeto e toda essa porcaria, veja a pasta `example`