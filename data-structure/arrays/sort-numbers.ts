/*
Cree una función que tome una serie de números como entrada y los ordene en orden ascendente, desde el valor más pequeño hasta el más grande.
*/

function sortNumbers(numbers: number[]): number[] {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 1; j < numbers.length - i - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temporal = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temporal;
      }
    }
  }

  return numbers;
}



const seriesOfNumbers: number[] = [1, 10, 4, 7, 6, 3]
console.log("Original numbers:", seriesOfNumbers)
const sortedNumbers = sortNumbers(seriesOfNumbers)
console.log("Sorted numbers:", sortedNumbers)
