import CancionDeSpotify from "./spotify/CancionDeSpotify.js";
import proveeCanciones from "./spotify/proveedor-de-canciones-de-spotify.js";

const obtenerCancionesDeAPI = async () => {
  const cancionesDeAPI = [
    ...(await proveeCanciones(2, "Queen")),
    ...(await proveeCanciones(2, "Callejeros")),
    ...(await proveeCanciones(2, "Las Pastillas del Abuelo")),
    ...(await proveeCanciones(2, "The Beatles")),
  ];
  localStorage.setItem("canciones", JSON.stringify(cancionesDeAPI));
  return cancionesDeAPI;
};

const obtenerCancionesDesdeJSON = (cancionesEnJSON) => {
  return cancionesEnJSON.map((cancionEnJSON) =>
    CancionDeSpotify.desdeJSON(cancionEnJSON)
  );
};

const cancionesONull = JSON.parse(localStorage.getItem("canciones"));
export const canciones = cancionesONull
  ? obtenerCancionesDesdeJSON(cancionesONull)
  : await obtenerCancionesDeAPI();
