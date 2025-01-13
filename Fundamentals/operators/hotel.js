/* 
    Crea un programa en JavaScript que calcule la factura total de una persona en un hotel,
    donde cada habitación tiene un precio de $100 por noche, aprovechando una oferta promocional que incluye un descuento del 5%.

    El programa debe solicitar al huésped el númeroi de noches que pasó en el hotel para calcular la factura final.

    Si el usuario ingresa que se quedó 5 noches, la salida será $475
*/

const prompt = require('prompt-sync')()

const PRICE_PER_NIGHT = 100
const percentageOffDiscount = 0.05

const isAvaibleSale = true

const nights = parseInt(prompt('¿Cúantas noches desea hospedarse? '))

const subtotal = PRICE_PER_NIGHT * nights
let totalPrice
let discount = 0

if(isAvaibleSale){
    discount = subtotal * percentageOffDiscount
    totalPrice = subtotal - discount
}else{
    totalPrice = subtotal
}

console.log(`
    ______________________
    RECEIPT
    ______________________
    Nights: ${nights}\n
    Payment
    -Subtotal: ${subtotal}
    -Discount: ${discount}
    -Total: ${totalPrice}`

)