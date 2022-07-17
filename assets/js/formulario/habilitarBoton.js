export function habilitarBotonEnviar() {
  const nombre = document.getElementById("nombre");
  const correo = document.getElementById("email");
  const asunto = document.getElementById("asunto");
  const mensaje = document.getElementById("mensaje");
  const btnEnviar = document.getElementById("btn-enviar");
  let nombreValido = nombre.validity.valid;
  let correoValido = correo.validity.valid;
  let asuntoValido = asunto.validity.valid;
  let mensajeValido = mensaje.validity.valid;

  if (nombreValido && correoValido && asuntoValido && mensajeValido) {
      btnEnviar.removeAttribute("disabled");
      btnEnviar.classList.remove("btn--bloqueado");
  } else {
      btnEnviar.setAttribute("disabled", "true");
      btnEnviar.classList.add("btn--bloqueado");
  }
}