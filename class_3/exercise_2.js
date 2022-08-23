/* Solicitar al usuario un (1) un número.
 Emplear este valor para determinar la cantidad de repeticiones, y
  efectuar una salida por alerta con el mensaje “lado” en cada repetición.
 Pero si se alcanza un número de iteraciones mayor que cuatro (4), cancelar el ciclo. */

/* Es importante distinguir entre el número máximo de repeticiones de un for.
 y un condicional cuyo cumplimiento puede provocar la interrupción del bucle (con break). */

let cantidadDeLados = parseInt(prompt("Ingrese una cantidad de lados"));

for (let i = 0; i < cantidadDeLados; i++) {
  if (i > 3) {
    break;
  }
  alert("lado");
}

/* el usuario va a poner cualquier numero,
 pero solo se van hacer maximo hasta 4 iteraciones (lado,lado,lado,lado)
 */
