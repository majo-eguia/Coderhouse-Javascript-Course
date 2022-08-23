/* Solicitar al usuario un (1) un número.
Si el valor está entre 1 y 4, efectuar una de las siguientes salidas según corresponda: 
“Elegiste a Homero” si es 1.
“Elegiste a Marge” si es 2.
“Elegiste a Bart” si es 3.
“Elegiste a Lisa” si es 4.
*/

let numeroElegido = parseInt(prompt("Ingrese un numero"));

if (numeroElegido === 1) {
  alert("Elegiste a Homero");
} else if (numeroElegido === 2) {
  alert("Elegiste a Marge");
} else if (numeroElegido === 3) {
  alert("Elegiste a Bart");
} else if (numeroElegido === 4) {
  alert("Elegiste a Lisa");
}
