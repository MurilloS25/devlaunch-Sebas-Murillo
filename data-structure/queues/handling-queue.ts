/*
Al implementar una cola en TypeScript, un desafío común es manejar situaciones en las que la cola encuentra desbordamiento (excediendo su capacidad) 
o desbordamiento insuficiente (intentando eliminar elementos de una cola vacía).

Un enfoque para resolver este problema es incorporar verificaciones dentro de los métodos `enqueue` y `dequeue` para evitar desbordamientos o desbordamientos 
insuficientes. Por ejemplo, antes de agregar un elemento a la cola, puede verificar si la cola ya está llena. Si lo está, puede responder devolviendo un 
mensaje de error o lanzando una excepción para indicar la condición de desbordamiento. De manera similar, antes de eliminar un elemento de la cola, puede 
verificar si está vacío. Si la cola está vacía, puede devolver un error o lanzar una excepción para indicar la condición de desbordamiento insuficiente.
*/

class Queue<T> {
    private items: T[] = []
    private maxSize: number

    constructor(maxSize: number) {
        this.maxSize = maxSize
    }

    enqueue(item: T): void {
        if (this.items.length === this.maxSize) { // Add validation for max size of the queue
            return console.log("Queue overflow")
        }
        this.items.push(item)
    }

    dequeue(): void {
        if (this.items.length === 0) { // Add validation of min size of the queue
            return console.log("Queue underflow")
        }
        this.items.shift()
    }
}

const queue = new Queue<number>(5)
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.enqueue(6) // Validation avoids this record to be added

queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue()
queue.dequeue() // Validation avoids more actions since the queue is already empty