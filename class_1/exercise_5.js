/* ACT 5 Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes 
(20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida. 

Un descuento es la resta de un monto sobre el precio inicial. 
Buscamos calcular el porcentaje sobre dicho precio y restarlo, por ejemplo: si el 
precio es 100, el 20% es 20, entonces el descuento es 100-20 = 80*/

let precio = parseFloat(prompt("Ingresa un precio"));

// $100 con un 20% de descuento es $80.
// $100 con un 30% de descuento es $70.

alert("$" + precio + " con un 20% de descuento es $" + (precio - (precio * 0.2)) + ".");
alert("$" + precio + " con un 30% de descuento es $" + (precio - (precio * 0.3)) + ".");


/* otra forma de hacerlo */

let precio1 = parseFloat(prompt('INGRESAR PRECIO'));
let descuento20 = precio1 - (precio1  * 0.2);
let descuento30 = precio1 - (precio1  * 0.3);
console.log(descuento20);
console.log(descuento30);