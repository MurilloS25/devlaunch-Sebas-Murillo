/* 
Una aplicación matemática tiene como objetivo incorporar una función que permita a los usuarios ingresar los lados de un triángulo, 
y la aplicación determina el tipo de triángulo en función de los valores proporcionados.

Su objetivo es desarrollar el programa responsable de categorizar el tipo de triángulo en función de la entrada del usuario. La interfaz 
del programa debe ofrecer opciones para identificar si el triángulo es equilátero, isósceles, escaleno o saliente. A continuación, solicite 
al usuario que ingrese los valores de los lados del triángulo. 
*/

function checkTriangleType(side1: number, side2: number, side3: number) {
  if (side1 === side2 && side2 === side3) {
    return "Equilateral Triangle";
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Isosceles Triangle";
  } else {
    return "Scalene Triangle";
  }
}

function triangleType(): void {
    const prompt = require("prompt-sync")();
    let opcion = 0;
  
    do {
      console.log("1. Insert triangle side values");
      console.log("2. Exit");
      opcion = parseInt(prompt("Enter an option: "));
  
      switch (opcion) {
        case 1:
          let side1 = parseFloat(prompt("Enter the length of side 1: "));
          let side2 = parseFloat(prompt("Enter the length of side 2: "));
          let side3 = parseFloat(prompt("Enter the length of side 3: "));
  
          if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
            console.log("Invalid side values. Please enter a valid numeric value.");
          } else {
            console.log(checkTriangleType(side1, side2, side3));
          }
  
          console.log("Press Enter to continue...");
          prompt();
          console.clear();
          break;
  
        case 2:
          console.log("Exiting program...");
          break;
  
        default:
          console.log("Invalid option. Please enter 1 or 2.");
          console.log("Press Enter to continue...");
          prompt();
          console.clear();
          break;
      }
    } while (opcion !== 2);
  }
  
  triangleType();
  

  /* 
  NOTION SOLUTION

  function checkTriangleType(side1: number, side2: number, side3: number) {
  if (side1 === side2 && side2 === side3) {
    return "Equilateral Triangle"
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    return "Isosceles Triangle"
  } else {
    return "Scalene Triangle"
  }
}

function getInput(prompt: string): number {
  const promptSync = require('prompt-sync')()
  return parseFloat(promptSync(prompt))
}

function runTriangleProgram(): void {
  let option = 0
  let side1, side2, side3

  do {
    console.log("1. Check Equilateral Triangle")
    console.log("2. Check Isosceles Triangle")
    console.log("3. Check Scalene Triangle")
    console.log("4. Exit")
    option = getInput("Enter an option: ")

    if (option >= 1 && option <= 3) {
      side1 = getInput("Enter the length of side 1: ")
      side2 = getInput("Enter the length of side 2: ")
      side3 = getInput("Enter the length of side 3: ")

      switch (option) {
        case 1:
          break
        case 2:
          break
        case 3:
          break
      }

      const triangleType = checkTriangleType(side1, side2, side3)
      console.log(`The triangle is a ${triangleType}.`)
      console.log("----------------------")
    } else if (option !== 4) {
      console.log("Invalid option. Please try again.")
    }

  } while (option !== 4)
}

runTriangleProgram()
 */