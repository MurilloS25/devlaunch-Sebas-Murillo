/*
Cree un programa que simule una cola de impresión. El programa debe utilizar una cola para realizar un seguimiento de los 
trabajos de impresión. El programa debe tener los siguientes métodos: addJob(job: PrintJob), que agrega un trabajo de impresión 
al final de la cola; nextJob(), que elimina y devuelve el trabajo que se encuentra al principio de la cola; numJobs(), que devuelve 
la cantidad de trabajos que hay actualmente en la cola; y printJobs(), que imprime los detalles de cada trabajo en la cola.
*/

class QueueP<T> {
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

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }

  print(): void {
    for (const item of this.items) {
      console.log(item);
    }
  }
}

type PrintJob = {
  name: string;
};

class PrinterQueue<T> {
  private queue = new QueueP<PrintJob>();

  addJob(queue: PrintJob): void {
    this.queue.enqueue(queue);
  }

  nextJob(): PrintJob | null {
    return this.queue.dequeue();
  }

  numJob(): number {
    return this.queue.size();
  }

  printJobs() {
    return this.queue.print();
  }
}

// Example usage:
const printer = new PrinterQueue();

printer.addJob({name: 'Johnny'});
printer.addJob({name: 'Ana'});
printer.addJob({name: 'Pepe'});

printer.printJobs(); // Should print details of each job

console.log(printer.nextJob()); // PrintJob { name: 'Johnny' }
console.log(printer.nextJob()); // PrintJob { name: 'Ana' }
console.log(printer.nextJob()); // PrintJob { name: 'Pepe' }
console.log(printer.nextJob()); // null