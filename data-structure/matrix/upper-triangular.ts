/*
Una matriz triangular superior es una matriz cuadrada en la que todos los elementos que se encuentran debajo de la diagonal 
principal son cero. Su objetivo es desarrollar una función que determine si una matriz dada tiene forma triangular superior o no.
*/

function isUpperTriangular(matrix: number[][]): boolean {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        if (matrix[i][j] !== 0) {
          return false;
        }
      }
    }
    return true;
  }
  
  const triangularMatrix = [[1, 2, 3],[0, 5, 6],[0, 0, 9]];
  
  console.log(isUpperTriangular(triangularMatrix));
  