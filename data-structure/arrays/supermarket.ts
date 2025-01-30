/* 
El supermercado Python Market está llevando a cabo una promoción en colaboración con la tarjeta Raw Input, disponible para todos los clientes. 
La promoción consiste en ofrecer descuentos en compras basadas en una cantidad específica, 'n', de productos procesados ​​en la caja. Inicialmente, 
se aplica un descuento del 20 % a los primeros 'n' productos. Posteriormente, cada lote sucesivo de 'n' productos recibe un descuento que se reduce 
a la mitad con respecto al lote anterior.

Por ejemplo, si 'n = 3' y el cliente compra 11 productos, los primeros tres productos reciben un descuento del 20 %, los siguientes tres productos 
reciben un descuento del 10 %, el lote siguiente recibe un descuento del 5 % y los dos últimos productos no califican para un descuento.

Su tarea es desarrollar un programa que solicite al usuario que ingrese el valor de 'n' (la cantidad de productos) y luego ingrese los precios de 
cada producto. Después de aplicar los descuentos, el programa debe calcular y mostrar el costo total, el monto del descuento y el precio final a pagar.

Para aplicar un descuento del 20 %, puedes multiplicar el costo total por 0,2, lo que te dará el monto del descuento. Por ejemplo, si el costo total 
es de $2000, aplicar un descuento del 20 % resultaría en una deducción de $400, lo que haría que el precio final sea de $1600. Alternativamente, 
puedes multiplicar directamente el costo total por 0,8 para obtener el precio final después del descuento.
*/


import PromptSync from "prompt-sync"
const prompt = PromptSync()

function calculateDiscountedPrice(n: number, prices: number[]): void {
  let totalCost = 0
  let discount = 0
  let discountPercent = 0.2
  let count = 0

  prices.forEach(price => {
    totalCost += price
    if (count === n) {
      discountPercent /= 2
      count = 0
    }
    if (count < n) {
      discount += price * discountPercent
      count++
    }
  })

  const finalPrice = totalCost - discount

  console.log(`Total: ${totalCost.toFixed(2)}`)
  console.log(`Discount: ${discount.toFixed(2)}`)
  console.log(`Total to pay: ${finalPrice.toFixed(2)}`)
}

const numProducts = Number(prompt('Quantity of Products: '))

const prices: number[] = []

for (let i = 0; i < numProducts; i++) {
  const price = Number(prompt(`Product price ${i + 1}: `))
  prices.push(price)
}

calculateDiscountedPrice(3, prices) 