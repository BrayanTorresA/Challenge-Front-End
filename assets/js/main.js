import { habilitarBotonEnviar } from "./formulario/habilitarBoton.js";
import menu from "../js/componentes/menu.js";
import validarCampos from "./formulario/validarCampos.js";

(() => {

  const formularioContacto = document.querySelector(".formulario-container__formulario");

  menu();
  validarCampos();
  habilitarBotonEnviar();

  const validarBtnFormulario = (event) => {
    const element = event.target;
    if (element && element.tagName == 'INPUT') {
      habilitarBotonEnviar();
    } else if (element && element.tagName == 'TEXTAREA') {
      habilitarBotonEnviar();
    }
  }

  formularioContacto.addEventListener("keyup", validarBtnFormulario);
})();