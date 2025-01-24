/*
Para este desafío de codificación, trabajarás en un conjunto de minifunciones con varias tareas matemáticas. Profundicemos en los siguientes ejercicios:

1. Encuentra la suma total de potencias de 2 que van desde 2^1 hasta 2^64. Por ejemplo: 2**^**1 + 2**^**2 + 2**^**3 + 2**^**4 + … + 2**^**64
2. Calcula la suma de los primeros 'n' números en una secuencia donde cada término, comenzando desde el tercero, se genera sumando los dos términos anteriores.
3. Determina la suma de los términos en la serie 1^3 + 3^3 + 5^3 + ... + n^3, con 'n' como el límite dado.

Tomar en cuenta que se pueden hacer todas las validaciones como que sea un NAN, MAYOR QUE CERO o cualquier otra por el ejemplo se queda asi
*/

function exponentNum(exponent: number): number {
  let total = 0;

  for (let i = 1; i <= exponent; i++) {
    total += 2 ** i;
  }
  return total;
}

function fibonacci(n: number) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  let a: number = 0;
  let b: number = 1;
  let result = 0;

  for (let i = 2; i <= n; i++) {
    result =+ a + b;
    a = b;
    b = result;
  }

  return result;
}

function cubeNum(number: number): number {
  let result = 0;

  for (let i = 1; i <= number; i += 2) {
    result += Math.pow(i, 3);
  }

  return result;
}

console.log(exponentNum(64));
console.log(fibonacci(10));
console.log(cubeNum(10));
