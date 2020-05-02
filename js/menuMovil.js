(function () {
  // Objecto con propiedades de menu movil
  var propMenu = {
    burger_menu: document.getElementById("burger_menu"),
    slideMenu: document.getElementById("slideMenu"),
    menu_activo: false,
    elem_menu: document.querySelectorAll("#slideMenu .menu-principal a"),
  };
  // Objecto con Métodos de menu movil
  var metMenu = {
    inicio: function () {
      propMenu.burger_menu.addEventListener("click", metMenu.toggleMenu);

      for (let i = 0; i < propMenu.elem_menu.length; i++) {
        propMenu.elem_menu[i].addEventListener("click", metMenu.ocultarMenu);
      }
    },
    toggleMenu: function () {
      if (propMenu.menu_activo == false) {
        console.log("Toggle");
        propMenu.menu_activo = true;
        propMenu.slideMenu.className = propMenu.slideMenu.className + " active";
      } else {
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace(
          "active",
          ""
        );
      }
    },
    ocultarMenu: function () {
      propMenu.menu_activo = false;
      propMenu.slideMenu.className = propMenu.slideMenu.className.replace(
        "active",
        ""
      );
    },
  };
  metMenu.inicio();
})();
