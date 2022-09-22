import Ronda from "./ronda.js";

export default class Juego {
  constructor(
    nombreDelJugador,
    fragmentoDeCanciones,
    notificador,
    sistemaDePersistencia
  ) {
    this.nombreDelJugador = nombreDelJugador;
    this.fragmentoDeCanciones = fragmentoDeCanciones;
    this.notificador = notificador;
    this.sistemaDePersistencia = sistemaDePersistencia;
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
    this.guardaElProgresoRestando(cantidadDeIntentosRestantes);
    this.notificador.noAdivinoYLeQuedan(cantidadDeIntentosRestantes);
  }

  quedanRondasPorJugar() {
    return this.numeroDeRonda <= this.fragmentoDeCanciones.length;
  }

  guardaElProgresoRestando(cantidadDeIntentosRestantes) {
    this.sistemaDePersistencia.guardaElProgreso(
      this.nombreDelJugador,
      this.numeroDeRonda,
      cantidadDeIntentosRestantes
    );
  }

  jugar() {
    if (this.fuePerdido) {
      // eliminar el progreso
      this.notificador.perdioElJuego(this.nombreDelJugador);
    } else {
      if (this.quedanRondasPorJugar()) {
        const fragmentoDeCancion =
          this.fragmentoDeCanciones[this.numeroDeRonda - 1];
        const ronda = new Ronda(this, fragmentoDeCancion, this.numeroDeRonda);
        this.guardaElProgresoRestando(ronda.cantidadDeIntentosRestantes);
        ronda.jugar();
      } else {
        //eliminar el progreso
        this.notificador.ganoElJuego(this.nombreDelJugador);
      }
    }
  }
}
