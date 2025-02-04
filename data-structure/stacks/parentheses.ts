/*
Su tarea es implementar una función que verifique si una cadena dada de paréntesis está balanceada. La función debe devolver `true` 
si los paréntesis están balanceados, lo que significa que cada paréntesis de apertura tiene un paréntesis de cierre correspondiente y 
están anidados correctamente. Si los paréntesis no están balanceados, la función debe devolver `false`.

En este ejercicio, usará una pila para realizar un seguimiento de los paréntesis de apertura a medida que los encuentre en la cadena 
de entrada. Cuando encuentre un paréntesis de cierre, lo comparará con el paréntesis de apertura más reciente encontrado en la pila. 
Si no hay ningún paréntesis de apertura coincidente, los paréntesis se consideran desequilibrados y la función devuelve `false`. Si 
la pila está vacía después de procesar toda la cadena de entrada, significa que todos los paréntesis de apertura se han emparejado 
correctamente con los paréntesis de cierre y la función devuelve `true`.

**Algoritmo:**

1. Inicialice una pila vacía (puede usar una matriz como pila).
2. Recorrer cada carácter de la cadena de entrada.
- Si el carácter es un paréntesis de apertura (p. ej., '(', '{', '['), colóquelo en la pila.
- Si el carácter es un paréntesis de cierre (p. ej., ')', '}', ']'), verifique si la pila está vacía.
3. Después de procesar todos los caracteres de la cadena de entrada, verifique si la pila está vacía:
- Si la pila está vacía, devuelva `true` porque todos los paréntesis están equilibrados.
- Si la pila no está vacía, devuelva `false` porque hay paréntesis de apertura que no coinciden.
*/

function checkParentheses(str: string): boolean {
  let stack: string[] = [];

  for (let i = 0; i < str.length; i++) {
    let element = str[i]
    if (element === "(" || element === "{" || element === "[") {
      stack.push(element);
      continue;
    }

    if (stack.length === 0) {
      return false;
    }

    let check: any;
    switch (element) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;
      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;
      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return stack.length == 0;
}


console.log(checkParentheses("((()))"))
console.log(checkParentheses("((())"))
console.log(checkParentheses("([{}])"))
console.log(checkParentheses("()"))

