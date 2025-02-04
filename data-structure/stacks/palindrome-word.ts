/*
Un palíndromo es una secuencia de caracteres que se lee igual hacia atrás que hacia adelante, independientemente del espaciado, la puntuación o la mayúscula. 
Los palíndromos se pueden encontrar en varias formas, incluidas palabras individuales, frases, números o incluso oraciones completas. Por ejemplo, 
 "A man, a plan, a canal: Panama", "racecar", "madam", "level", "civic", "radar", "deified", "abccba", and "a" son todos ejemplos de palíndromos.

Su tarea es escribir una función que determine si una cadena dada de caracteres es un palíndromo. La función debe aceptar un solo parámetro: una cadena que 
represente la secuencia de caracteres que se va a verificar. Debe devolver "verdadero" si la cadena de entrada es un palíndromo y "falso" en caso contrario.

Tenga en cuenta que al determinar si una cadena es un palíndromo, debe ignorar las diferencias en el espaciado, la puntuación y la mayúscula. Por ejemplo, 
"A man, a plan, a canal: Panama" debe tratarse como un palíndromo a pesar de la presencia de espacios y puntuación. Su función debe manejar palíndromos 
de una sola palabra y de varias palabras, así como frases palindrómicas con mayúsculas y minúsculas y puntuación combinadas. Además, debe ser eficiente y capaz 
de manejar cadenas de distintas longitudes. 
*/


//MI FUNCION, ES MENOS OPTIMA YA QUE PRIMERA REARMA TODA LA PALABRA AL REVES Y DESPUES VERIFICA SI SON IGUALES, LO QUE HACE QUE RECOORE MUCHAS
//LETRAS NO NECESARIAS

function isPalindrome1(str:string):boolean {
    
    let normalizeWord = str.toLowerCase().replace(/\s+/g, "").replace(/[\u0300-\u036f]/g, "").replace(/[.,:;]/g, "")
    let comparativeWord = ""
    const stack = []

    for (let i = 0; i < normalizeWord.length; i++) {
        stack.push(normalizeWord[i])
    }

    while (stack.length > 0) {
        comparativeWord += stack.pop()
    }

    if (normalizeWord === comparativeWord) {
        return true
    }

    return false
}

//FUNCION DE NOTION, CORRIGIENDO EL TEMA DE QUE NO IGNORARA TILDES, PUNTO, ETC PARA QUE FUNCIONARA CORRECTAMENTE
//ES MAS OPTIMA YA QUE UNA VEZ QUE DETECTE QUE NO COINCIDA ACABA EL CICLO

function isPalindrome(str: string): boolean {

    const normalizeString = str.toLowerCase().replace(/\s+/g, "").replace(/[\u0300-\u036f]/g, "").replace(/[.,:;]/g, "")
    let stack: Array<string> = []

    for (let i = 0; i < normalizeString.length; i++) {
        stack.push(normalizeString[i])
    }

    for (let i = 0; i < normalizeString.length; i++) {
        if (normalizeString[i] !== stack.pop()) {
            return false
        }
    }

    return true
}

const word1 = "racecar"
const word2 = "hello"
const word3 = "A man, a plan, a canal: Panama"

console.log(isPalindrome(word3))
