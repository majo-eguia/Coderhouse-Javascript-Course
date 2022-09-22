export default class Ronda {
  constructor(juego, fragmentoDeCancion, numero) {
    this.juego = juego;
    this.fragmentoDeCancion = fragmentoDeCancion;
    this.numero = numero;
    this.cantidadDeIntentosRestantes = 3;
    this.fueGanada = false;
  }

  leQuedanIntentos() {
    return this.cantidadDeIntentosRestantes > 0;
  }

  fueLaCancionCompuestaPorLaBandaLlamada(nombreDeLaBandaAdivinada) {
    return this.fragmentoDeCancion.fueCompuestaPorLaBandaLlamada(
      nombreDeLaBandaAdivinada
    );
  }

  perdioUnIntento() {
    this.cantidadDeIntentosRestantes--;
  }

  jugarAdivinando(nombreDeLaBanda) {
    if (this.fueLaCancionCompuestaPorLaBandaLlamada(nombreDeLaBanda)) {
      this.fueGanada = true;
      this.juego.pasoLaRonda(this);
    } else {
      this.perdioUnIntento();
      if (this.leQuedanIntentos()) {
        this.juego.noAdivinoYLeQuedan(this.cantidadDeIntentosRestantes);
        this.jugar();
      } else {
        this.juego.perdioLaRonda();
      }
    }
  }

  jugar() {
    if (this.leQuedanIntentos() && !this.fueGanada) {
      this.juego.presentar(this.fragmentoDeCancion);
      this.juego.conElNombreDeLaBandaAdivinada((nombreDeLaBanda) =>
        this.jugarAdivinando(nombreDeLaBanda)
      );
    }
  }
}
