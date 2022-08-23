/* Solicitar al usuario la carga de diez (10) alumnos de forma consecutiva.
Luego realizar un única salida por alerta, con el listado de alumnos registrados. */

/* La “carga consecutiva” implica utilizar un bucle, para solicitar 
entradas al usuario una detrás de otra.
 Podemos concatenar la entrada obtenida en cada ciclo a otra variable. */

let alumnos = "";
for (let i = 0; i < 10; i++) {
  alumnos += prompt("Ingrese el nombre del alumno") + "\n";
}
alert(alumnos);

/* esto es para que aparezcan enlistados uno abajo del otro: "\n"  */

/* voy a poder poner hasta los 10 nombres hasta que ya no se pueda repetir el ciclo , q en este
caso es hasta 10 */
