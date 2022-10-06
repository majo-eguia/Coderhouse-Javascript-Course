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
    this.reiniciarCantidadDeIntentosEnRonda();
  }

  reiniciarCantidadDeIntentosEnRonda() {
    this.cantidadDeIntentosEnRonda = 3;
  }

  presentar(fragmentoDeCancion) {
    this.notificador.presentar(this.nombreDelJugador, fragmentoDeCancion);
  }

  conElNombreDelArtistaAdivinado(funcion) {
    this.notificador.conElNombreDelArtistaAdivinado(funcion);
  }

  ganoLaRonda(ronda) {
    this.notificador.ganoLaRonda(ronda);
    this.numeroDeRonda++;
    this.reiniciarCantidadDeIntentosEnRonda();
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

  guardaElProgreso() {
    this.guardaElProgresoRestando(this.cantidadDeIntentosEnRonda);
  }

  eliminarElProgreso() {
    this.sistemaDePersistencia.eliminaElProgresoDe(this.nombreDelJugador);
  }

  seTermino() {
    this.eliminarElProgreso();
  }

  sePerdio() {
    this.seTermino();
    this.notificador.perdioElJuego(this.nombreDelJugador);
  }

  seGano() {
    this.seTermino();
    this.notificador.ganoElJuego(this.nombreDelJugador);
  }

  jugarRonda() {
    const fragmentoDeCancion =
      this.fragmentoDeCanciones[this.numeroDeRonda - 1];
    const ronda = new Ronda(
      this,
      fragmentoDeCancion,
      this.numeroDeRonda,
      this.cantidadDeIntentosEnRonda
    );
    this.guardaElProgreso();
    ronda.jugar();
  }

  jugar() {
    this.fuePerdido
      ? this.sePerdio()
      : this.quedanRondasPorJugar()
      ? this.jugarRonda()
      : this.seGano();
  }

  resumirDesde({ numeroDeRonda, cantidadDeIntentosRestantes }) {
    this.numeroDeRonda = numeroDeRonda;
    this.cantidadDeIntentosEnRonda = cantidadDeIntentosRestantes;
    this.notificador.seResumeElJuego(
      numeroDeRonda,
      cantidadDeIntentosRestantes
    );
    this.jugar();
  }

  iniciar() {
    this.sistemaDePersistencia.progresoDe(
      this.nombreDelJugador,
      (progreso) => this.resumirDesde(progreso),
      () => this.jugar()
    );
  }
}
