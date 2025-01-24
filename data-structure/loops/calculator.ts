/*
Tu misión es desarrollar una calculadora que cuente con un menú fácil de usar que ofrezca operaciones aritméticas: suma, resta, 
multiplicación, división y salida. Una vez que se selecciona una operación, el programa solicitará al usuario que ingrese dos 
números enteros. Al recibir la entrada, el programa ejecutará la operación elegida y mostrará el resultado. Este proceso se 
repetirá en un bucle hasta que el usuario opte por salir.
*/

/* import PromptSync from "prompt-sync";

const prompt = PromptSync();

class calculator {
  private screenNumber: number = 0;

  constructor() {}

  private sum(num1: number, num2: number) {
    return (this.screenNumber = num1 + num2);
  }

  private rest(num1: number, num2: number) {
    return (this.screenNumber = num1 - num2);
  }

  private divide(num1: number, num2: number) {
    return (this.screenNumber = num1 / num2);
  }

  private multiply(num1: number, num2: number) {
    return (this.screenNumber = num1 * num2);
  }

  public chooseOption(): void {
    while (true) {
      let operation: string = prompt(
        "Choose your operation: | + | - | * | / | EXIT "
      );

      if (operation.toUpperCase() === "EXIT") {
        console.log("Bye");
        break;
      } else if(operation !==  '+' && operation !==  '-' && operation !==  '*' && operation !==  '/') {
        console.log("Invalid Character, try again!");
        continue
      }
      let num1: number = parseInt(prompt(`Choose number 1: `));
      let num2: number = parseInt(prompt(`Choose number 2: `));

      if (isNaN(num1) && isNaN(num2)) {
        console.log("hola");
        break;
      }

      if (operation === "+") {
        console.log(`${num1} + ${num2} = ${this.sum(num1, num2)}`);
      } else if (operation === "-") {
        console.log(`${num1} - ${num2} = ${this.rest(num1, num2)}`);
      } else if (operation === "*") {
        console.log(`${num1} * ${num2} = ${this.multiply(num1, num2)}`);
      } else if (operation === "/") {
        console.log(`${num1} / ${num2} = ${this.divide(num1, num2)}`);
      }
    }
  }
}

const calc1 = new calculator();
calc1.chooseOption();
 */