/* 
Imagina que tienes la tarea de gestionar un contenedor lleno de cajas de distintos pesos. Cada número de una matriz representa el peso 
de una caja dentro del contenedor. Por ejemplo, considera una matriz `[2, 4, 5]`. Esta matriz indica que el contenedor contiene tres cajas: 
una que pesa 2 kilogramos, otra que pesa 4 kilogramos y la última que pesa 5 kilogramos.

Ahora, tu objetivo es determinar cuántas cajas superan el peso promedio de todo el grupo. Para lograrlo, primero calcularás el peso promedio 
de todas las cajas del contenedor. Luego, compararás el peso de cada caja con este valor promedio. Si el peso de una caja supera el promedio, 
se considera que está entre las que superan el peso promedio.

Esta tarea implica iterar a través de la matriz de pesos de las cajas, calcular el peso promedio y luego comparar el peso de cada caja con 
este promedio para contar cuántas cajas lo superan. Finalmente, proporcionarás el recuento de cajas que superan el peso promedio, lo que 
dará una indicación clara de la distribución general del peso del contenedor.
*/


const container: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const totalWeight: number = container.reduce((total, weight) => total + weight, 0)
const averageWeight: number = totalWeight / container.length

const boxesExceedingAverage: number[] = container.filter(weight => weight > averageWeight)
const countExceedingAverage: number = boxesExceedingAverage.length


console.log(`Average weight: ${averageWeight}`)
console.log(`Boxes exceeding average weight: ${countExceedingAverage}`)