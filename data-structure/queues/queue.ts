/*
Su tarea consiste en implementar una estructura de datos de cola simple utilizando una matriz. La cola debe admitir 
operaciones fundamentales, como agregar elementos al final de la cola, eliminar y devolver elementos del frente de la cola y verificar si la cola está vacía.

Debe implementar los siguientes métodos para la cola:

1. `enqueue(item: T)`: este método agrega el elemento especificado al final de la cola.
2. `dequeue()`: este método elimina y devuelve el elemento que está al frente de la cola.
3. `isEmpty()`: este método devuelve un valor booleano que indica si la cola está vacía.
*/

class Queue<T> {
    private items: T[] = []


    enqueue(item: T): void {
        this.items.push(item)
    }

    dequeue(): T | null {
        if (this.isEmpty()) { // Add validation of min size of the queue
            console.log("Empty Queue")
            return null 
        }
        return this.items.shift()!
    }

    // Checks if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0;
    }
}

const queue = new Queue<number>();

console.log("Before enqueueing: ", queue.isEmpty()); // true, queue is initially empty

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log("Dequeue: ", queue.dequeue()); // 1
console.log("Dequeue: ", queue.dequeue()); // 2
console.log("Queue empty? ", queue.isEmpty()); // false

queue.enqueue(4);
console.log("Dequeue: ", queue.dequeue()); // 3
console.log("Dequeue: ", queue.dequeue()); // 4
console.log("Queue empty? ", queue.isEmpty()); // true

// After 4 dequeues:
console.log("Dequeue: ", queue.dequeue()); // null, and prints "Attempted to dequeue from an empty queue."
console.log("Queue empty? ", queue.isEmpty()); // true