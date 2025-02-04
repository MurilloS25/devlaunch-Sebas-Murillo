/*
Su tarea es implementar una función que verifique si una expresión dada es válida en términos de paréntesis coincidentes. La función 
debe determinar si los paréntesis en la expresión están anidados y coincidentes correctamente.

La función toma una cadena como entrada y crea una nueva pila. Itera a través de los caracteres de la expresión de entrada, insertando 
los paréntesis de apertura en la pila y sacándolos cuando encuentra paréntesis de cierre para verificar pares coincidentes. Si los paréntesis 
coinciden correctamente, la función devuelve `true`; de lo contrario, devuelve `false`.

**Algoritmo:**

1. Cree una pila vacía llamada `stack`.
2. Itere a través de cada carácter en la cadena `expression` de entrada.
3. Si el carácter es un paréntesis de apertura ('(', '{', '['), introdúzcalo en `stack`.
4. Si el carácter es un paréntesis de cierre (')', '}', ']'):
- Extraiga el elemento superior de `stack`.
- Verifique si el elemento extraído coincide con el paréntesis de cierre actual. Si no hay coincidencias o si la pila está vacía al intentar extraer 
  los datos, devuelve "false".
5. Después de procesar todos los caracteres, comprueba si la pila está vacía:
- Si la pila está vacía, devuelve "true" (todos los corchetes coinciden).
- Si la pila no está vacía, devuelve "false" (existen corchetes que no coinciden).
*/


//Es lo mismo que parenthese.ts, solo que mas optimizado y haciendo y uso de MAP

/* 
EXPLICACION DE PORQUE ES MEJOR
La versión con matchingBracket es más eficiente y limpia.

📌 ¿Por qué?

Acceso directo con matchingBracket[char]
Evita comparaciones manuales con if y switch.
Acceder a un objeto (O(1)) es más rápido que evaluar múltiples condiciones en switch.
Menos líneas de código, más claridad
La lógica es más fácil de entender y modificar.
Es más fácil agregar más tipos de paréntesis en el futuro. 

*/

function isBalanced(expression: string): boolean {
    const matchingBracket: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack: string[] = [];

    for (const char of expression) {
        if (['(', '{', '['].includes(char)) {
            stack.push(char);
        } else if ([')', '}', ']'].includes(char)) {
            if (stack.length === 0 || stack[stack.length - 1] !== matchingBracket[char]) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}

console.log(isBalanced("([{}])"));   
console.log(isBalanced("([)]"));     
console.log(isBalanced("([]{}())")); 
console.log(isBalanced("([]{})("));  
console.log(isBalanced("{[()]}"));   
