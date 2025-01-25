/*
En respuesta a la creciente demanda de servicios de cambio de divisas eficientes, una casa de cambio colombiana está introduciendo un sistema 
simplificado para convertir monedas extranjeras a pesos colombianos. Su tarea es desarrollar un programa que gestione el tipo de cambio sin problemas. 
Esto implica crear un menú fácil de usar que permita a los clientes convertir entre pesos, dólares y euros, con tipos de conversión establecidos en 1 
dólar = 3600 pesos y 1 euro = 4000 pesos.

Además, solicite a los usuarios que ingresen el valor de la moneda extranjera que desean convertir y muestre el monto resultante en pesos colombianos. 
Por último, asegúrese de que el programa funcione de forma continua en un bucle hasta que el usuario opte por salir.
*/

const DOLLAR_TO_PESO = 3600;
const EURO_TO_PESO = 4200;

function convertDollarToPesos(dolars: number) {
  return dolars * DOLLAR_TO_PESO;
}

function convertEuroToPesos(euros: number) {
  return euros * EURO_TO_PESO;
}

function convertPesosToDollar(pesos: number) {
  return pesos / DOLLAR_TO_PESO;
}

function convertPesosToEuro(dolars: number) {
  return dolars / EURO_TO_PESO;
}

function menuM(): void {
  const prompt = require("prompt-sync")();
  let opcion = 0;

  do {
    console.log("1. Convert Dollars to Pesos");
    console.log("2. Convert Euros to Pesos");
    console.log("3. Convert Pesos to Dollars");
    console.log("4. Convert Pesos to Euros");
    console.log("5. Exit");
    opcion = parseInt(prompt("Ingrese una opción: "));

    if (opcion >= 1 && opcion <= 4) {
      let money = parseInt(prompt("Ingrese la cantidad que desea convertir: "));
      if (isNaN(money)) {
        console.log("Invalid input. Please enter a valid numeric value.")
        continue
    }

      switch (opcion) {
        case 1:
          console.log("The value in pesos is: " + convertDollarToPesos(money));
          break
        case 2:
          console.log("The value in pesos is: " + convertEuroToPesos(money));
          break
        case 3:
          console.log("The value in Dollars is: " + convertPesosToDollar(money));
          break
        case 4:
          console.log("The value in Euros is: " + convertPesosToEuro(money));
          break
        default:
          console.log("Invalid option. Please enter a number between 1 and 5.");
      }
      console.log("Press Enter to continue...");
      prompt();
      console.clear();
    }
  } while (opcion != 5);
}

menuM();
