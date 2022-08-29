/*
Codificar una función con la siguiente cabecera: validacion(cadena).
En ella, se retorna un valor booleano, el cual es true 
si el parámetro no es un cadena vacía. Caso contrario, se retorna false. 
Luego invocar la función de forma iterativa, hasta que el usuario tipee “ESC”,
 solicitando en cada ciclo una cadena a validar.

Es común emplear funciones para validar si un valor recibido por parámetro
 cumple con cierto formato. La comparación de cadena vacía es (cadena != ‘’)
*/

function validacion(cadena) {
  return cadena != "";
}

let entrada = prompt("Ingresar cadena");
while (entrada != "ESC") {
  alert(validacion(entrada));
  entrada = prompt("Ingresar cadena");
}

/*
function validacion(cadena) {
    return true 
    if (cadena != "" || return false) 
}



function validacion_v1(cadena) { 
    if (cadena != "") {
        return true
    } else {
        return false 
    }
}


function validacion_v2(cadena) { 
    if (cadena != "") {
        return true
    }
    return false
}

function validacion_v3(cadena) {
    let laCadenaNoEstaVacia = cadena != "";
    if (laCadenaNoEstaVacia) {
        return true;
    }
    return false;
}

validacion_v3("pepe grillo");

/*
¿que valor tiene q tener la condicion de un if para q evalue el bloque de codigo de ese if?

*/
