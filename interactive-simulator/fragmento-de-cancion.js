export default class FragmentoDeCancion {
  constructor(letra, nombre, nombreDelArtista) {
    this.letra = letra;
    this.nombre = nombre;
    this.nombreDelArtista = nombreDelArtista;
  }

  fueCompuestaPorELArtistaDeNombre(nombreDelArtista) {
    return (
      this.nombreDelArtista.toLowerCase() === nombreDelArtista.toLowerCase()
    );
  }
}
