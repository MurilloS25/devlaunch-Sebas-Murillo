/*
Tienes la tarea de crear una función de TypeScript que calcule de manera eficiente la frecuencia de cada elemento único 
en una matriz de números. Para lograr esto, usarás una estructura de datos `Map` para almacenar los elementos como claves 
y sus frecuencias correspondientes como valores.

El objetivo es implementar una función, `calculateFrequency`, que acepta una matriz de números como entrada y devuelve un 
`Map` que contiene cada elemento único como clave y su frecuencia como valor asociado. 
*/

//MI SOLUCION
function frequencyNumbers(numbers: number[]): Map<number,number> {
  let numbersMap = new Map<number, number>();
  for (let i = 0; i < numbers.length; i++) {
    let cont = 0;
    if (!numbersMap.has(numbers[i])) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] === numbers[j]) {
          cont++;
        }
      }
      numbersMap.set(numbers[i],cont)
    }
  }
  return numbersMap
}

//SOLUCION NOTION
//MUCHO MEJOR YA QUE SE APROVECHA EL POTENCIAL DE MAP, AL SOLO USAR UN BUCLE Y ACTUALIZAR EL VALOR CON SET

const listOfNumbers = [1, 2, 1, 3, 1, 2, 1]

const calculateFrequency = function (listOfNumbers: number[]): Map<number, number> {
  const numbersFrequency = new Map<number, number>()

  for (const numbers of listOfNumbers) {
    if (numbersFrequency.has(numbers)) {
      const currentFrequency: number = numbersFrequency.get(numbers) || 0
      numbersFrequency.set(numbers, currentFrequency + 1)
    } else {
      numbersFrequency.set(numbers, 1)
    }
  }
  return numbersFrequency
}

console.log(calculateFrequency(listOfNumbers)) 

const nums = [1, 2, 1, 3, 1, 2, 1];

console.log(frequencyNumbers(nums));
