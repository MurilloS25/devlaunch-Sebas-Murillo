/*
En este ejercicio de codificación, tienes la tarea de implementar el método `getSubMatrix` para una matriz dada. 
El objetivo de este método es devolver una nueva matriz que represente una submatriz de la matriz actual. Esta 
submatriz debe incluir filas desde `startRow` hasta `endRow` (inclusive) y columnas desde `startCol` hasta `endCol` (inclusive).

Para lograr esto, deberás asegurarte de que el método extraiga correctamente las filas y columnas especificadas de 
la matriz original y cree una nueva matriz que contenga estos elementos. Por ejemplo: si tienes una matriz `matrix` y 
llamas a `getSubMatrix(1, 2, 1, 2)`, debería devolver una nueva matriz que incluya:

- Filas 1 y 2 (inclusive) de la matriz original.
- Columnas 1 y 2 (inclusive) de la matriz original.
*/

function getSubMatrix(
  startRow: number,
  endRow: number,
  startCol: number,
  endCol: number,
  matrix: number[][]
) {
  const newMatrix: number[][] = [];
  if (
    startCol > matrix.length ||
    endCol > matrix.length ||
    startRow > matrix[0].length ||
    endRow > matrix[0].length
  ) {
    console.log(
      "Los inicios y finales de las filas y columnas deben ser menores al tamano de la matriz"
    );
    return false;
  }

  for (let i = startRow; i <= endRow; i++) {
    const newRow: number[] = [];
    for (let j = startCol; j <= endCol; j++) {
      newRow.push(matrix[i][j]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const startRow = 1;
const endRow = 2;
const startCol = 0;
const endCol = 2;

const startRow2 = 0;
const endRow2 = 1;
const startCol2 = 0;
const endCol2 = 1;

console.log(getSubMatrix(startRow, endRow, startCol, endCol, matrix2));
console.log(getSubMatrix(startRow2, endRow2, startCol2, endCol2, matrix2));
