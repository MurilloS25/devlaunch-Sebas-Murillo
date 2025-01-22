/* 
En este ejercicio de codificación, se le pide que cree un programa que imprima números del 1 al 50, 
clasificando cada número como par o impar. 

Para lograrlo, desarrollará una función que itere a través de los números del 1 al 50, verificando 
cada uno para determinar si es divisible por 2. 

Si un número es divisible por 2, se clasifica como par, y si no es divisible por 2, se clasifica como impar.
*/


class classifyNumbers{

private ODD_MESSAGE = "odd"
private EVEN_MESSAGE = "even"

    constructor(){}

    public evenOrOddNumber(numberToReach: number): string{
        let message = ``
        for (let i = 1; i <= numberToReach; i++) {
          message += i % 2 == 0 ?  `${i} is ${this.EVEN_MESSAGE}\n` : `${i} is ${this.ODD_MESSAGE}\n`   
        }
        return message
    }


}

const classifyNumbers1 = new classifyNumbers()

console.log(classifyNumbers1.evenOrOddNumber(10))