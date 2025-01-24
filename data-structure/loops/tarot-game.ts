/*
En el Tarot, utilizamos la numerología para entender mejor a una persona. Para encontrar su número del Tarot, observamos su fecha de nacimiento. 
Sumando los dígitos de su fecha de nacimiento, podemos encontrar un número especial que lo represente. Este número es importante porque refleja 
la energía que puede darnos información sobre su personalidad y destino. Para empezar, pensemos en alguien nacido el 28 de noviembre de 1989. 
Para descubrir el número, tenemos que seguir varios pasos:

Paso 1: sumamos los números de su fecha de nacimiento: el día, el mes y el año. Por lo tanto, sumamos 28, 11 y 1989, obteniendo 2028.

Paso 2: ahora, descomponemos este gran número en partes más pequeñas. Entonces, para 2028, sumamos 2 + 0 + 2 + 8, que es igual a 12.

Paso 3: finalmente, simplificamos este número aún más. Entonces, para 12, sumamos 1 + 2, lo que da 3. ¡Y ese es el número especial que estamos buscando!

Tu tarea es crear una función que use un mensaje para recopilar el cumpleaños del usuario. Luego, usando bucles, la función determinará el número del Tarot 
siguiendo los pasos descritos en esta exploración numérica.
*/

import PromptSync from "prompt-sync";

const prompt = PromptSync();

function isValidDate(day: number, month: number, year: number): boolean {
  if (year <= 0 || month < 1 || month > 12 || day < 1) {
    return false;
  }
  const daysInMonth: number = new Date(year, month, 0).getDate();
  return day <= daysInMonth;
}

function sumDigits(number: number): number {
  let sum = 0;
  while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
  }
  return sum;
}

function calculateTarotNumber(day: number,month: number,year: number): number | null {
  if (!isValidDate(day, month, year)) {
    console.error("Invalid date provided.");
    return null;
  }

  let total: number = day + month + year;

  while (total >= 10) {
    total = sumDigits(total);
  }

  return total;
}

const birthDay: number = parseInt(prompt("Enter your birth day: "));
const birthMonth: number = parseInt(prompt("Enter your birth month: "));
const birthYear: number = parseInt(prompt("Enter your birth year: "));
const tarotNumber: number | null = calculateTarotNumber(
  birthDay,
  birthMonth,
  birthYear
);
console.log(`Your tarot number is : ${tarotNumber}!!`);
