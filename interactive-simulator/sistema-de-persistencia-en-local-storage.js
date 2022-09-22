export default class SistemaDePersistenciaEnLocalStorage {
  guardaElProgreso(
    nombreDelJugador,
    numeroDeRonda,
    cantidadDeIntentosRestantes
  ) {
    const progresoDelJugador = {
      numeroDeRonda: numeroDeRonda,
      cantidadDeIntentosRestantes: cantidadDeIntentosRestantes,
    };
    localStorage.setItem(nombreDelJugador, JSON.stringify(progresoDelJugador));
  }
}
