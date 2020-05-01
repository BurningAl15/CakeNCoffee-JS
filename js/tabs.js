(function () {
  // Objecto con propiedades de Tab
  var propTabs = {
    primer_encabezado: document.getElementById("encabezado_menu")
      .firstElementChild,
    primer_contenido: document.getElementById("contenido_menu")
      .firstElementChild,
    enlaces_encabezado: document.querySelectorAll("#encabezado_menu li a"),
    li_encabezado: document.querySelectorAll("#encabezado_menu li"),
    divs_contenido: document.querySelectorAll("#contenido_menu > div"),
    contenido_activo: null,
  };
  // Objecto con Métodos de Tab
  var metTabs = {
    inicio: function () {
      propTabs.primer_encabezado.className = "active";
      propTabs.primer_contenido.className = "active";

      //añade event listener a todos los enlaces que tengan el id #encabezado_menu li a
      for (let i = 0; i < propTabs.enlaces_encabezado.length; i++) {
        propTabs.enlaces_encabezado[i].addEventListener(
          "click",
          metTabs.evento
        );
      }
    },
    evento: function (e) {
      e.preventDefault();
      for (let i = 0; i < propTabs.li_encabezado.length; i++) {
        propTabs.li_encabezado[i].className = "";
      }

      for (let i = 0; i < propTabs.divs_contenido.length; i++) {
        propTabs.divs_contenido[i].className = "";
      }

      this.parentElement.className = "active";
      propTabs.contenido_activo = this.getAttribute("href");

      document.querySelector(propTabs.contenido_activo).className = "active";
      metTabs.changeOpacity(0);

      setTimeout(() => {
        metTabs.changeOpacity(1);
      }, 100);
    },
    changeOpacity(value) {
      document.querySelector(propTabs.contenido_activo).style.opacity = value;
    },
  };

  metTabs.inicio();
})();
