/*
Codificar dos funciones:
Una función cotizarDolar(pesos), la cual recibe un valor monetario
en pesos argentinos, y lo retorna en su equivalente en dólares.
Una función cotizarPesos(dolar), que recibe un valor monetario en dólares,
y lo retorna en su equivalente en pesos argentinos.
Luego invocar las funciones solicitando  al usuario el valor y el tipo de 
cotización a realizar.

Es posible cambiar la moneda a cotizar.
 Lo importante es codificar dos funciones que hagan operaciones contrarias (inversas). 
*/

let valorDolar = 300;
let cotizarDolar = (pesos) => pesos / valorDolar;
let cotizarPesos = (dolar) => dolar * valorDolar;
let seleccion = prompt(
  "selecione una cotizacion \n 1 - DOLARES A PESOS \n 2 -  PESOS A DOLAR "
);
let valor = prompt("Ingrese un valor");
switch (seleccion) {
  case "1":
    alert(cotizarPesos(valor));
    break;
  case "2":
    alert(cotizarDolar(valor));
    break;
  default:
    break;
}

/* aca se uso una funcion flecha: son funciones anonimas de sintaxis simplificada, no
usan la palabra FUNCION se usa => entre los parametros y el bloque */
