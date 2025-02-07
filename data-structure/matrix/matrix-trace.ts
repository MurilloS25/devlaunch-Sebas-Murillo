/*
El concepto de traza de una matriz implica sumar los valores de los elementos diagonales dentro de la matriz. 
Su tarea es crear una función que reciba una matriz cuadrada en forma de matriz 2D y calcule su traza. Esta 
función utilizará un bucle para iterar a través de los elementos diagonales de la matriz y acumular sus valores 
en la variable de traza.
*/

function calculateMatrixTrace(matrix: number[][]) {
  let sum: number = 0;
  if (matrix.length === 0 || matrix.length !== matrix[0].length) {
    console.log(
      "La matriz debe ser cuadrada y no estar vacia"
    );
    return false;
  }

  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  return sum;
}

const matrix = [[1, 2, 3],[4, 5, 6],[7, 8, 9]];

console.log("La traza de la matriz es:", calculateMatrixTrace(matrix));
