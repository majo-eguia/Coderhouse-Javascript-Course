/*
Desarrollar un juego de rondas que le permita al participante adivinar la banda que
compuso una canción a través de un fragmento de la misma.
Así sucesivamente con varias canciones, las cuales puede ser de diferentes bandas.

Por cada ronda, el participante tendrá hasta 3 intentos para adivinar la canción.
El juego termina cuando:
- Logra adivina la banda en todas las rondas, y por lo tanto, gana
- Agota los 3 intentos en una ronda, y por lo tanto, pierde


En la siguiente iteración del juego:

Cada vez que acierte, el participante sumará una cierta suma de dinero, la cual, una vez finalizado el juego, podrá
canjear por distintos premios de diferente valor, o elegir quedarse con el dinero.
*/

import { canciones } from "./canciones.js";
import Juego from "./juego.js";
import NotificadorPorDOM from "./notificador-por-dom.js";
import SistemaDePersistenciaEnLocalStorage from "./sistema-de-persistencia-en-local-storage.js";

// Inicia el juego

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
