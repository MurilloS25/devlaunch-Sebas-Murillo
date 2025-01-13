/* 
    El  Elite Fitness Center es un gimnasio boutique en Palo Alto, California,
    que ofrece membresías por $150 al mes.
    Opera de 6 AM a 10 PM, emplea a 10 entrenadores certificados
    y cuenta con comodidades como sauna, piscina y clases grupales.
*/

const gymName = "Elite Fitness Center"
const gymType = "Boutique"

const location = 'Palo Alto, California'

const price = 150
const currency = '$'
const membershipType = 'Mensualidad'


const openHour = 6
const closeHour = 22
const formatCloseHour = 22 - 12

const workingHours = `De ${openHour}AM hasta las ${formatCloseHour}PM`

const certifiedTrainers = 10


const amamenity1 = 'Sauna'
const amamenity2 = 'Piscina'
const amamenity3 = 'Clases Grupales'


console.log(`
    Gimmansio: ${gymName}\n
    Tipo: ${gymType}\n
    Horario: ${workingHours}\n
    Precio: ${currency}${price}\n
    Entrenadores: ${certifiedTrainers}\n
    Comodidades: ${amamenity1},${amamenity2},${amamenity3}
    `)