(function () {
  // Objecto con propiedades de Scroll
  var propScroll = {
    posicion: window.pageYOffset,
    scroll_suave: document.getElementsByClassName("soft-scroll"),
    regresar: document.getElementsByClassName("return"),
    destino: null,
    seccion_distancia: null,
    intervalo: null,
  };
  // Objecto con Métodos de Scroll
  var metScroll = {
    inicio: function () {
      for (let i = 0; i < propScroll.scroll_suave.length; i++) {
        propScroll.scroll_suave[i].addEventListener("click", metScroll.moverse);
      }

      for (let i = 0; i < propScroll.regresar.length; i++) {
        propScroll.regresar[i].addEventListener("click", metScroll.subir);
      }
    },
    moverse: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);

      propScroll.destino = this.getAttribute("href");
      propScroll.seccion_distancia =
        document.querySelector(propScroll.destino).offsetTop - 94;

      propScroll.posicion = window.pageYOffset;
      propScroll.intervalo = setInterval(() => {
        if (propScroll.posicion < propScroll.seccion_distancia) {
          propScroll.posicion += 30;
          if (propScroll.posicion >= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        } else {
          propScroll.posicion -= 30;
          if (propScroll.posicion <= propScroll.seccion_distancia) {
            clearInterval(propScroll.intervalo);
          }
        }
        window.scrollTo(0, propScroll.posicion);
      }, 15);
      console.log("Moverse");
    },
    subir: function (e) {
      e.preventDefault();
      clearInterval(propScroll.intervalo);

      propScroll.destino = window.pageYOffset;
      propScroll.intervalo = setInterval(() => {
        if (propScroll.posicion > 0) {
          propScroll.posicion -= 30;
          if (propScroll.posicion <= 0) {
            clearInterval(propScroll.intervalo);
          }
        } else {
          return;
        }
        window.scrollTo(0, propScroll.posicion);
      }, 15);
      console.log("Subir");
    },
  };

  metScroll.inicio();
})();
