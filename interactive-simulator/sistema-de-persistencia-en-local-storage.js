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

  eliminaElProgresoDe(nombreDelJugador) {
    localStorage.removeItem(nombreDelJugador);
  }

  progresoDe(nombreDelJugador, funcionSiHayProgreso, funcionSiNoHay) {
    const progresoONull = JSON.parse(localStorage.getItem(nombreDelJugador));
    progresoONull ? funcionSiHayProgreso(progresoONull) : funcionSiNoHay();
  }
}
