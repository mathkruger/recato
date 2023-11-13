const Base = {
  element(tag, ...children) {
    const el = document.createElement(tag);
    
    children.forEach(x => {
      if (typeof(x) == "string") {
        el.appendChild(document.createTextNode(x));
      } else {
        el.appendChild(x);
      }
    });
  
    el.attr = function(attr, value) {
      this.setAttribute(attr, value);
      return this;
    }
  
    el.click = function(callback) {
      this.onclick = callback;
      return this;
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
  }
};

["div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "canvas", "a", "figure", "nav", "button"].forEach(tag => {
  Base[tag] = (...children) => Base.element(tag, ...children);
});

const Router = {
  router(routes, routerChangeCallback = null) {
    const result = Base.div().attr("id", "router-container");
  
    result.update = () => {
      result.replaceChildren();
  
      result.currentUrl = document.location.hash.split("#")[1] || "/";

      const route = routes[result.currentUrl] || routes["/404"];
      const elementToRender = !route ? this.notFound(result) : route(result);

      result.appendChild(elementToRender);

      return result;
    }
  
    window.addEventListener("hashchange", () => {
      result.update();

      if (routerChangeCallback) {
        routerChangeCallback(result);
      }
    });
    
    result.update();
  
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