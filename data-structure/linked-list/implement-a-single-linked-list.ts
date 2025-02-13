/*
Implemente una lista enlazada que incluya métodos para agregar, eliminar y buscar valores. Cabe señalar que se trata de una lista enlazada simple, 
lo que significa que cada nodo solo tiene una referencia al siguiente nodo, no al anterior.
*/

export {}; //Solucion para que no de error de identificador duplicado

class Node<T> {
  public value: T;
  public next: Node<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: Node<T> | null;

  constructor() {
    this.head = null;
  }

  add(value: T): void {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  find(value: T): Node<T> | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  delete(value: T): void {
    if (!this.head) {
      return;
    }
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }
    if (current.next) {
      current.next = current.next.next;
    }
  }

}

const singleLinkedList = new LinkedList();

singleLinkedList.add(1);
singleLinkedList.add(2);
singleLinkedList.add(3);
singleLinkedList.delete(2);

const node = singleLinkedList.find(3)

console.log(node)
