/*
Cree un programa que simule un sistema de cajero bancario simple. El programa debe usar una cola para llevar un registro de los 
clientes que esperan en la cola. El programa debe tener los siguientes métodos: addCustomer(customer: Customer), que agrega un 
cliente al final de la cola; nextCustomer(), que elimina y devuelve el cliente que está al principio de la cola; y numCustomers(), 
que devuelve la cantidad de clientes que se encuentran actualmente en la cola.
*/

class QueueB<T> {
    private items: T[] = [];
  
    enqueue(item: T): void {
      this.items.push(item);
    }
  
    dequeue(): T | null {
      if (this.isEmpty()) {
        return null;
      }
      return this.items.shift()!;
    }
  
    // Checks if the queue is empty
    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    // Returns the number of items currently in the queue
    size(): number {
      return this.items.length;
    }
  }


type Customer = {
    name: string;
};

class BankTeller<T> {
    private customers = new QueueB<Customer>()


    addCustomer(customer: Customer): void {
        this.customers.enqueue(customer)
    }

    nextCustomer(): Customer | null {
        return this.customers.dequeue()
    }

    numCustomers(): number{
        return this.customers.size()
    }
}


const bank = new BankTeller()

const customer1: Customer = {name: 'Sebas'}
const customer2: Customer = {name: 'Luis'}
const customer3: Customer = {name: 'Ema'}

bank.addCustomer(customer1);

console.log(`Num of costumers: ${bank.numCustomers()}`)

bank.addCustomer(customer2);
bank.addCustomer(customer3);

console.log(bank.nextCustomer())

console.log(`Num of costumers: ${bank.numCustomers()}`)

console.log(bank.nextCustomer())
console.log(bank.nextCustomer())
console.log(bank.nextCustomer())

