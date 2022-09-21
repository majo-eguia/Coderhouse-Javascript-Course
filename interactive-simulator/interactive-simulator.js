/*
Desarrollar un juego de rondas que le permita al participante adivinar la banda que
compuso una canción a través de un fragmento de la misma.
Así sucesivamente con varias canciones, las cuales puede ser de diferentes bandas.

Por cada ronda, el participante tendrá hasta 3 intentos para adivinar la canción.
El juego termina cuando:
- Logra adivina la banda en todas las rondas, y por lo tanto, gana
- Agota los 3 intentos en una ronda, y por lo tanto, pierde


En la siguiente iteración del juego:

Cada vez que acierte, el participante sumará una cierta suma de dinero, la cual, una vez finalizado el juego, podrá
canjear por distintos premios de diferente valor, o elegir quedarse con el dinero.
*/

import FragmentoDeCancion from "./fragmento-de-cancion.js";
import NotificadorPorDOM from "./notificador-por-dom.js";
import Ronda from "./ronda.js";

class Juego {
  constructor(fragmentoDeCanciones, notificador) {
    this.fragmentoDeCanciones = fragmentoDeCanciones;
    this.notificador = notificador;
    this.numeroDeRonda = 1;
    this.fuePerdido = false;
  }

  presentar(fragmentoDeCancion) {
    this.notificador.presentar(fragmentoDeCancion);
  }

  conElNombreDeLaBandaAdivinada(funcion) {
    this.notificador.conElNombreDeLaBandaAdivinada(funcion);
  }

  pasoLaRonda(ronda) {
    this.notificador.pasoLaRonda(ronda);
    this.numeroDeRonda++;
    this.jugar();
  }

  perdioLaRonda() {
    this.fuePerdido = true;
    this.jugar();
  }

  noAdivinoYLeQuedan(cantidadDeIntentosRestantes) {
    this.notificador.noAdivinoYLeQuedan(cantidadDeIntentosRestantes);
  }

  quedanRondasPorJugar() {
    return this.numeroDeRonda <= this.fragmentoDeCanciones.length;
  }

  jugar() {
    if (this.fuePerdido) {
      this.notificador.sePerdioElJuego();
    } else {
      if (this.quedanRondasPorJugar()) {
        const fragmentoDeCancion =
          this.fragmentoDeCanciones[this.numeroDeRonda - 1];
        const ronda = new Ronda(this, fragmentoDeCancion, this.numeroDeRonda);
        ronda.jugar();
      } else {
        this.notificador.seGanoElJuego();
      }
    }
  }
}

// instanciación de fragmentos de canciones

const fragmentoDeCancion1 = new FragmentoDeCancion(
  "Inside my heart is breaking\nMy makeup may be flaking\nBut my smile, still, stays on",
  "The show must go on",
  "Queen"
);

const fragmentoDeCancion2 = new FragmentoDeCancion(
  "Listen all you people, come gather round\nI gotta get me a game plan, gotta shake you to the ground\nBut just give me, huh, what I know is mine\nPeople do you hear me, just gimme the sign",
  "I want it all",
  "Queen"
);

const fragmentoDeCancion3 = new FragmentoDeCancion(
  "Solo como un pájaro que vuela en la noche\nLibre de vos, pero no de mí\nVacío como el sueño de una gorra lleno de nada\nSin saber donde ir",
  "Una nueva noche fria",
  "Callejeros"
);

const fragmentoDeCancion4 = new FragmentoDeCancion(
  "Creo en tu sonrisa\nCreo en mí si te veo hoy\nY me pedis que no me rinda\nSigo por vos",
  "Creo",
  "Callejeros"
);

const fragmentoDeCancion5 = new FragmentoDeCancion(
  "La vida lo educó a los bastonazos\ny a veces la muerte también,\ntuvo como profesor a un diablo bien pirata que\nle enseñó que la vida no siempre es ganar.",
  "Enano",
  "Las pastillas del abuelo"
);

const fragmentoDeCancion6 = new FragmentoDeCancion(
  "Y si vos me preguntas hoy qué carajo es el amor\nYo te contesto: miralos a ellos dos\nY si vos me preguntas hoy qué carajo es el amor\nYo te contesto: miralos a ellos dos",
  "¿Qué carajo es el amor?",
  "Las pastillas del abuelo"
);

const fragmentoDeCancion7 = new FragmentoDeCancion(
  "And in my hour of darkness\nShe is standing right in front of me\nSpeaking words of wisdom\nLet it be",
  "Let it Be",
  "The Beatles"
);

const fragmentoDeCancion8 = new FragmentoDeCancion(
  "Help me if you can, I'm feeling down\nAnd I do appreciate you being 'round\nHelp me get my feet back on the ground\nWon't you please, please help me",
  "Help",
  "The Beatles"
);

const fragmentoDeCanciones = [
  fragmentoDeCancion1,
  fragmentoDeCancion2,
  fragmentoDeCancion3,
  fragmentoDeCancion4,
  fragmentoDeCancion5,
  fragmentoDeCancion6,
  fragmentoDeCancion7,
  fragmentoDeCancion8,
];

// Inicia el juego

const notificadorPorDOM = new NotificadorPorDOM();
const juego = new Juego(fragmentoDeCanciones, notificadorPorDOM);
juego.jugar();
