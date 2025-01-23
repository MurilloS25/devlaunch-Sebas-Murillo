/*
En este desafío de programación, se le asignará la tarea de desarrollar un programa JavaScript para simular un juego en línea 
que involucra a tres ranas que corren dentro de una pista de 20 metros. El juego funciona simulando el movimiento de cada rana en 
turnos consecutivos.

Durante cada turno, el programa genera una acción aleatoria para cada rana. Estas acciones incluyen que la rana permanezca inmóvil, 
salte 1 metro o salte 2 metros. El objetivo del juego es determinar cuál de las tres ranas llega primero a la línea de meta, 
completando efectivamente la pista de 20 metros.

Para lograr esto, su programa deberá rastrear la posición de cada rana a medida que avanza por la pista. El programa simulará el movimiento 
de cada rana hasta que una de ellas cruce con éxito la línea de meta. Una vez que una rana complete la carrera, el programa emitirá un mensaje 
indicando qué rana ganó la carrera.
*/

const TRACK_METERS = 20;

let frog1Position = 0;
let frog2Position = 0;
let frog3Position = 0;


function playGame():void {
  while (true) {
    frog1Position = frogMove(frog1Position);
    printPosition(1,frog1Position)
    frog2Position = frogMove(frog2Position);
    printPosition(2,frog2Position)
    frog3Position = frogMove(frog3Position);
    printPosition(3,frog3Position)

    if (frog1Position >= TRACK_METERS) {
        announceWinner(1)
        break
    } else if (frog2Position >= TRACK_METERS) {
        announceWinner(2)
        break
    } else if (frog3Position >= TRACK_METERS) {
        announceWinner(3)
        break
    }
  }
}

function frogMove(position: number) {
    return position + Math.floor(Math.random() * 3);
  }

function announceWinner(frogNumber: number): void {
    console.log(`Frog ${frogNumber} is the winner`)
  }

function printPosition(frogNumber: number, position:number): void{
    console.log(`Frog ${frogNumber} position is: ${position}`)
}


playGame()