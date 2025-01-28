/*
Cree un programa JavaScript que sume números en las posiciones de índice correspondientes de dos matrices dadas. 
Esto significa sumar el número en el índice 0 de la primera matriz al número en el índice 0 de la segunda matriz, 
y así sucesivamente. Asegúrese de que el programa pueda manejar matrices de diferentes longitudes y sumar los números 
con precisión. Además, incluya el manejo de errores para abordar situaciones como matrices vacías o matrices con valores no numéricos.
*/


function sumArrays(arrayOne: number[], arrayTwo: number[]): number[] | undefined{

    if((arrayOne.length === 0) || arrayTwo.length === 0){
        return undefined
    }

    const newArray: number[] = []
    const maxLength = Math.max(arrayOne.length, arrayTwo.length)

    for (let i = 0; i < maxLength; i++) {
        const value1 = arrayOne[i] || 0
        const value2 = arrayTwo[i] || 0
        newArray.push(value1+value2)      
    }

    return newArray
}


const arrayNum1 = [1, 0, 2, 3, 4]
const arrayNum2 = [3, 5, 6, 7, 8, 13, 9]

console.log(sumArrays(arrayNum1,arrayNum2))