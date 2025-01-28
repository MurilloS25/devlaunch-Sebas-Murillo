/*
 Para este desafío de codificación, trabajarás en un conjunto de minifunciones con varias tareas matemáticas. Profundicemos en los siguientes ejercicios:

1. Programa una función que reciba un número y devuelva Verdadero si es un número primo. De lo contrario, devuelve Falso.
2. Escribe una función que reciba una lista numérica y devuelva el número primo más pequeño. Por ejemplo, usa la función creada en el punto anterior.

La definición de un número primo dice que un entero mayor que uno se llama número primo si y solo si tiene como divisores positivos (factores), solo él mismo y la unidad (1).

Supongamos que queremos verificar si 104729 (un número primo) es primo:

Método	Iteraciones necesarias
for (let i = 2; i < number; i++)	104,727 iteraciones
for (let i = 2; i <= Math.sqrt(number); i++)	323 iteraciones

*/

function itsPrimeNumber(num: number): boolean {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function smallestPrime(numbers: number[]): number | undefined {
    let smallest: number | undefined;

    for (const num of numbers) {
        if(itsPrimeNumber(num)){
            if(smallest === undefined || smallest > num){
                smallest = num
            }
        }     
    }

    return smallest

}

const numbers: number[] = [20, 21, 22, 23, 24, 25]
console.log("Smallest prime number:", smallestPrime(numbers))