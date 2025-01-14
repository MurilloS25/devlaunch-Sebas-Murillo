/*
El programa solicita al usuario un número del 1 al 7 mediante prompt-sync.

Utiliza una declaración switch para mostrar el día de la semana correspondiente o
"Invalid day" si el número no es válido. Ejemplo: 3 muestra "Wednesday",
8 muestra "Invalid day". Ideal para identificar días en programas simples.

*/


const promt = require('prompt-sync')()

const n = parseInt(promt('Choose a number from1 to 7: '))


switch (n) {
    case 1:
        console.log('Monday')
        break;
    case 2:
        console.log('Tuesday')
        break;
    case 3:
        console.log('Wednesday')
        break;
    case 4:
        console.log('Thursday')
        break;
    case 5:
        console.log('Friday')
        break;
    case 6:
        console.log('Saturday')
        break;
    case 7:
        console.log('Sunday')
        break;                                                                                 
    default:
        console.log('Invalid day')
        break;
}