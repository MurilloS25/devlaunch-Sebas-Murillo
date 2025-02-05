/*
Implemente un programa que simule una cola de prioridad de varios niveles. La cola de prioridad debe tener las siguientes características:

De

- Cada elemento agregado a la cola tiene asignado un nivel de prioridad, donde 0 es la prioridad más alta y `n` la más baja.
- Los elementos con niveles de prioridad más altos se eliminan de la cola antes que los elementos con niveles de prioridad más bajos.
- Dentro de un nivel de prioridad, los elementos se eliminan de la cola en el orden en que se agregaron.
- La cola de prioridad debe tener los siguientes métodos:
- `enqueue(item: T, priority: number)`: que agrega un elemento a la cola con el nivel de prioridad especificado.
- `dequeue()`: que elimina y devuelve el elemento con el nivel de prioridad más alto.
- `isEmpty()`: que devuelve un booleano que indica si la cola está vacía.
*/

class PriorityQueue<T> {
    private queues: Map<number, QueuePQ<T>>;

    constructor() {
        this.queues = new Map();
    }

    enqueue(item: T, priority: number): void {
        if (!this.queues.has(priority)) {
            this.queues.set(priority, new QueuePQ<T>());
        }
        this.queues.get(priority)!.enqueue(item);
    }

    dequeue(): T | null {
        const sortedPriorities = Array.from(this.queues.keys()).sort((a, b) => a - b);
        for (const priority of sortedPriorities) {
            const queue = this.queues.get(priority)!;
            if (!queue.isEmpty()) {
                const item = queue.dequeue();
                if (queue.isEmpty()) {
                    this.queues.delete(priority);
                }
                return item;
            }
        }
        return null; 
    }

    isEmpty(): boolean {
        return Array.from(this.queues.values()).every(queue => queue.isEmpty());
    }
}

class QueuePQ<T> {
    private storage: T[] = [];

    enqueue(item: T): void {
        this.storage.push(item);
    }

    dequeue(): T | null {
        return this.storage.length > 0 ? this.storage.shift()! : null;
    }

    isEmpty(): boolean {
        return this.storage.length === 0;
    }
}

// Example usage:
const pq = new PriorityQueue<string>();
pq.enqueue("A", 0);
pq.enqueue("B", 1);
pq.enqueue("C", 2);
pq.enqueue("D", 1);
pq.enqueue("E", 0);

console.log(pq.dequeue()); // Output: "A"
console.log(pq.dequeue()); // Output: "E"
console.log(pq.dequeue()); // Output: "B"
console.log(pq.dequeue()); // Output: "D"
console.log(pq.dequeue()); // Output: "C"
console.log(pq.dequeue()); // Output: null
