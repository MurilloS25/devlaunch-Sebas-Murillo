/* 
En este ejercicio de codificación, creará un programa JavaScript para simular un juego de dados con parámetros personalizables. 
El programa solicitará al usuario a través de la consola que ingrese la cantidad de tiradas de dados que desea simular. 
Cada tirada de dados estará sujeta a las siguientes reglas:

- Si el dado arroja un 6, el jugador gana $5.
- Si el dado arroja un 1, el jugador gana $1.
- Si el dado arroja un 2, 3, 4 o 5, el jugador pierde $2.

El programa determinará entonces la cantidad acumulada ganada o perdida por el jugador al final del juego.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

const WIN_ON_SIX = 5;
const WIN_ON_ONE = 1;
const LOSS_ON_OTHERS = -2;

function diceGame(): number {
  let totalBalance = 0;
  while (true) {
    let tries = parseInt(prompt(`Number of tries: `));
    if (!isNaN(tries) && tries > 0) {
      for (let i = 0; i < tries; i++) {
        totalBalance = rollDiceAndCalculate();
      }
      break;
    } else {
      console.log(`Invalid number of tries, Please try again!!`);
    }
  }
  return totalBalance;
}

function rollDiceAndCalculate(): number {
  const number = Math.floor(Math.random() * 6) + 1;

  if (number === 2 || number === 3 || number === 4 || number === 5) {
    return LOSS_ON_OTHERS;
  } else if (number === 1) {
    return WIN_ON_ONE;
  } else {
    return WIN_ON_SIX;
  }
}

const result = diceGame();
console.log(`Acumulative balance at the end of the game: ${result}`);
