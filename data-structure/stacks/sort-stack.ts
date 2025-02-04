/*
Tu tarea es implementar una clase que simule una pila y proporcione una función de ordenamiento. Te dan una pila de números enteros. 
El objetivo es ordenar la pila en orden descendente, de modo que el elemento con el mayor valor esté en la parte superior de la pila.

No necesitas manejar la entrada o la salida. En cambio, tu tarea es completar la función `sort()` dentro de la clase proporcionada. 
La función `sort()` debe reorganizar los elementos en la pila dada para que se ordenen en orden descendente.

**Algoritmo: Ordenar una pila**

1. Crea una pila temporal.
2. Mientras la pila de entrada NO esté vacía, haz lo siguiente:
- Extrae un elemento de la pila de entrada y almacénalo en una variable.
- Mientras la pila temporal NO esté vacía y la parte superior de la pila temporal sea mayor que la variable, sácalo de la pila temporal y empújalo a la pila de entrada.
- Empuja la variable (el elemento extraído de la pila de entrada a la pila temporal.
3. Los números ordenados ahora están en la pila temporal.
*/


class Stack<T> {
    private storage: T[] = [];
    constructor(private capacity: number = Infinity) {}
  
    push(item: T): void {
      if (this.size() === this.capacity) {
        throw new Error("Stack has reached max capacity. Cannot add more items.");
      }
      this.storage.push(item);
    }
  
    pop(): T | undefined {
      return this.storage.pop();
    }
  
    peek(): T | undefined {
      return this.storage[this.size() - 1];
    }
  
    size(): number {
      return this.storage.length;
    }
  
    isEmpty(): boolean {
      return this.size() === 0;
    }
  
    sortStack(): void {
      const temporaryStack = new Stack<T>(this.capacity);
  
      while (!this.isEmpty()) {
        const temp = this.pop();
        while (!temporaryStack.isEmpty() && temporaryStack.peek()! < temp!) {
          this.push(temporaryStack.pop()!);
        }
        temporaryStack.push(temp!);
      }
  
      while (!temporaryStack.isEmpty()) {
        this.push(temporaryStack.pop()!);
      }
    }
  }
  
  const stack = new Stack<number>();
  const numArray = [34, 3, 31, 98, 92, 23];
  stack.push(numArray[0]);
  stack.push(numArray[1]);
  stack.push(numArray[2]);
  stack.push(numArray[3]);
  stack.push(numArray[4]);
  stack.sortStack();
  console.log(stack);
  