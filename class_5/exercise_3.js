/*
Declarar un método para la clase Tienda con la siguiente cabecera estaAbierto(hora).
 Este retorna true si la hora enviada está entre las 08 y 12, o entre las 15 y 19.
 Caso contrario, se retorna false.
Luego invocar al menos un (1) objeto usando esta clase, y solicitar al usuario tres (3) horas.
 Informar por alerta si la tienda está abierta, en función de la hora ingresada.

 Considerando que por prompt sólo podemos ingresar cadenas,
  se sugiere asumir que se trabaja sólo con horas en punto, de 0 a 22.
   El if debe verificar dos intervalos válidos.

   */

class Tienda {
  constructor(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
  }
  estaAbierto(hora) {
    if ((hora >= 8 && hora <= 12) || (hora >= 15 && hora <= 19)) {
      return true;
    }
    return false;
  }
}
const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL", "Ropa");
for (let i = 0; i < 3; i++) {
  let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
  if (tienda4.estaAbierto(entrada)) {
    alert("LA TIENDA ESTA ABIERTA A LAS " + entrada);
  } else {
    alert("LA TIENDA ESTA CERRADA A LAS " + entrada);
  }
}
