/*
Descripción del Código:

Entrada de Fecha de Nacimiento: Se solicita al usuario que ingrese su fecha de nacimiento en el formato
Cálculo de la Edad: Se crea un objeto Date para la fecha de nacimiento y se calcula la edad restando el
Verificación de Edad: Se utiliza un if-else para determinar si la persona cumple con la edad legal para
Este programa permite que el proceso de verificación de edad sea automático y preciso.

Puedes guiarte con esto.

const prompt = require('prompt-sync')()

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)?");

const birthday = new Date(birthdate)
const today = new Date()

const age = today.getFullYear() - birthday.getFullYear() // takes the age of the person
*/

const prompt = require("prompt-sync")();

const birthdate = prompt("What is your birthdate in format (YYYY/MM/DD)? ");

const birthday = new Date(birthdate);
const today = new Date();

const IS_OLD_ENOUGH_AGE = 18;

let age = today.getFullYear() - birthday.getFullYear(); // takes the age of the person

const birthdayPassed =
  today.getMonth() > birthday.getMonth() ||
  (today.getMonth() === birthday.getMonth() && today.getDate() >= birthday.getDate());

if (!birthdayPassed) {
  age--;
}

const isOldEnough =
  IS_OLD_ENOUGH_AGE > age
    ? console.log("No puedes pasar hasta tener 18 años o más ")
    : console.log("Puedes entrar");
console.log(`You are ${age} years old`);
