/*
Escribe un programa simple en JavaScript que evalúe el valor de una variable llamada 'n'.
Verifica si el número es positivo, negativo o cero, y muestra un mensaje correspondiente
basado en la siguiente evaluación:

Si el número es mayor que 0, imprime 'Positivo'.
Si el número es menor que 0, imprime 'Negativo'.
Si el número es exactamente 0, imprime 'Cero'.

Si la variable no es un número, imprime un mensaje de error: 'Por favor, introduce un número'.
*/


const promt = require('prompt-sync')()

const n = parseFloat(promt('Choose a number: '))


if(n === 0 ){
    console.log('Cero')
}else if(n > 0){
    console.log('Positivo')
}else{
    console.log('Negativo')
}