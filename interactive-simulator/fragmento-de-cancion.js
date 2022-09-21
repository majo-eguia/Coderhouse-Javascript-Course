export default class FragmentoDeCancion {
  constructor(letra, nombreDeLaCancion, nombreDeLaBanda) {
    this.letra = letra;
    this.nombreDeLaCancion = nombreDeLaCancion;
    this.nombreDeLaBanda = nombreDeLaBanda;
  }

  fueCompuestaPorLaBandaLlamada(nombreDeLaBanda) {
    return this.nombreDeLaBanda.toLowerCase() === nombreDeLaBanda.toLowerCase();
  }
}
