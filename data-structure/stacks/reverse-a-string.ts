/*
Su tarea consiste en escribir una función que tome una cadena como entrada y devuelva la cadena invertida. 
Esta función logra la inversión mediante una estructura de datos de pila. Los caracteres de la cadena de 
entrada se iteran y se colocan en la pila en orden inverso. Luego, la cadena invertida se construye extrayendo 
los caracteres de la pila.
*/


function reverseString(str:string):string{

    const stack: Array<string> = []
    let reversedString :string = ''

    for (let i = 0; i < str.length; i++) {
        stack.push(str[i]);
    }

    while(stack.length > 0){
        reversedString  += stack.pop();
    }

    return reversedString 
}

const word = 'Hello World!'

console.log(reverseString(word))