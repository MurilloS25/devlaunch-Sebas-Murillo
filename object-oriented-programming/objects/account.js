/*
Estás diseñando un sistema básico para gestionar cuentas bancarias de clientes.

Cada cuenta bancaria tendrá un identificador único, un nombre del titular, y un saldo.

Tu tarea es crear una función createAccount que genere un objeto de cuenta bancaria.

El objeto debe ser creado por medio de un function declaration, con todas las propiedades y
métodos deben estar definidos dentro de la función usando this.

Propiedades de la cuenta bancaria (dentro de la función usando this):

id: identificador único de la cuenta.
holderName: nombre del titular de la cuenta.
balance: saldo de la cuenta.

Métodos de la cuenta bancaria (dentro de la función usando this):

deposit(amount): incrementa el saldo de la cuenta.
withdraw(amount): disminuye el saldo de la cuenta si hay suficientes fondos.
transfer(toAccount, amount): transfiere fondos de la cuenta actual a otra cuenta
si hay suficientes fondos disponibles.
*/

const prompt = require("prompt-sync")();

const main = () => {
  const account = new createAccount(1, "Sebas", 100);

  const account2 = new createAccount(2, "Tony");

  account.transfer(50,account2)

  console.log(account);
  console.log(account2);
};

function createAccount(id, name, balance = 0) {
  this.id = id;
  this.holderName = name;
  this.balance = balance;

  this.deposit = (amount) => {
    return (this.balance += amount);
  };

  this.withdraw = (amount) => {
    if (this.balance > amount) {
      return (this.balance -= amount);
    }
    return null;
  };

  this.transfer = (amount, toAccount) => {

   
      const cash =  this.withdraw(amount)

      if(cash){
        toAccount.deposit(amount)
        return toAccount
      }
        
      return null
      

  };

  return this;
}

main();
