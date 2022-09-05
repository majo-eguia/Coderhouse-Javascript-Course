/*
Desarrollar un juego de rondas que le permita al participante adivinar la banda que
compuso una canción, esto dandole al participante un parrafo de la cancion
que debe adivinar. Asi sucesivamente con varias canciones y bandas. Por cada ronda
el participante tendrá hasta 3 vidas y cada vez que lo intente y sea erroneo
perdera una vida. Cuando llegue a cero vidas  o cuando haya adivinado todas
las rondas se acaba el juego.
Cada vez que acierte sumara una cierta suma de dinero, la cual al finalizado el juego podra
canjear por distintos premios de diferente valor, o elegir quedarse con el dinero.

*/

class Cancion {
  constructor(nombre, autor, año) {
    this.nombre = nombre;
    this.autor = autor;
    this.genero = genero;
    this.año = año;
  }
}

const cancion1 = new Cancion("The show must go on", "Queen", "Rock", 1991);
const cancion2 = new Cancion("I want it all", "Queen", "Rock", 1989);
const cancion3 = new Cancion(
  "Una nueva noche fria",
  "Callejeros",
  "Rock Nacional",
  2003
);
const cancion4 = new Cancion("Creo", "Callejeros", "Rock Nacional", 2006);
const cancion5 = new Cancion(
  "Enano",
  "Las pastillas del abuelo",
  "Rock Nacional",
  2006
);

const cancion6 = new Cancion(
  "¿Qué carajo es el amor?",
  "Las pastillas del abuelo",
  "Rock Nacional",
  2008
);

const cancion7 = new Cancion("Let it Be", "The Beatles", "Rock", 1970);
const cancion8 = new Cancion("Help", "The Beatles", "Rock", 1965);

const bandas = [
  "Queen",
  "Callejeros",
  "Las pastillas del abuelo",
  "The Beatles",
];
const adivinando = bandas.find(
  (e) => e === prompt("¿Qué banda la compuso?").toLowerCase()
);

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
  alert("Felicitaciones, adivinaste la primer banda! Ganaste cien mil pesos!");
} else {
  alert("Ya no tienes más intentos. Mejor suerte la próxima!");
}
