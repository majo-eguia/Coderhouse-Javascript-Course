/*
Declarar un clase Tienda que permita registrar:
Nombre de la tienda.
Dirección de la tienda.
Propietario de la tienda.
Rubro de la tienda.
Luego invocar al menos tres (3) objetos usando esta clase.

Notas actividad 1
Por cada dato a registrar en un objeto, corresponde una propiedad.
 Recordemos que la invocación del objeto es instanciarlo usando new y el constructor.

*/

class Tienda {
  constructor(nombre, direccion, propietario, rubro) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubro;
  }
}

const tienda1 = new Tienda(
  "Panchitos",
  "Av rivadavia 123",
  "Omar Perez",
  "comestibles"
);

console.log(tienda1);

const tienda2 = new Tienda(
  "coto",
  "Av lima 234",
  "mister coto",
  "supermercado"
);

console.log(tienda2);

const tienda3 = new Tienda(
  "adidas",
  "Av roca 956",
  "messi",
  "zapatillas deportivas"
);

console.log(tienda3);
