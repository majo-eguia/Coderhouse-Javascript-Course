let dinero = parseFloat(prompt("Ingrese la cantidad de dinero disponible"));

if (dinero <= 1500 && dinero >= 501) {
  alert("Te podes comprar un desayuno en Starbucks");
} else if (dinero >= 1501 && dinero <= 6000) {
  alert("Podes ir a comer a un restaurante");
} else if (dinero <= 500) {
  alert("Mejor anda a comer a tu casa");
}

let palabra = prompt("Ingrese una palabra");

if (palabra != "Hola") {
  alert("La palabra no es correcta");
} else if (palabra === "Hola") {
  alert("La palabra es correcta");
}
