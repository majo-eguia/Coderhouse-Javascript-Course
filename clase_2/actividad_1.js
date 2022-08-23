/*Solicitar al usuario un (1) nombre.
Si el mismo es igual a otro nombre almacenado en una variable,
 realizar una salida por alerta con el mensaje “Fui yo”. 
Caso contrario, la salida será “Yo no fui”. */

let nombreIngresado = prompt("Ingrese un nombre");
let nombreEsperado = "Majo";

if (nombreIngresado === nombreEsperado) {
  alert("Fui yo");
} else {
  alert("Yo no fui");
}

nombreIngresado === nombreEsperado ? alert("Fui yo") : alert("Yo no fui");

/*
if ( condicion ) {
    sentencias-del-if
} else {
    sentencias-del-else
}

Si y solo si hay una única sentencia para el if y una única sentencia para el else, 
puedo usar operador ternario.

condicion ? sentencia-del-if : sentencia-del-else
*/
