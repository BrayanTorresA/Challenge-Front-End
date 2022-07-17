import mediaQueryCelularHorizontal from "./mediaQuery.js";
const body = document.body;
const scrollArriba = "scroll-up";
const scrollAbajo = "scroll-down";
let scrollUltimo = 0;

const menu = () => {
  visibilidadMenuEnFormulario();
  window.addEventListener("resize", visibilidadMenuEnFormulario);
  window.addEventListener("scroll", visualizacionMenu);
}
const visibilidadMenuEnFormulario = () => {
  const inputs = document.querySelectorAll("[data-campo]");
  const anchoValido = mediaQueryCelularHorizontal();
  if (anchoValido) {
    inputs.forEach((input) => {
      input.addEventListener("focus", ocultarMenu);
      input.addEventListener("keyup", ocultarMenu);
      input.addEventListener("blur", mostrarMenu);
    });
  }else{
    inputs.forEach((input) => {
      input.removeEventListener("focus", ocultarMenu);
      input.removeEventListener("keyup", ocultarMenu);
      input.removeEventListener("blur", mostrarMenu);
    });
    }
  return;
}

const visualizacionMenu = () => {
  const actualScroll = window.scrollY;
  if (actualScroll == 0) {
      body.classList.remove(scrollArriba);
      return;
  }
  if (actualScroll > scrollUltimo && !body.classList.contains(scrollAbajo)) {
      ocultarMenu();
  } else if (actualScroll < scrollUltimo && body.classList.contains(scrollAbajo)) {
      mostrarMenu();
  }
  scrollUltimo = actualScroll;
}

const mostrarMenu = () => {
  body.classList.add(scrollArriba);
  body.classList.remove(scrollAbajo);
}

const ocultarMenu = () => {
  body.classList.add(scrollAbajo);
  body.classList.remove(scrollArriba);
}

export default menu;