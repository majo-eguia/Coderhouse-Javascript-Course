export const sonStringsEquivalentes = (string, otroString) => {
  return string.trim().toLowerCase() === otroString.trim().toLowerCase();
};

export const noSeEncontroAlArtistaDeNombre = (nombreDelArtista) => {
  Swal.fire({
    title: "Oops!",
    text: `No se encontró información sobre ${nombreDelArtista}.`,
    icon: "error",
  });
};

export const falloElPedido = (error) => {
  Swal.fire({
    title: "¡La solicitud falló!",
    text: `Información técnica: ${error}`,
    icon: "error",
  });
};

export const respuestaEnJSONDeGET = async (url, options) => {
  const respuesta = await fetch(url, options).catch(falloElPedido);
  return await respuesta.json();
};
