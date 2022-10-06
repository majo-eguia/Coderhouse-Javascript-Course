export default class Ronda {
  constructor(juego, cancion, numero, cantidadDeIntentos) {
    this.juego = juego;
    this.cancion = cancion;
    this.numero = numero;
    this.cantidadDeIntentosRestantes = cantidadDeIntentos;
    this.fueGanada = false;
  }

  leQuedanIntentos() {
    return this.cantidadDeIntentosRestantes > 0;
  }

  fueLaCancionCompuestaPorElArtistaDeNombre(nombreDelArtistaAdivinado) {
    return this.cancion.fueCompuestaPorELArtistaDeNombre(
      nombreDelArtistaAdivinado
    );
  }

  perdioUnIntento() {
    this.cantidadDeIntentosRestantes--;
  }

  jugarAdivinando(nombreDelArtista) {
    if (this.fueLaCancionCompuestaPorElArtistaDeNombre(nombreDelArtista)) {
      this.fueGanada = true;
      this.juego.ganoLaRonda(this);
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
      this.juego.presentar(this.cancion);
      this.juego.conElNombreDelArtistaAdivinado((nombreDelArtista) =>
        this.jugarAdivinando(nombreDelArtista)
      );
    }
  }
}
