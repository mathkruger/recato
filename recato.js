const Base = {
  element(tag, ...children) {
    const fromTag = typeof(tag) === "string";
    const el = fromTag ? document.createElement(tag) : tag;

    if (fromTag) {
      el.replaceChildren();
    }
    
    const appendChildren = () => {
      children.forEach(x => {
        if (typeof(x) == "string") {
          el.appendChild(document.createTextNode(x));
        } else if (typeof(x) === "function") {
          el.appendChild(x());
        } else {
          el.appendChild(x);
        }
      });
    }

    appendChildren();
  
    el.attr = function(attr, value) {
      this.setAttribute(attr, value);
      return this;
    }
  
    el.click = function(callback) {
      this.onclick = callback;
      return this;
    }

    el.change = function(callback) {
      this.onchange = callback;
      return this;
    }

    el.update = function() {
      el.replaceChildren();
      appendChildren();
    }
  
    return el;
  },
  
  img(url) {
    return Base.element("img").attr("src", url);
  },

  init(containerId, ...elements) {
    const container = document.getElementById(containerId);

    elements.forEach(el => {
      container.appendChild(el);
    });
  },

  html(strings, ...values) {
    const el = document.createElement("template");

    let innerHTML = "";

    strings.forEach((x, i) => {
      const value = values[i];
      innerHTML += String.raw`${x}${value != null ? value : ""}`;
    });

    el.innerHTML = innerHTML.trim();

    const first = el.content.firstChild;
    return Base.element(first, ...first.childNodes);
  }
};

["div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "canvas", "a", "figure", "nav", "button"].forEach(tag => {
  Base[tag] = (...children) => Base.element(tag, ...children);
});

const Router = {
  router(routes, routerChangeCallback = null) {
    const result = Base.div().attr("id", "router-container");
  
    result.updateAll = () => {
      result.replaceChildren();
  
      result.currentUrl = document.location.hash.split("#")[1] || "/";

      const route = routes[result.currentUrl] || routes["/404"];
      const elementToRender = !route ? this.notFound(result) : route(result);

      result.appendChild(elementToRender);
      
      return result;
    }
  
    window.addEventListener("hashchange", () => {
      result.updateAll();

      if (routerChangeCallback) {
        routerChangeCallback(result);
      }
    });

    result.updateAll();
  
    return result;
  },
  
  notFound(router) {
    return Base.div(Base.h1("404"), "Página " + router.currentRoute + " não encontrada!");
  },
}

const Recato = {
  ...Base,
  ...Router
}

export default Recato;