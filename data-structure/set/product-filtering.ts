/*
Como parte de un proyecto de desarrollo de aplicaciones web cuyo objetivo es mejorar la experiencia del usuario, se le asigna una 
tarea que implica la implementación de una función de filtrado. Esta función permite a los usuarios refinar una lista de productos 
en función de sus preferencias específicas, lo que facilita una experiencia de navegación más personalizada. Se recomienda utilizar 
una interfaz de producto para garantizar una integración y una capacidad de mantenimiento perfectas.

Su objetivo es diseñar e implementar una función capaz de filtrar productos en función de las etiquetas seleccionadas. La función debe 
procesar múltiples selecciones de etiquetas y devolver solo aquellos productos que tengan todas las etiquetas elegidas. Para lograr esto 
de manera eficiente, la función utilizará la estructura de datos "Set" para comparar las etiquetas.
*/

interface ProductF {
    id: string | number
    name: string
    category: string
    tags: string[]
  }

const filterProducts = (products: ProductF[], filters: string[]): ProductF[] => {

    let productsWithTags = new Set<ProductF>()

    for(const product of products ){
        let hasAllFilters = true
        for(const filter of filters){
            if (!product.tags.includes(filter)) {
                hasAllFilters = false
                break
            }
        }
        if (hasAllFilters) {
            productsWithTags.add(product)
        }
    }

    return Array.from(productsWithTags)
}




const productsF = [
    {
      id: 1,
      name: "Apple",
      category: "Fruit",
      tags: ["Red", "Healthy", "Juicy"],
    },
    {
      id: 2,
      name: "Carrot",
      category: "Vegetable",
      tags: ["Orange", "Healthy", "Crunchy"],
    },
    {
      id: 3,
      name: "Bread",
      category: "Bakery",
      tags: ["Brown", "Carbs", "Fresh"],
    },
    {
      id: 4,
      name: "Cheese",
      category: "Dairy",
      tags: ["Yellow", "Protein", "Melty"],
    },
  ]
  
const filter = ["Healthy"]


const filteredProducts1 = filterProducts(productsF, filter)
console.log(filteredProducts1)