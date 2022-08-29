// objetos literales
const personaje = {
  nombre: "Pepe", // esto es una PROPIEDAD
  apellido: "Grillo",
  edad: 42,
  peliculas: {
    pelicula1: "Dumbo",
    pelicula2: "Terminator",
    pelicula3: "Avengers",
  },
};

console.log(personaje.nombre);

// si pongo ej console.log(perosnaje.ocupacion); : me va a dar undefined

console.table(personaje); // nos crea una tabla

/* undefined es que no esta definido, no sabes q es 
 null es que no hay, no existe, se q es pero se q no hay, es nula la existencia
 0 : es q no hay mas 
 non-zero value es que hay algo 
*/

// otra manera de acceder a los objetos :

console.log(personaje["pelicula"]);

console.table(personaje);

console.log(personaje.peliculas.pelicula1);

// puedo tener mas objetos adentro de otro objeto

// puedo asignarle un nuevo valor de la ste manera:

personaje.nombre = "Juan";
console.log(personaje.nombre);

// puedo agregarle otra propiedad al objeto

personaje.ocupacion = "Actor";

console.log(personaje);

// objetos constructores
function Personaje(nombre, apellido, edad, pelicula) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.pelicula = pelicula;

  this.saludar = function () {
    console.log("Hola mi nombre es " + this.nombre);
  };
}

const personaje3 = new Personaje("Tony", "Stark", "42", "Avengers");
const personaje4 = new Personaje("Bruce", "Banner", "38", "Avengers");

personaje3.saludar(); // aca estoy ejecutando el metodo
personaje4.saludar();

/* el this sirve si uso el new, el this hace referencia a un elemento q vive o funciona 
dentro del scope donde fue declarada */

// metodos y operaciones con objetos

/*

los metodos de los objetos tbm son tecnicamente funciones,
 solo q se limitan a poder ser ejecutados solo desde el mismo objeto
los metodos son una cajita violeta


Cuando tengo una funcion declarada dentro de un objeto se llama: METODO


Cuando tengo una variable declarada dentro de un objeto se llama : PROPIEDAD 
 */

// operador IN y FOR... IN

/*

el operador IN devuelve TRUE si la propiedad especificada existe en el objeto.
mientas q el bucle FOR... IN permite acceder a todas las propiedades del objeto,
obteniendo una propiedad por cada iteracion */

/*console.log("nombre" in personaje3);
/*me devuelve true porque existe la propiedad nombre en
personaje3
esto seria para verificar si ese objeto contiene esa propiedad  */

for (prop in personaje3) {
  console.log(prop); // por cada ... en el objeto entonces hace tal cosa
}

/* esto devuelve:
nombre
apellido
edad
pelicula
saludar

me devuelve las propiedades q estan asociadas a ese objeto
*/

for (propiedad in personaje3) {
  console.log(personaje3[propiedad]);
}

/* aca le estoy diciendo: por cada valor que hay en el objeto quiero q me imprimas ese
valor de ese objeto
el for itera sobre cada propiedad q tenga

esto me devuelve:

Tony
 Stark
42
Avengers
 ƒ () {
    console.log("Hola mi nombre es " + this.nombre);
  }


*/

const numbers = {
  numberOne: 20,
  numberTwo: 3,
  numberThree: 17,
  numberFour: 80,
};

for (number in numbers) {
  if (numbers[number] > 10) {
    console.log("Este numero es mayor que 10. ", numbers[number]);
  }
}

// clases

class Personaje {
  constructor(nombre, apellido, edad, pelicula) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.pelicula = pelicula;
  }

  saludar() {
    console.log("Hola soy: " + this.nombre);
  }
}

const personaje5 = new Personaje("Peter", "Parker", 19, "Spiderman");

personaje5.saludar();

// esto devuelve : Hola soy: Peter
