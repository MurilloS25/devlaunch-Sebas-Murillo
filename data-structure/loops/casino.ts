/*
En un casino online han implementado un nuevo juego que consiste en tirar tres dados y anotar sus valores. 
Si la suma de estos valores es mayor o igual a 10, el apostador gana 10$ y en caso contrario pierde 15$.

Pero están teniendo problemas para que el programa funcione sin problemas, porque antes hacían el programa manualmente con sentencias switch.

Por eso tu tarea es crear un sistema que utilice bucles, para que el programa sea más eficiente y flexible. 
Para probar a fondo el programa, simularás 50 personas jugando. Cada turista jugará exactamente 50 veces antes de retirarse. 
Después de que todos los turistas hayan terminado sus rondas, encuentra el resultado medio entre los 50 jugadores.

*/

class CasinoGame{
    private readonly PEOPLE_PLAYING : number = 50
    private readonly MIN_DICES_SUM : number = 10
    private readonly BETTOR_WINS_MONEY : number = 10
    private readonly BETTOR_LOSSES_MONEY : number = 15
    private readonly ROUNDS_PER_PERSON: number = 50;

    constructor(){}

    private rollDice(): number{
        return Math.floor(Math.random()*6) + 1
    }

    public playGame():number {
        let totalEarnings: number = 0
        for (let i = 0; i < this.PEOPLE_PLAYING; i++) {
            let playerMoney : number = 100
            for (let j = 0; j < this.ROUNDS_PER_PERSON; j++) {
                const dice1 = this.rollDice()
                const dice2 = this.rollDice()
                const dice3 = this.rollDice()
                
                let sum: number = dice1 + dice2 + dice3

                if (sum >= this.MIN_DICES_SUM ) {
                    playerMoney += this.BETTOR_WINS_MONEY
                }else{
                    playerMoney -= this.BETTOR_LOSSES_MONEY
                }
            }
            totalEarnings += playerMoney
        }

        return totalEarnings / this.PEOPLE_PLAYING;
    }


}


const casigoGame1 = new CasinoGame()

console.log('Average of the 50 tourists: ' + casigoGame1.playGame())