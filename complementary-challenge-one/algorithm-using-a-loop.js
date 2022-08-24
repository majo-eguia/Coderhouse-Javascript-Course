// Example - while

let diseaseName = prompt("Enter the name of your disease");
let enteredDiseaseNames = "";

while (diseaseName != "ESC") {
  enteredDiseaseNames += diseaseName + "\n";
  diseaseName = prompt("Enter the name of your disease");
}
alert(enteredDiseaseNames);

// Example - for

let shoppingList = "";
let numberOfProducts = parseInt(prompt("Enter the number of products to buy"));
for (let i = 0; i < numberOfProducts; i++) {
  shoppingList +=
    prompt("Enter the name of the product you want to buy") + "\n";
}
alert(shoppingList);

// Example - for - continue - if

for (let i = 0; i <= 8; i++) {
  if (i === 6) {
    console.log("This is a bad number. We'll skip it 😜");
    continue;
  }
  console.log("This is number " + i);
}

// Example - switch

let enteredNumber = parseInt(prompt("Enter a number between 1 and 4"));
switch (enteredNumber) {
  case 1:
    alert("Congratulations, you've just won a tv!");
    break;
  case 2:
    alert("Congratulations, you've just won a kettle!");
    break;
  case 3:
    alert("Congratulations, you've just won a pc!");
    break;
  case 4:
    alert("Congratulations, you've just won a car!");
    break;
  default:
    alert("Error - You must enter a number between 1 and 4");
    break;
}
