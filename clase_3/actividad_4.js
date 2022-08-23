/* Solicitar al usuario la carga de nombres de 
forma consecutiva,  hasta que se ingrese “Voldemort”.
Luego realizar un única salida por alerta, con todos los nombres ingresados. */

/* La repetición consecutiva 
“hasta que se ingrese un valor”, implica el uso de un bucle condicional (while o do...while),
 el cual se interrumpe una vez el usuario ingresa dicho valor. */

let nombre = prompt("Ingrese el nombre");
let ingresados = "";
while (nombre != "Voldemort") {
  ingresados += nombre + "\n";
  nombre = prompt("Ingrese nombre");
}
alert(ingresados);

/* puedo ingresar cualquier nombre, hasta que el usuario ingrese Voldemort que es a cuando se
corta el bucle y aparecen enlistados los nombres que puse anteriormente a ese */
