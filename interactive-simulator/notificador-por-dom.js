export default class NotificadorPorDOM {
  constructor() {
    this.main = document.createElement("main");
    this.parrafoParaNotificarSiAdivinoLaBanda = document.createElement("p");
    this.encabezadoParaPresentarLaCancion = document.createElement("h3");
    this.parrafoDeFragmentoDeCancion = document.createElement("p");

    this.main.appendChild(this.parrafoParaNotificarSiAdivinoLaBanda);
    this.main.appendChild(this.encabezadoParaPresentarLaCancion);
    this.main.appendChild(this.parrafoDeFragmentoDeCancion);
    document.body.appendChild(this.main);
  }

  presentar(fragmentoDeCancion) {
    this.encabezadoParaPresentarLaCancion.innerText =
      "Esta es tu canción a adivinar...";
    this.parrafoDeFragmentoDeCancion.innerText = fragmentoDeCancion.letra;
  }

  conElNombreDeLaBandaAdivinada(funcion) {
    const formulario = document.createElement("form");
    formulario.onsubmit = (event) => {
      event.preventDefault();
      const datosDelFormulario = Object.fromEntries(new FormData(event.target));
      formulario.remove();
      funcion(datosDelFormulario.nombre);
    };

    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", "nombre");
    etiqueta.innerText = "¿Qué banda la compuso?";

    const input = document.createElement("input");
    input.setAttribute("id", "nombre");
    input.setAttribute("name", "nombre");
    input.setAttribute("type", "text");

    const boton = document.createElement("button");
    boton.setAttribute("type", "submit");
    boton.innerText = "Enviar";

    formulario.appendChild(etiqueta);
    formulario.appendChild(input);
    formulario.appendChild(boton);
    this.main.appendChild(formulario);
  }

  pasoLaRonda(ronda) {
    this.parrafoParaNotificarSiAdivinoLaBanda.style.color = "green";
    this.parrafoParaNotificarSiAdivinoLaBanda.innerText = `Correcto, la canción es ${ronda.fragmentoDeCancion.nombreDeLaCancion}, de la banda ${ronda.fragmentoDeCancion.nombreDeLaBanda}. Pasaste la ronda ${ronda.numero}.`;
  }

  noAdivinoYLeQuedan(cantidadDeIntentosRestantes) {
    this.parrafoParaNotificarSiAdivinoLaBanda.style.color = "red";
    this.parrafoParaNotificarSiAdivinoLaBanda.innerText = `Fallaste, pero no te rindas. Intentos restantes: ${cantidadDeIntentosRestantes}`;
  }

  seGanoElJuego() {
    this.seTerminoElJuego(
      "Felicitaciones, ganaste el juego! Ganaste cien mil pesos!",
      "green"
    );
  }

  sePerdioElJuego() {
    this.seTerminoElJuego(
      "Que lástima, perdiste el juego. Mejor suerte la próxima!",
      "red"
    );
  }

  seTerminoElJuego(resultado, colorDeTexto) {
    let resultadoDelJuego = document.createElement("h3");
    resultadoDelJuego.innerText = resultado;
    resultadoDelJuego.style.color = colorDeTexto;
    this.encabezadoParaPresentarLaCancion.remove();
    this.parrafoDeFragmentoDeCancion.remove();
    this.parrafoParaNotificarSiAdivinoLaBanda.remove();
    this.main.appendChild(resultadoDelJuego);
  }
}
