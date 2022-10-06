import { sonStringsEquivalentes } from "../funciones-auxiliares.js";

export default class CancionDeSpotify {
  static desdeJSON({
    nombre,
    idDeSpotify,
    urlDelArtista,
    nombreDelArtista,
    letraCompleta,
  }) {
    return new this(
      nombre,
      idDeSpotify,
      urlDelArtista,
      nombreDelArtista,
      letraCompleta
    );
  }

  constructor(
    nombre,
    idDeSpotify,
    urlDelArtista,
    nombreDelArtista,
    letraCompleta
  ) {
    this.nombre = nombre;
    this.idDeSpotify = idDeSpotify;
    this.urlDelArtista = urlDelArtista;
    this.nombreDelArtista = nombreDelArtista;
    this.letraCompleta = letraCompleta;
  }

  fragmentoDeLetraDe(cantidadDeLineas) {
    const indiceAleatorio = Math.floor(
      Math.random() * (this.letraCompleta.length - cantidadDeLineas)
    );
    return this.letraCompleta.slice(
      indiceAleatorio,
      indiceAleatorio + cantidadDeLineas
    );
  }

  fueCompuestaPorELArtistaDeNombre(nombreDelArtista) {
    return sonStringsEquivalentes(this.nombreDelArtista, nombreDelArtista);
  }
}
