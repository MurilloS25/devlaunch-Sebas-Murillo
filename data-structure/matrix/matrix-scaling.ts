/*
Para escalar una matriz, hay que multiplicar cada elemento de la matriz 2D por un valor escalar y luego devolver la matriz con los valores escalados. 
Por ejemplo, para escalar una matriz por un factor de 2, se multiplicaría cada valor de la matriz por 2.
*/

function scaleMatrix(matrix: number[][], scalar: number): number[][] {
    const scaledMatrix: number[][] = [];
  
    for (let i = 0; i < matrix.length; i++) {
      const newRow: number[] = [];
      for (let j = 0; j < matrix[0].length; j++) {
        newRow.push(matrix[i][j] * scalar);
      }
      scaledMatrix.push(newRow);
    }
  
    return scaledMatrix;
  }
  
  // Test the function
  const matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const scaling = 2;
  
  const scaledMatrix = scaleMatrix(matrix1, scaling);
  console.log(scaledMatrix)