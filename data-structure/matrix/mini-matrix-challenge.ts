/*
Esta tarea constará de dos partes. La primera sección se centra en la transposición de una matriz. En una matriz transpuesta, 
la matriz original se transforma en una nueva matriz intercambiando sus filas y columnas.

ENTRADAS
SALIDAS
matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
]
[ 1, 4, 7 ]
[ 2, 5, 8 ]
[ 3, 6, 9 ]

El segundo segmento implica la creación de una función que acepte dos matrices y calcule su suma.
ENTRADAS
SALIDAS
matriz1 = [
[2, 5, 3],
[9, 6, 8],
[7, 1, 4]
]

matriz2 = [
[2, 5, 3],
[9, 6, 8],
[7, 1, 4]
]
*/

function transposeMatrix(matrix: number[][]): number[][] {
  const newMatrix: number[][] = [];

  for (let i = 0; i < matrix[0].length; i++) {
    const newRow: number[] = [];
    for (let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    newMatrix.push(newRow);
  }

  return newMatrix;
}

function sumMatrix(matrix1: number[][], matrix2: number[][]): number[][] | null {
    if (
      matrix1.length !== matrix2.length ||
      matrix1[0].length !== matrix2[0].length
    ) {
      console.log("Las matrices deben tener el mismo tamaño.");
      return null;
    }
  
    return matrix1.map((row, i) => 
      row.map((value, j) => value + matrix2[i][j])
    );
  }
  

const matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const matriz2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(transposeMatrix(matriz));
console.log(sumMatrix(matriz, matriz2));
