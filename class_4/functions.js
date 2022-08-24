const participantes = Number(prompt("¿Cuanas personas asistieron al evento"));
const participantas = Number(prompt("¿Cuanas personas asistieron al evento"));

function saludar () {
    const nombre = prompt("Ingresa tu nombre");
    console.log("Hola " + nombre);
}

function saludarATodos (cantidad) {
for(let i = 0; i < cantidad; i++) {
  saludar ();  
 }
 console.log("Termine de saludar a todos")
}

function saludarATodas() {
    for(let i = 0; i < participantas; i++) {
        saludar ();  
       }
       console.log("Termine de saludar a todas")
      }


saludarATodos(participantes);
saludarATodas(participantes); 

 function suma (numA, numB) {
  console.log  (numA + numB);
}

suma(50, 5);
suma(10, 3);
suma(20, 8);
suma(13, 9);   





function calculadora (numA, numB, operacion) {
    switch (operacion) {
        case "+":
             return numA + numB;
        break;
        case "-":
            return numA - numB;

        break;
        case "*": 
        return numA * numB;
        break;

        case "/":
            return numA / numB;
            break;
            default:
                0;
                break;
    }
}

console.log(calculadora(3,8,"*"));



/* funciones anonimas */

function saludar () {
    console.log("saludar");
}

let saludar = function () {  // esta es la funcion anonima //
    console.log("saludar");
}

saludar();

//funcion flecha //

let restar = (a, b) => a + b;


let multiplicar = (a, b) => {
    console.log("mi mama me mima");
    return a * b;
}


saludar();