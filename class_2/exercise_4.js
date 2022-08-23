/* Solicitar al usuario un (1) número.
Si el valor está entre dos números, efectuar una de las siguientes salidas, según corresponda: 
“Presupuesto bajo” si está entre 0 y 1000.
“Presupuesto medio” si está entre 1001 y 3000.
“Presupuesto alto” si es  mayor que 3000.
*/

let numeroSolicitado = parseFloat(prompt("Ingrese un numero"));

if (numeroSolicitado >= 0 && numeroSolicitado <= 1000) {
  alert("Presupuesto bajo");
} else if (numeroSolicitado >= 1001 && numeroSolicitado <= 3000) {
  alert("Presupuesto medio");
} else if (numeroSolicitado > 3000) {
  alert("Presupuesto alto");
}
