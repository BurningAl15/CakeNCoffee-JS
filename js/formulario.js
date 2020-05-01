// Objecto con propiedades de formulario
var propFormulario = {
  //   formulario: document.getElementsByClassName("formulario_contacto")[0],
  //   elementos: document.getElementsByClassName("formulario_contacto")[0].elements
  formulario: document.formulario_contacto,
  elementos: document.formulario_contacto.elements,
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
        console.log("Init");
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
  },
  focusInput: function () {
    this.parentElement.children[1].className = "label active";
    console.log("FOCUS");
  },
  blurInput: function () {
    if (this.value <= 0) {
      this.parentElement.children[1].className = "label";
      console.log("BLUR");
    }
  },
};

metFormulario.inicio();
