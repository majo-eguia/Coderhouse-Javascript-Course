/*
Codificar una función que reciba un número decimal por parámetro,
 y lo retorne redondeado al entero más cercano. Para ello, puede emplearse  Math.round.
Luego invocar la función de forma iterativa cinco (5) veces,
 solicitando en cada ciclo un número al usuario. 

La “llamada iterativa de la función” implica emplear un bucle.
Como se solicita una cantidad determinada, se recomienda emplear for.
 */

function redondear(valor) {
  return Math.round(valor);
}

for (let i = 0; i < 5; i++) {
  let entrada = parseFloat(prompt("Ingresa un numero"));
  alert(redondear(entrada));
}
