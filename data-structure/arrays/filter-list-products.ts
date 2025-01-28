/* En este ejercicio de codificación, se le presenta una lista de productos y se le pide que los filtre según criterios específicos. 
Cada producto se representa como un objeto que contiene propiedades como `nombre`, `precio`, `enStock` y `categoría`. El objetivo es 
crear un programa que filtre de manera eficiente los productos según las siguientes condiciones.

En primer lugar, deberá filtrar solo los productos que se encuentran actualmente en stock. Esto implica iterar a través de la lista de 
productos y seleccionar solo aquellos con la propiedad `enStock` establecida en `true`. A continuación, el programa debe limitar aún más 
la selección filtrando los productos según su rango de precio. Específicamente, se le indica que incluya solo productos cuyo precio se 
encuentre entre 50 y 150 unidades. Nuevamente, esto requiere iterar a través de la lista y seleccionar productos que cumplan con los 
criterios de precio especificados.

Por último, el proceso de filtrado debe considerar las categorías de productos. Se le pide que incluya solo productos que pertenezcan a 
las categorías 'tecnología' o 'hogar'. Este paso implica examinar la propiedad "categoría" de cada producto y seleccionar aquellos que 
coinciden con las categorías especificadas.
*/

type Product = {
    name: string;
    price: number;
    inStock: boolean;
    category: 'technology' | 'home' | 'clothing' | 'food';
  }


const products: Product[] = 
[
{name: 'P1', price: 200, inStock: true, category: 'technology'},
{name: 'P2', price: 45, inStock: true, category: 'home'},
{name: 'P3', price: 35, inStock: false, category: 'clothing'},
{name: 'P4', price: 100, inStock: true, category: 'technology'},
{name: 'P5', price: 2, inStock: true, category: 'food'},
{name: 'P6', price: 60, inStock: true, category: 'home'}
]

const filteredProducts = products.filter(product => 
    (product.inStock && 
    (product.price >= 50 && product.price <= 150) &&
    (product.category === 'technology' || product.category === 'home')
))

console.log(filteredProducts)
console.log(products)