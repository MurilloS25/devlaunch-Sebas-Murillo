/*
Tienes la tarea de escribir una función para encontrar los elementos comunes entre dos matrices de números. 
La función debe utilizar la estructura de datos Set, que permite una búsqueda eficiente y elimina los duplicados.
*/

//MI SOLUCION
function commonNumbers(arr1:number[], arr2:number[]){
   const set1 = new Set(arr1)
   const commonNumbers = new Set<number>()

   for (let i = 0; i < arr2.length; i++) {
        if (set1.has(arr2[i])) {
            commonNumbers.add(arr2[i])
        }
   }
   return Array.from(commonNumbers)
}

//SOLUCION NOTION
function commonNumbers2(arr1: number[], arr2: number[]) {
    const numbers1 = new Set<number>(arr1);
    const numbers2 = new Set<number>(arr2);
    const commonNumbers = new Set<number>();

    for (let value of numbers1) {
        if (numbers2.has(value)) {
            commonNumbers.add(value);
        }
    }

    return Array.from(commonNumbers);
}

const arr1: number[] = [1, 2, 3, 4, 5]
const arr2: number[] = [3, 4, 5, 6, 7]

console.log(`Los numeros en comun son: ${commonNumbers(arr1,arr2)}`)

const result = commonNumbers2(arr1, arr2);
console.log(result);
