(function () {
  // Objecto con propiedades de formulario
  var propFormulario = {
    //   formulario: document.getElementsByClassName("formulario_contacto")[0],
    //   elementos: document.getElementsByClassName("formulario_contacto")[0].elements
    formulario: document.formulario_contacto,
    elementos: document.formulario_contacto.elements,
    error: null,
    textError: null,
  };
  // Objecto con Métodos de formulario
  var metFormulario = {
    inicio: function () {
      for (let i = 0; i < propFormulario.elementos.length; i++) {
        //Recuerda que nodeName puede dar un valor en mayusculas, por lo que transformarlo a lowercase
        //Puede ser la mejor idea
        if (
          propFormulario.elementos[i].type == "text" ||
          propFormulario.elementos[i].type == "email" ||
          propFormulario.elementos[i].nodeName.toLowerCase() == "textarea"
        ) {
          propFormulario.elementos[i].addEventListener(
            "focus",
            metFormulario.focusInput
          );

          propFormulario.elementos[i].addEventListener(
            "blur",
            metFormulario.blurInput
          );
        }
      }

      propFormulario.formulario.addEventListener(
        "submit",
        metFormulario.validarInputs
      );
    },
    focusInput: function () {
      this.parentElement.children[1].className = "label active";
    },
    blurInput: function () {
      if (this.value <= 0) {
        this.parentElement.children[1].className = "label";
      }
    },
    validarInputs: function (e) {
      for (let i = 0; i < propFormulario.elementos.length; i++) {
        if (propFormulario.elementos[i].value == "") {
          e.preventDefault();

          if (propFormulario.elementos[i].parentElement.children.length < 3) {
            propFormulario.error = document.createElement("p");
            propFormulario.textError = document.createTextNode(
              "Por favor llena el campo con tu " +
                propFormulario.elementos[i].name
            );
            propFormulario.error.appendChild(propFormulario.textError);
            propFormulario.error.className = "error";

            propFormulario.elementos[i].parentElement.appendChild(
              propFormulario.error
            );
          }
        } else {
          //   if (propFormulario.elementos[i].parentElement.children.length >= 3) {
          //     propFormulario.error = propFormulario.elementos[
          //       i
          //     ].parentElement.getElementsByTagName("p")[0];
          //     propFormulario.elementos[i].parentElement.removeChild(
          //       propFormulario.error
          //     );
          //   }
          if (propFormulario.elementos[i].parentElement.children.length >= 3) {
            propFormulario.error = propFormulario.elementos[
              i
            ].parentElement.getElementsByTagName("p")[0];
            propFormulario.elementos[i].parentElement.removeChild(propFormulario.error);
          }
        }
      }
    },
  };

  metFormulario.inicio();
})();
