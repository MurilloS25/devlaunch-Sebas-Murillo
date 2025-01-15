/*
Un triángulo, una forma geométrica fundamental, es un polígono caracterizado por tener tres lados
y tres vértices. De acuerdo con el teorema de la desigualdad del triángulo, en cualquier triángulo
válido, la suma de las longitudes de dos lados cualesquiera debe ser mayor que la longitud del
tercer lado.

Tu tarea es crear un objeto que represente un triángulo.

Este objeto debe tener tres propiedades, cada una correspondiente a uno de sus lados.

Además, se requiere una función para validar si los lados dados cumplen con el teorema de la
desigualdad del triángulo.

Por ejemplo, considera un triángulo con longitudes de lados: a = 7, b = 10, y c = 5.

Para determinar si estos lados forman un triángulo válido, evaluamos si la suma de cada par de
lados es mayor que la longitud del lado restante.

En este caso, verificamos si (b + c) > a, (a + c) > b, y (a + b) > c.

Si se cumplen las tres condiciones, entonces los lados efectivamente forman un triángulo.
*/

function main() {
  const triangle = {
    a: 1,
    b: 1,
    c: 3,
  };

  console.log(isValidTriangle(triangle));
}

function isValidTriangle(triangle) {

    const {a,b,c} = triangle
    //if (((triangle.b + triangle.c) > triangle.a) && ((triangle.a + triangle.c) > triangle.b) &&  ((triangle.a + triangle.b) > triangle.c)) return 'Is a Valid Triangle'

    if (((b + c) > a) && ((a + c) > b) &&  ((a + b) > c)) return 'Is a Valid Triangle'


    return 'Is not a valid triangle'
}


main()