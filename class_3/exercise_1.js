/* Solicitar al usuario un (1) un número y un (1) texto. 
Efectuar una salida por alerta con el mensaje ingresado por cada repetición, 
hasta alcanzar el valor señalado por el usuario. */

/*Cuando decimos “por cada repetición”, estamos señalando la necesidad de emplear ciclos.
 Si el ciclo está condicionado por un número de repeticiones, se usa for. */

let cantidad = prompt("INGRESAR CANTIDAD DE REPETICIONES");
let texto = prompt("INGRESAR TEXTO A REPETIR");
for (let i = 0; i < cantidad; i++) {
  console.log(texto);
}

/*cantidad : 3
texto: pepe

/* for (let i = 0; i < 3; i++)
(0 es menor que 3, se cumple el ciclo)
console.log(texto) : pepe

se INCREMENTA 1

for (let i = 1; i < 3; i++)
(1 es menor que 3, se sigue cumpliendo el ciclo)
console.log(texto) : pepe

se INCREMENTA 1

for (let i = 2; i < 3; i++)
(2 es menor que 3, se sigue cumpliendo el ciclo)
console.log(texto)  : pepe

se INCREMENTA 1

for (let i = 3; i < 3; i++)
(3 es igual que 3 por ende el ciclo TERMINA, la condicion no se cumple) */
