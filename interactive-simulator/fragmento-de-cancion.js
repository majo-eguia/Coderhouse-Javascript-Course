export default class FragmentoDeCancion {
  constructor(letra, nombreDeLaCancion, nombreDelArtista) {
    this.letra = letra;
    this.nombreDeLaCancion = nombreDeLaCancion;
    this.nombreDelArtista = nombreDelArtista;
  }

  fueCompuestaPorELArtistaDeNombre(nombreDelArtista) {
    return (
      this.nombreDelArtista.toLowerCase() === nombreDelArtista.toLowerCase()
    );
  }
}
