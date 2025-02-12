/*
Implementa una función llamada "twoSum" que toma una matriz de números enteros y un valor objetivo. La función debe devolver los 
índices de los dos números en la matriz que suman el valor objetivo, o devolver `[-1,-1]` si no existe dicho par.

Es necesario crear clases de nodo hash y tabla hash para este ejercicio.

Luego iteramos a través de la matriz de entrada y, para cada elemento, calculamos su complemento (que es el valor objetivo menos el elemento actual) 
y verificamos si existe en la tabla hash.

Si existe, devolvemos los índices del elemento actual y del elemento complementario, a medida que se suman al valor objetivo.

Si el complemento no existe en la tabla hash, agregamos el elemento actual y su índice a la tabla hash.

Finalmente, si llegamos al final de la matriz y no se encuentra dicho par, devolvemos `[-1, -1]`.
*/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];

    if (map.has(complemento)) {
      return [map.get(complemento)!, i];
    }

    map.set(nums[i], i);
  }

  return [-1, -1];
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twoSum(nums, target));
