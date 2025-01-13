/*
Imagina desarrollar un programa para calcular el promedio de calificaciones de estudiantes en una escuela. Como parte de este desafío, primero configuras el entorno para recibir entradas del usuario, permitiendo que ingresen tres notas.

Luego, procesas estos datos para calcular el promedio de manera precisa.

Finalmente, presentas el resultado formateado con máximo dos decimales, para asegurar una lectura clara.

Si el usuario ingresa las calificaciones 80, 70 y 90, la salida será: 80

*/

const promt = require('prompt-sync')()

const grade1 = parseFloat(promt('Inserte la primera calificación: '))
const grade2 = parseFloat(promt('Inserte la segunda calificación: '))
const grade3 = parseFloat(promt('Inserte la tercera calificación: '))

const MAX_DIGITS = 2

const average = (grade1 + grade2 + grade3) / 3

console.log(`Your Final Grade is: ${average.toFixed(MAX_DIGITS)}`)