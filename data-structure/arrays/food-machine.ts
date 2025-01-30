/*
Imagina una máquina expendedora de alimentos que ofrece productos categorizados como tipo A, B y C. Cada producto corresponde 
a un precio específico: $270 para el tipo A, $340 para el tipo B y $390 para el tipo C. Además, la máquina expendedora acepta 
y dispensa monedas de tres denominaciones: $10, $50 y $100.

Tu tarea es desarrollar un programa que simule el funcionamiento de esta máquina expendedora. El programa debe solicitar al 
usuario que seleccione un tipo de producto (A, B o C) y luego ingrese monedas hasta alcanzar la cantidad total requerida para 
comprar el producto seleccionado. Si la cantidad ingresada excede el precio del producto elegido, el programa debe devolver 
las monedas sobrantes una por una.

Por ejemplo, si un usuario selecciona el tipo de producto A (con un precio de $270) e ingresa monedas por un total de $300, 
el programa debe devolver $30 en monedas como cambio. Si un usuario ingresa más de la cantidad requerida (por ejemplo, $350 
para el tipo de producto A), el programa debe devolver las monedas sobrantes ($80 en este caso) una por una.
*/

import PromptSync from "prompt-sync"
const prompt = PromptSync()

class VendingMachine {
  private products: { [key: string]: number } = {
    A: 270,
    B: 340,
    C: 390
  }

  private validCoins: number[] = [10, 50, 100]

  private getProductPrice(productType: string): number | undefined {
    return this.products[productType]
  }

  public purchaseProduct(productType: string): string {
    const price = this.getProductPrice(productType)
    if (price === undefined) {
      return "Invalid product type. Please select A, B, or C."
    }

    let amountPaid = 0
    while (amountPaid < price) {
      const coin = parseInt(prompt("Enter the coin: "))
      if (!this.validCoins.includes(coin)) {
        return "Invalid coin. Please insert a valid coin ($10, $50, $100)."
      }
      amountPaid += coin
      console.log(`Current amount paid: $${amountPaid}`)
    }

    if (amountPaid > price) {
      const change = amountPaid - price
      return `Your change is: $${change}`
    }
    return "Thank you for your purchase."
  }
}

const vendingMachine = new VendingMachine()
const productType = prompt("Enter the product (A, B, or C): ")
const result = vendingMachine.purchaseProduct(productType.toUpperCase()) 
console.log(result)