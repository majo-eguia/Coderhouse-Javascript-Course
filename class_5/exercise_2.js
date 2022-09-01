/*
Solicitar al usuario el registro de cinco (5) tiendas.
Emplear la clase Tienda de la actividad 1, para instanciar
 los objetos en función de las entradas capturadas.
  Generar una única salida compuesta por la información de los objetos instanciados.

  Es posible instanciar objetos de forma local en un bloque,
   y los valores pasados por parámetro al constructor pueden ser capturados
    desde una llamada prompt.
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

let ingresados = " ";
for (let i = 0; i < 5; i++) {
  let tienda = new Tienda(
    prompt("nombre"),
    prompt("direccion"),
    prompt("propietario"),
    prompt("rubro")
  );

  ingresados +=
    "Tienda: " +
    tienda.nombre +
    " " +
    "Direccion: " +
    tienda.direccion +
    " " +
    "Propitario: " +
    tienda.propietario +
    " " +
    "rubro: " +
    tienda.rubro +
    "\n";
}
alert(ingresados);
