/*
Una matriz diagonal es un tipo de matriz cuadrada donde todos los elementos fuera de la diagonal principal son cero. 
La diagonal principal de una matriz es la línea de elementos desde la esquina superior izquierda hasta la esquina inferior derecha. 
Por ejemplo, la matriz:

| 7 0 0 |
| 0 3 0 |
| 0 0 2 |

es una matriz diagonal porque todos los elementos fuera de la diagonal principal contienen ceros.

Para crear una función que verifique si una matriz dada es diagonal o no, la función debe devolver `true` si la matriz cumple con los 
criterios de tener ceros fuera de la diagonal principal y `false` en caso contrario. Esto implica iterar a través de la matriz para 
verificar que todos los elementos no diagonales sean de hecho cero.
*/

function isDiagonalMatrix(matrix: number[][]): boolean {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    // Verificar si la matriz es cuadrada
    if (rows !== cols) {
      return false;
    }
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (i !== j && matrix[i][j] !== 0) {
          return false;
        }
      }
    }
  
    return true;
  }
  
const diagonalMatrix: number[][] = [
  [4, 0, 0, 0],
  [0, 7, 0, 0],
  [0, 0, 5, 0],
  [0, 0, 0, 1]
];

console.log(isDiagonalMatrix(diagonalMatrix)) // true
