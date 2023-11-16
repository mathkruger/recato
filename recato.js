/**
 * @typedef RecatoHTMLElement
 * @property {(attr: string, value: any) => RecatoHTMLElement} attr Set an attribute
 * @property {(callback: function) => RecatoHTMLElement} click Handles the click event
 * @property {(callback: function) => RecatoHTMLElement} change Handles the change event
 * @property {() => RecatoHTMLElement} update Updates the elements
 */

/**
 * @typedef RouterHTMLElement
 * @property {() => HTMLElement} updateAll the function to render the route component
 */

/**
 * @typedef BaseElements
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} div creates an div element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h1 creates an h1 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h2 creates an h2 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h3 creates an h3 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h4 creates an h4 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h5 creates an h5 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} h6 creates an h6 element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} p creates an p element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} span creates an span element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} canvas creates an canvas element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} a creates an a element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} figur creates an figur element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} nav creates an nav element
 * @property {(...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} button creates an button element
 * @property {(url: string) => RecatoHTMLElement} img creates an img element, passing an url
 * @property {(strings: string[], values: any[]) => RecatoHTMLElement} html Tagged template literal that receives HTML and creates an {RecatoHTMLElement} from it
 * @property {(containerId: string, ...elements: Array<RecatoHTMLElement | RouterHTMLElement>) => RecatoHTMLElement} init Initializes the application
 * @property {(tag: string | HTMLElement, ...children: Array<string | function | HTMLElement>) => RecatoHTMLElement} element A function to create an HTML Element
 */

/**
 * @type {BaseElements}
 */
const Base = {
  element(tag, ...children) {
    const fromTag = typeof(tag) === "string";

    /**
     * @type {RecatoHTMLElement}
     * @extends {HTMLElement}
     */
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
  Base[tag] = function (...children) {
    return Base.element(tag, ...children);
  }
});

const Router = {
  /**
   * A simple router
   * @param {Object.<string, function>} routes the routes configuration object, should have an route path and a function that returns an HTMLElement
   * @param {function} routerChangeCallback an option route change callback
   * @returns {RouterHTMLElement}
   */
  router(routes, routerChangeCallback = null) {
    /**
     * @type {RouterHTMLElement}
     * @extends {RecatoHTMLElement}
     */
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
  
  /**
   * a simple function that returns a not found page
   * 
   * @param {RouterHTMLElement} router the HTMLElement that holds the router
   * @returns {RecatoHTMLElement}
   */
  notFound(router) {
    return Base.div(Base.h1("404"), "Página " + router.currentRoute + " não encontrada!");
  },
}

const Recato = {
  ...Base,
  ...Router
}

export default Recato;