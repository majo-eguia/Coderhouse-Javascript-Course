/* Solicitar al usuario un (1)
 número de forma consecutiva, hasta que se ingrese “ESC”.
  Generar una única salida compuesta por los siguientes productos, 
  según el valor ingresado en cada ciclo:
“Tomate” si es 1.
“Papa” si es 2.
“Carne” si es 3.
“Pollo” si es 4.

*/

/* Es importante distinguir entre el valor de la entrada que asegura la repetición
 (entrada != “ESC”), 
y los posibles valores de la entrada que disparan un procesamiento (1,2,3 y 4). */

let numero = prompt("Seleccionar un producto de 1 a 4");
while (numero != "ESC") {
  switch (numero) {
    case "1":
      alert("Tomate");
      break;
    case "2":
      alert("Papa");
      break;
    case "3":
      alert("Carne");
      break;
    case "4":
      alert("Pollo");
      break;
    default:
      alert("Error");
      break;
  }
  numero = prompt("Seleccionar un producto de 1 a 4");
}
