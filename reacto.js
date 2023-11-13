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

["div", "h1", "h2", "h3", "h4", "h5", "h6", "p", "span", "canvas", "a", "figure", "nav"].forEach(tag => {
  Base[tag] = (...children) => Base.element(tag, ...children);
});

const Router = {
  router(routes) {
    const result = Base.div().attr("id", "router-container");
  
    result.update = () => {
      result.replaceChildren();
  
      const currentUrl = document.location.hash.split("#")[1] || "/";
      const route = routes[currentUrl] || routes["/404"];
  
      result.appendChild(!route ? this.notFound() : route());
      return result;
    }
  
    window.addEventListener("hashchange", result.update);
    result.update();
  
    return result;
  },
  
  notFound() {
    return Base.div(Base.h1("404"), "Page not found!");
  },
}

const Reacto = {
  ...Base,
  ...Router
}

export default Reacto;