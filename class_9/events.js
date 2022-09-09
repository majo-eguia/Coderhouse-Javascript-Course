// const btn = document.getElementById("btn"); // 1er forma

// btn.addEventListener("click", () => console.log("Ay me dolío!"));

// btn.onclick = () => console.log("Ay me dolío! Otra vez"); // 2da forma

//const btn = document.querySelector("#btn");
//const text = document.querySelector("p");

//const element = document.getElementById("btn");

//btn.addEventListener("click", () => (text.innerText = "Hola Mundo"));

document.onmousemove = (e) => console.log(e.clientX, e.clientY);
