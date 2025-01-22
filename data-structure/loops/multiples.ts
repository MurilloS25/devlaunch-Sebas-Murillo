/*
Escriba un programa en JavaScript diseñado para calcular la suma de múltiplos de 2 y 8 que estén por debajo del número 1000. 
Para cada número inspeccionado, debe determinar si es divisible de manera exacta por 2 y 8. Si el número satisface esta condición, 
lo agrega a la suma total acumulada.

Una vez que se hayan evaluado todos los números menores de 1000, el programa debe concluir su cálculo y mostrar la suma resultante en 
la consola. La suma representa el total colectivo de todos los múltiplos de 2 y 8 que se encuentran dentro del rango especificado.

Además, debe implementar este programa utilizando un bucle "for" y otra función que utilice un bucle "while".
*/

function multiplesWithFor(numberToReach: number) {
  let total: number = 0;
  for (let i = 1; i < numberToReach; i++) {
    if (i % 2 === 0 && i % 8 === 0) {
      total += i;
    } 
  }

  return total
}


function multiplesWithWhile(numberToReach: number) {
    let cont = 0
    let total: number = 0;
    while(cont < numberToReach) {
      if (cont % 2 === 0 && cont % 8 === 0) {
        total += cont;
      } 
      cont++
    }
  
    return total
  }

const sumFor = multiplesWithFor(1000)
const sumWhile = multiplesWithWhile(1000)

console.log(`The result of the sum of multiples using for loop is: ${sumFor}`)
console.log(`The result of the sum of multiples using while loop is: ${sumWhile}`)