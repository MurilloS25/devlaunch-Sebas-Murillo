/*
Escribe un programa sencillo en JavaScript que calcule y muestre el Índice de Masa Corporal (IMC)
de un usuario. El programa debe solicitar al usuario su nombre, altura en metros y peso en
kilogramos.

Después de calcular el IMC, el programa debe mostrar un mensaje al usuario que incluya su nombre
y el valor de su IMC.

Calcula el IMC utilizando la fórmula:

IMC = weight / height^2

Nombre: John
Altura: 1.75
Peso: 70

La salida será: Hi John, your BMI is ~22.86
*/

const promt = require('prompt-sync')()

const MAX_DIGITS = 2

const name = promt('Your Name: ')
const height = parseFloat(promt('Your height: '))
const weight = parseFloat(promt('Your weight: '))

const imc = weight / Math.pow(height,2)

console.log(`Hi ${name}, your BMI is ~${imc.toFixed(MAX_DIGITS)}`)