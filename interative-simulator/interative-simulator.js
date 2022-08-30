function pedidoDeNombre() {
  alert("Hola bienvenido a Queen Librerias");
  let nombreIngresado = prompt("Ingrese su nombre");
  while (nombreIngresado === "") {
    nombreIngresado = prompt("Ingrese su nombre");
  }
}

function edad() {
  var edadIngresada;
  do {
    edadIngresada = prompt(
      "Elija el numero correspondiente a su edad : \n1. - de 18 \n2. 18 a 30 \n3. 30 a 50 \n4. 50 a 70 \n5. + de 70 "
    );
  } while (
    edadIngresada != 1 &&
    edadIngresada != 2 &&
    edadIngresada != 3 &&
    edadIngresada != 4 &&
    edadIngresada != 5
  );
  switch (edadIngresada) {
    case "1":
      return "Lo siento, debes ser mayor de edad para comprar aquí";
    case "2":
      return "Elegiste la opcion de 18 a 30";
    case "3":
      return "Elegiste la opcion de 30 a 50";
    case "4":
      return "Elegiste la opcion de 50 a 70";
    case "5":
      return "Elegiste la opcion + de 70";
  }
}

function libros(edadElegida) {
  if (edadElegida == 1) {
    alert("Lo siento, debes ser mayor de edad para comprar aquí");
  } else if (edadElegida == 2) {
    alert(
      "Le recomendamos los siguientes libros: \n1. Harry Potter \n2. El hombre en busqueda del sentido \n3. El poder del ahora"
    );
  } else if (edadElegida == 3) {
    alert(
      "Le recomendamos los siguientes libros: \n1. Ser feliz es una decision  \n2. El hombre que se invento a si mismo \n3. Cien años de soledad"
    );
  } else if (edadElegida == 4) {
    alert(
      "Le recomendamos los siguientes libros:\n1. La vejez  \n2. Yo de mayor quiero ser joven \n3. Azabache"
    );
  } else if (edadElegida == 5) {
    alert(
      "\n1. 100 preguntas para superar el duelo  \n2. Hasta que te vuelva a ver  \n3. Platero y yo"
    );
  }
}

pedidoDeNombre();
let edadElegida = edad();
let librosRecomendados = libros(edadElegida);
//console.log(edadElegida);
console.log(libros(edadElegida));
