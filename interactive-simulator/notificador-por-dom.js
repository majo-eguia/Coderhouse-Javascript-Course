export default class NotificadorPorDOM {
  constructor() {
    this.main = document.createElement("main");
    this.parrafoParaNotificarSiAdivinoElArtista = document.createElement("p");
    this.encabezadoParaPresentarLaCancion = document.createElement("h3");
    this.parrafoDeCancion = document.createElement("p");

    this.main.appendChild(this.parrafoParaNotificarSiAdivinoElArtista);
    this.main.appendChild(this.encabezadoParaPresentarLaCancion);
    this.main.appendChild(this.parrafoDeCancion);
    document.body.appendChild(this.main);
  }

  presentar(nombreDelJugador, cancion) {
    this.parrafoDeCancion.style.color = "green";
    this.encabezadoParaPresentarLaCancion.style.color = "lightblue";
    this.encabezadoParaPresentarLaCancion.innerText = `${nombreDelJugador}, esta es tu canción a adivinar...`;
    this.parrafoDeCancion.innerText = cancion.fragmentoDeLetraDe(4).join("\n");
  }

  conElNombreDelArtistaAdivinado(funcion) {
    const formulario = document.createElement("form");
    formulario.onsubmit = (event) => {
      event.preventDefault();
      const datosDelFormulario = Object.fromEntries(new FormData(event.target));
      formulario.remove();
      funcion(datosDelFormulario.nombre);
    };

    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", "nombre");
    etiqueta.style.color = "lightblue";
    etiqueta.innerText = "¿Qué artista la compuso?";

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

  conElNombreDelJugador(funcion) {
    const formulario = document.createElement("form");
    formulario.addEventListener("submit", (event) => {
      event.preventDefault();
      // {nombre: 'nombre del jugador'}
      const datosDelFormulario = Object.fromEntries(new FormData(event.target));
      formulario.remove();
      funcion(datosDelFormulario.nombre);
    });

    const etiqueta = document.createElement("label");
    etiqueta.setAttribute("for", "nombre");
    etiqueta.style.color = "orange";
    etiqueta.innerText = "Bienvenid@, ¿cuál es su nombre?";

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

  ganoLaRonda(ronda) {
    this.parrafoParaNotificarSiAdivinoElArtista.style.color = "green";
    this.parrafoParaNotificarSiAdivinoElArtista.innerText = `Correcto, la canción es ${ronda.cancion.nombre}, compuesta por ${ronda.cancion.nombreDelArtista}. Pasaste la ronda ${ronda.numero}.`;
    swal("¡Felicitaciones!", "Adivinaste el nombre del artista", "success");
  }

  noAdivinoYLeQuedan(cantidadDeIntentosRestantes) {
    this.parrafoParaNotificarSiAdivinoElArtista.style.color = "red";
    this.parrafoParaNotificarSiAdivinoElArtista.innerText = `Fallaste, pero no te rindas. Intentos restantes: ${cantidadDeIntentosRestantes}.`;
    swal("¡Ups!", "Lo siento, no es correcto", "error");
  }

  seResumeElJuego(numeroDeRonda, cantidadDeIntentosRestantes) {
    this.parrafoParaNotificarSiAdivinoElArtista.style.color = "blue";
    this.parrafoParaNotificarSiAdivinoElArtista.innerText = `Bienvenid@ de nuevo, te quedaste en la ronda ${numeroDeRonda}. Intentos restantes: ${cantidadDeIntentosRestantes}.`;
  }

  ganoElJuego(nombreDelJugador) {
    this.seTerminoElJuego(
      `Felicitaciones ${nombreDelJugador}, ganaste el juego! Ganaste cien mil pesos!`,
      "green"
    );
  }

  perdioElJuego(nombreDelJugador) {
    this.seTerminoElJuego(
      `Que lástima, ${nombreDelJugador}, perdiste el juego. Mejor suerte la próxima!`,
      "red"
    );
  }

  seTerminoElJuego(resultado, colorDeTexto) {
    let resultadoDelJuego = document.createElement("h3");
    resultadoDelJuego.innerText = resultado;
    resultadoDelJuego.style.color = colorDeTexto;
    this.encabezadoParaPresentarLaCancion.remove();
    this.parrafoDeCancion.remove();
    this.parrafoParaNotificarSiAdivinoElArtista.remove();
    this.main.appendChild(resultadoDelJuego);
  }
}
