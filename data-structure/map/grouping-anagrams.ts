/*
En este ejercicio de codificación, se le asignará la tarea de crear una función de TypeScript que agrupe de manera efectiva anagramas 
de una lista dada de palabras. Un anagrama es una palabra o frase formada al reorganizar las letras de otra palabra o frase, utilizando 
todas las letras originales exactamente una vez.

Para lograr esto, definirá una función llamada `groupAnagrams`, que acepta una matriz de cadenas como entrada. Dentro de esta función, 
utilizará una estructura de datos `Map` donde cada clave representa una cadena ordenada de caracteres de la matriz de entrada, y el valor 
correspondiente es una matriz de cadenas que contiene todos los anagramas para esa cadena ordenada en particular. Una vez que se complete 
la agrupación de los anagramas, la función devolverá el mapa completo con los anagramas agrupados, listos para su posterior procesamiento 
o análisis. 
*/


const calculateFrequencys = function (listOfNumbers: number[]): Map<number, number> {
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


function anagrams(words:string[]):Map<string, string[]>{
    const anagrams = new Map<string, string[]>()

    for(const word of words){
        const sortedWord = word.split('').sort().join('');

        if(anagrams.has(sortedWord)){
            anagrams.get(sortedWord)!.push(word)        
        }else{
            anagrams.set(sortedWord, [word])
        }

    }


    return anagrams
}


const groupOfWords = ["listen", "silent", "enlist", "inlets", "google", "gooegl"] 

console.log(anagrams(groupOfWords))