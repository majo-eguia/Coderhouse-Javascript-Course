import {
  idDelArtistaDeNombre,
  informacionDelArtistaConID,
  informacionDeCancionesPopulares,
  letraDeCancionConID,
} from "./rapid-api-spotify.js";
import CancionDeSpotify from "./CancionDeSpotify.js";

const informacionNecesariaDeCancionDesde = (
  informacionDelArtista,
  informacionDeCancion
) => {
  const urlDelArtista = informacionDelArtista.sharingInfo.shareUrl;
  const { name: nombre, id: idDeSpotify } = informacionDeCancion;

  return { nombre, idDeSpotify, urlDelArtista };
};

const proveeCanciones = async (cantidadDeCanciones, nombreDelArtista) => {
  const idDelArtista = await idDelArtistaDeNombre(nombreDelArtista);
  const informacionDelArtista = await informacionDelArtistaConID(idDelArtista);
  const informacionDeCanciones = informacionDeCancionesPopulares(
    informacionDelArtista,
    cantidadDeCanciones
  );
  return await Promise.all(
    informacionDeCanciones.map(async (informacionDeCancion) => {
      const letraCompleta = await letraDeCancionConID(informacionDeCancion.id);
      const informacionNecesaria = informacionNecesariaDeCancionDesde(
        informacionDelArtista,
        informacionDeCancion
      );
      return CancionDeSpotify.desdeJSON({
        ...informacionNecesaria,
        nombreDelArtista,
        letraCompleta,
      });
    })
  );
};

export default proveeCanciones;
