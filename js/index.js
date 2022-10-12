import { canciones } from "./canciones.js";
import Juego from "./juego.js";
import NotificadorPorDOM from "./notificador-por-dom.js";
import SistemaDePersistenciaEnLocalStorage from "./sistema-de-persistencia-en-local-storage.js";

const sistemaDePersistencia = new SistemaDePersistenciaEnLocalStorage();
const notificadorPorDOM = new NotificadorPorDOM();
notificadorPorDOM.conElNombreDelJugador((nombreDelJugador) => {
  const juego = new Juego(
    nombreDelJugador,
    canciones,
    notificadorPorDOM,
    sistemaDePersistencia
  );
  juego.iniciar();
});
