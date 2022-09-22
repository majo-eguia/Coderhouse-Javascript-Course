import Ronda from "./ronda.js";

export default class Juego {
  constructor(nombreDelJugador, fragmentoDeCanciones, notificador) {
    this.nombreDelJugador = nombreDelJugador;
    this.fragmentoDeCanciones = fragmentoDeCanciones;
    this.notificador = notificador;
    this.numeroDeRonda = 1;
    this.fuePerdido = false;
  }

  presentar(fragmentoDeCancion) {
    this.notificador.presentar(this.nombreDelJugador, fragmentoDeCancion);
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
      this.notificador.perdioElJuego(this.nombreDelJugador);
    } else {
      if (this.quedanRondasPorJugar()) {
        const fragmentoDeCancion =
          this.fragmentoDeCanciones[this.numeroDeRonda - 1];
        const ronda = new Ronda(this, fragmentoDeCancion, this.numeroDeRonda);
        ronda.jugar();
      } else {
        this.notificador.ganoElJuego(this.nombreDelJugador);
      }
    }
  }
}
