/*
Estás creando un sitio web para una tienda con una amplia gama de productos y un gran inventario. Para ayudar a los clientes 
a encontrar productos rápidamente, estás creando una función de búsqueda rápida. Para ello, debes utilizar una tabla hash con 
el objetivo de acelerar la búsqueda de los artículos que desean entre la amplia selección de la tienda.
*/

class ProductI {
    constructor(
      public id: string,
      public name: string,
      public description: string,
      public price: number
    ) {}
  }
 
  class HashTableI {
    private data: { [key: string]: ProductI } = {}
  
    put(key: string, value: ProductI): void {
      this.data[key] = value;
    }
  
    get(key: string): ProductI | null {
      return this.data[key] || null;
    }
  
    delete(key: string): void {
      delete this.data[key]
    }
  
    search(query: string): ProductI[] {
      const results: ProductI[] = []
      const lowerCaseQuery = query.toLowerCase()
      
      for (const key in this.data) {
        const product = this.data[key]
        if (
          product.name.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery)
        ) {
          results.push(product)
        }
      }
      return results
    }
  }
  
  const table = new HashTableI()
  table.put('1', new ProductI('1', 'iPhone', 'A phone made by Apple', 699))
  table.put('2', new ProductI('2', 'Pixel', 'A phone made by Google', 649))
  table.put('3', new ProductI('3', 'Galaxy', 'A phone made by Samsung', 599))
  
  console.log(table.get('1'))
  console.log(table.get('2'))
  console.log(table.get('3'))
  console.log(table.search('Apple'))
  