/*
En este escenario, se te proporcionarán varias fracciones, y tu tarea será realizar diversas
operaciones con ellas, tales como suma, resta, multiplicación y división.

El objetivo es obtener el numerador y el denominador resultantes de estas operaciones.

Para lograrlo, deberás definir dos atributos: el numerador y el denominador.

Además, implementarás métodos correspondientes para cada operación, devolviendo un objeto
resultante con el numerador y denominador calculados.

Dando la posibilidad de operar estas fracciones de 2 formas distintas, tanto de funciones aparte
del objeto como incluidos como parte de su funcional dentro del objeto mismo.

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)

add(fraction1, fraction2)

const fraction3 = createFractionWithFunctions(3, 4)
const fraction4 = createFraction(2, 3)

fraction3.add(fraction4)
*/



const createFraction = (numerator, denominator) => {

    return{
        numerator,
        denominator
    }

}



const add = (f1,f2) =>{
    const numerator = (f1.numerator * f2.denominator) + (f2.numerator * f1.denominator)
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator,denominator)
}


const subtract = (f1,f2) =>{
    const numerator = (f1.numerator * f2.denominator) - (f2.numerator * f1.denominator)
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator,denominator)
}


const multiply = (f1,f2) =>{
    const numerator = f1.numerator * f2.numerator
    const denominator = f1.denominator * f2.denominator

    return createFraction(numerator,denominator)
}

const divide = (f1,f2) =>{
    const numerator = f1.numerator * f2.denominator
    const denominator = f1.denominator * f2.numerator

    return createFraction(numerator,denominator)
}


const createFractionWithFunctions = (numerator, denominator) => {

    const f1 = createFraction(numerator, denominator)

    return{
        ...f1,
        add: (f2) => add(f1,f2),
        subtract: (f2) => subtract(f1,f2),
        multiply: (f2) => multiply(f1,f2),
        divide: (f2) => divide(f1,f2)
    }
}

const fraction1 = createFraction(3, 4)
const fraction2 = createFraction(2, 3)
const fraction3 = add(fraction1, fraction2)
const fraction4 = createFractionWithFunctions(3,4)
const fraction5 = fraction4.add(fraction2)
//const fraction4 = subtract(fraction1, fraction2)
//const fraction5 = multiply(fraction1, fraction2)
//const fraction6 = divide(fraction1, fraction2)

console.log(fraction1)
console.log(fraction2)
console.log(fraction3)
//console.log(fraction4)
console.log(fraction5)
//console.log(fraction6)