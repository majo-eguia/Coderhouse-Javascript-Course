/*
Desarrollar un juego que le permita al participante adivinar la banda que
compuso una canción.
El participante tendrá hasta tres oportunidades.
*/

let cantidadDeIntentosRestantes = 3;
let ganoElJuego = false;
let leQuedanIntentos = () => cantidadDeIntentosRestantes > 0;

let presentarLaCancion = () => {
  alert("Esta es tu canción a adivinar...");
  alert(
    "Inside my heart is breaking\nMy makeup may be flaking\nBut my smile, still, stays on"
  );
};

let adivinoLaBanda = (nombreDeLaBandaAdivinada) =>
  nombreDeLaBandaAdivinada === "queen";

// Inicia el juego

alert(
  "Esto es 'Conozco esa voz', el juego donde si adivinas la banda que compuso la canción, ganarás un millón de dólares. ¿Empezamos?"
);

while (leQuedanIntentos() && !ganoElJuego) {
  presentarLaCancion();
  let nombreDeLaBandaAdivinada = prompt("¿Qué banda la compuso?").toLowerCase();
  if (adivinoLaBanda(nombreDeLaBandaAdivinada)) {
    ganoElJuego = true;
  } else {
    cantidadDeIntentosRestantes--;
    if (leQuedanIntentos()) {
      alert(
        "Fallaste, pero no te rindas. Intentos restantes: " +
          cantidadDeIntentosRestantes
      );
    }
  }
}

if (ganoElJuego) {
  alert("Felicitaciones, adivinaste. Ganaste un millón de dólares!");
} else {
  alert("Ya no tienes más intentos. Mejor suerte la próxima!");
}
