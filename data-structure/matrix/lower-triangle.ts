/*
Una matriz triangular inferior es aquella en la que todos los valores por encima de la diagonal principal son cero. 
Su objetivo es desarrollar una función que determine si una matriz tiene forma triangular inferior o no.
*/

function isLowerTriangle(matrix: number[][]): boolean {
    if (matrix.length === 0 || matrix.length !== matrix[0].length) {
      console.log("La matriz debe ser cuadrada y no estar vacía");
      return false;
    }
  
    for (let i = 0; i < matrix.length; i++) {  // Filas
      for (let j = i + 1; j < matrix.length; j++) {  // Columnas (por encima de la diagonal)
        if (matrix[i][j] !== 0) {
          return false;  // No es triangular inferior
        }
      }
    }
  
    return true;  // Es triangular inferior
  }
  
  // Ejemplo de matriz triangular inferior
  const lowerMatrix = [
    [1, 0, 0, 0],
    [1, 4, 0, 0],
    [4, 6, 2, 0],
    [1, 4, 7, 6]
  ];
  
  console.log(isLowerTriangle(lowerMatrix)); // ✅ Debería devolver true
  