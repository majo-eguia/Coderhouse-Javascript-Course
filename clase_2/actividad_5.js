/* Solicitar al usuario cuatro (4) productos de almacén. 
Si todos los elementos fueron cargados, 
realizar una única salida compuesta por el listado de productos. 
Caso contrario, la salida será
 “Error: Es necesario cargar todos los productos”. */

/* Para asegurarnos de que una variable string no esté vacía, podemos comparar (variable != "").
  Luego, agrupar estas validaciones en un if, con el operador booleano  && (and) */

let producto1 = prompt("Ingrese el primer producto del almacen");
let producto2 = prompt("Ingrese el segundo producto del almacen");
let producto3 = prompt("Ingrese el tercer producto del almacen");
let producto4 = prompt("Ingrese el cuarto producto del almacen");

if (producto1 == "" || producto2 == "" || producto3 == "" || producto4 == "") {
  alert("Error: Es necesario cargar todos los productos.");
} else {
  alert(
    " Tus productos elegidos son: " +
      producto1 +
      ", " +
      producto2 +
      ", " +
      producto3 +
      " y " +
      producto4 +
      "."
  );
}
