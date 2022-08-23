/* Solicitar al usuario una (1) tecla.
Si se presiona “y” (minúscula), o “Y” (mayúscula), realizar una salida por 
alerta con el mensaje “Correcto”. 
Caso contrario, la salida será “Error”.*/

let teclaSolicitada = prompt("Ingrese una tecla");

if (teclaSolicitada === "y" || teclaSolicitada === "Y") {
  alert("Correcto");
} else {
  alert("Error");
}
