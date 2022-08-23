/* ACT 5 Solicitar al usuario uno o más precios.
Luego, efectuar un descuento en porcentajes 
(20%, 30%, etcétera) sobre los valores ingresados, y realizar una salida. 

Un descuento es la resta de un monto sobre el precio inicial. 
Buscamos calcular el porcentaje sobre dicho precio y restarlo, por ejemplo: si el 
precio es 100, el 20% es 20, entonces el descuento es 100-20 = 80*/

function descuentoAplicado(monto, porcentajeDeDescuento){
    return monto - (monto * (porcentajeDeDescuento / 100));
}

// $100 con un 30% de descuento es $70.
// $100 con un 20% de descuento es $80.

function alertarDescuento(precio, porcentajeDeDescuento){
    let montoFinal = descuentoAplicado(precio, porcentajeDeDescuento);
    alert("$" + precio + " con un " + porcentajeDeDescuento + "% de descuento es $" + montoFinal + ".");
}

let precio = parseFloat(prompt("Ingresa un precio"));


alertarDescuento(precio, 20);
alertarDescuento(precio, 30);
