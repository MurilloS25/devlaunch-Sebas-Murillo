/*
El programa solicita al usuario su edad con prompt-sync, la convierte a número y
utiliza el ternary clasificar:

0 a 2 años: "You are a baby".
3 a 13 años: "You are a child".
14 a 17 años: "You are a teenager".
18 a 29 años: "You are a young adult".
30 a 60 años: "You are an adult".
Más de 60 años: "You are an elderly".

Si la edad es menor de 0, muestra: "The institution does not support your age, please try again."
Es una forma clara y útil de categorizar por edades.
*/

const prompt = require('prompt-sync')();

const n = parseFloat(prompt('Choose your age: '));

n > (n <= 2)
    ? console.log('You are a baby') 
    : (n >= 3 && n <= 13)   
    ? console.log('You are a child') 
    : (n >= 14 && n <= 17) 
    ? console.log('You are a teenager') 
    : (n >= 18 && n <= 29) 
    ? console.log('You are a young adult') 
    : (n >= 30 && n <= 60) 
    ? console.log('You are an adult') 
    : (n > 60) 
    ? console.log('You are an elderly') 
    : (n <= 0) 
    ? console.log('The institution does not support your age, please try again.') 
    : console.log('Invalid age. Please enter a valid number.');

