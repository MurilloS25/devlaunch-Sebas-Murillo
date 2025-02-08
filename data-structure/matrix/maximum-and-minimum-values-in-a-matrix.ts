/*
Implementar una estructura de una clase matricial con dos métodos: encontrar el valor mínimo y el valor máximo, 
que buscan el número más pequeño y el más grande en la matriz.
*/

class Matrix {
    private matrix: number[][];
  
    constructor(matrix: number[][]) {
      if (matrix.length === 0 || matrix[0].length === 0) {
        throw new Error("La matriz no puede estar vacía");
      }
      this.matrix = matrix;
    }
  
    findMaxValue(): number {
      return Math.max(...this.matrix.flat());
    }
  
    findMinValue(): number {
      return Math.min(...this.matrix.flat());
    }
  }
  
  const values = [
    [5, 2, 8],
    [9, 1, 6],
    [7, 3, 4],
  ];
  
  const m = new Matrix(values);
  
  console.log(m.findMaxValue());
  console.log(m.findMinValue());
  