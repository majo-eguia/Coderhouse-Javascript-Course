import RAPID_API_KEY from "../config.js";
import {
  respuestaEnJSONDeGET,
  noSeEncontroAlArtistaDeNombre,
  sonStringsEquivalentes,
} from "../funciones-auxiliares.js";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "spotify23.p.rapidapi.com",
  },
};

export const letraDeCancionConID = async (spotify_id) => {
  const respuesta = await respuestaEnJSONDeGET(
    `https://spotify23.p.rapidapi.com/track_lyrics/?id=${spotify_id}`,
    options
  );
  const letraCompleta = respuesta.lyrics.lines.map((linea) => linea.words);
  return letraCompleta.filter(
    (linea) => linea.words != "" && linea.words != "♪"
  );
};

export const idDelArtistaDeNombre = async (nombreDelArtista) => {
  const response = await respuestaEnJSONDeGET(
    `https://spotify23.p.rapidapi.com/search/?q=${nombreDelArtista}&type=artists`,
    options
  );
  const informacionDeArtistas = response.artists.items.map((item) => item.data);
  const informacionDeArtistaOrNull = informacionDeArtistas.find(
    (informacionDeArtista) =>
      sonStringsEquivalentes(
        informacionDeArtista.profile.name,
        nombreDelArtista
      )
  );
  if (informacionDeArtistaOrNull) {
    return informacionDeArtistaOrNull.uri.replace(/spotify:artist:/, "");
  }
  noSeEncontroAlArtistaDeNombre(nombreDelArtista);
};

export const informacionDelArtistaConID = async (idDelArtista) => {
  const response = await respuestaEnJSONDeGET(
    `https://spotify23.p.rapidapi.com/artist_overview/?id=${idDelArtista}`,
    options
  );
  return response.data.artist;
};

export const informacionDeCancionesPopulares = (
  informacionDeArtista,
  cantidadDeCanciones
) => {
  const informacionDeCanciones =
    informacionDeArtista.discography.topTracks.items.map((item) => item.track);
  const informacionDeCancionesSeleccionadas = informacionDeCanciones.slice(
    0,
    cantidadDeCanciones
  );
  return informacionDeCancionesSeleccionadas;
};
