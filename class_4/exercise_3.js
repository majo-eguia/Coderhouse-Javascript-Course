/*
Codificar una función con la siguiente cabecera:
 impuesto(precio, porcentaje). En ella, se 
 retorna un valor numérico compuesto por el precio recibido, 
 más la suma del porcentaje ingresado.
Luego invocar la función de forma iterativa cinco (5) veces, solicitando 
en cada ciclo un precio y porcentaje al usuario.

Un impuesto es la suma de un monto al precio inicial.
Buscamos calcular en la función el porcentaje sobre dicho precio, y sumarlo;
por ejemplo: si el precio es 100, el 20% es 20, entonces el precio final es 100+20 = 120.
*/

// function impuesto(precio, porcentaje) {
//   return precio + (precio * porcentaje) / 100;
// }

// for (let i = 0; i < 5; i++) {
//   let precio = parseFloat(prompt("Ingrese un precio"));
//   let porcentaje = parseFloat(prompt("Ingrese un %"));
//   alert(impuesto(precio, porcentaje));
// }

function impuesto(precio, porcentaje) {
  return precio + (precio * porcentaje) / 100;
}

for (let i = 0; i < 5; i++) {
  let precio = parseFloat(prompt("Ingrese un precio"));
  let porcentaje = parseFloat(prompt("Ingrese un porcentaje"));
  let impuestoAplicado = impuesto(precio, porcentaje);
  console.log(
    precio + " con " + porcentaje + " de impuesto es " + impuestoAplicado
  );
}
