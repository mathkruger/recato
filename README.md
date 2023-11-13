# Recato

Um framework web duvidoso, sem pretensão de ser levado a sério. É só mais umm framework js, pode parar de olhar, ok?


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

      Recato.init("app", Recato.div(
        Recato.h1("Olá, mundo!")
      ));
    </script>
  </body>
</html>
```