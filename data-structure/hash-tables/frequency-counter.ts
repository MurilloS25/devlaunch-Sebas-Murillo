/*
En este ejercicio de codificación, haremos algo llamado contador de frecuencia, que es una técnica de programación que se utiliza para contar las 
ocurrencias de elementos en una colección, como una matriz o una lista.

Para implementar esto, creará una función que tome dos matrices de números y la función debe devolver `true` si cada elemento de la primera matriz 
tiene un elemento correspondiente en la matriz que es el elemento cuadrado de la primera matriz; de lo contrario, devolverá false.

Implemente una función llamada "frequencyCounter" que tome dos matrices de números, "arr1" y "arr2". La función debe devolver `true` si cada elemento 
en "arr1" tiene un elemento correspondiente en "arr2" que es el cuadrado del elemento en "arr1".

La función debe devolver `false` en caso contrario.
Primero creamos una tabla hash para almacenar los elementos de arr1 como claves y sus frecuencias como valores.

Luego, para cada elemento en arr2, verificamos si hay un elemento correspondiente en arr1 tomando la raíz cuadrada del elemento en arr2 y verificando si 
existe en la tabla hash.

Si existe, decrementamos el valor (frecuencia) de esa clave en la tabla hash.

Si no existe, devolvemos un objeto con `false` y el hash. Si todos los elementos en arr2 tienen elementos correspondientes en arr1, la tabla hash estará 
vacía al final y devolvemos `true` y el hash.
*/

interface FrequencyHash {
    [key: number]: number
  }
  
  interface FrequencyCounterResult {
    isValid: boolean
    hash: FrequencyHash
  }
  
  function frequencyCounter(arr1: number[], arr2: number[]): FrequencyCounterResult {
    const frequencyMap: FrequencyHash = {}
  
    for (const num of arr1) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1
    }
  
    for (const num of arr2) {
      const sqrtNum = Math.sqrt(num)
      if (!frequencyMap[sqrtNum]) {
        return { isValid: false, hash: frequencyMap }
      }
      frequencyMap[sqrtNum] -= 1
    }
  
    for (const key in frequencyMap) {
      if (frequencyMap[key] !== 0) {
        return { isValid: false, hash: frequencyMap }
      }
    }
  
    return { isValid: true, hash: frequencyMap }
  }
  
  console.log(frequencyCounter([1, 2, 3], [1, 4, 9]))
  console.log(frequencyCounter([1, 2, 3], [1, 4, 10]))
  