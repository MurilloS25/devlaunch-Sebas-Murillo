/* 
    Voy al supermercado GreenCenter para hacer mis compras habituales y 
    planeo comprar manzanas y naranjas.
    Cuando estoy allí, veo que no hay plátanos ni uvas, así que cambio un poco mi lista.
    Veo que 3 cajeros están trabajando, así que me preparo para pagar.
    Mis cosas cuestan $100 en total.
    Entrego $150 en efectivo y recibo $50 de cambio.
*/

const supermarket = 'Green Center'

const fruit1 = 'Manzanas'
const fruit2 = 'Naranjas'

areBananasAvaible = false
areGrapesAvaible = false

const fruit3 = 'Plátanos'
const fruit4 = 'Uvas'

const list = `Lista\n-${fruit1}\n-${fruit2}\n-${fruit3}\n-${fruit4}`

const cajeros = 3

const price = 100
const purchase = 150
const changeDollars = 50

const currency = '$'


console.log(`
    Supermercado: ${supermarket}\n
    Lista: ${list}\n
    Precio: ${currency}${price}\n
    Pago con: ${currency}${purchase}\n
    Vuelto: ${currency}${changeDollars}\n
    `)