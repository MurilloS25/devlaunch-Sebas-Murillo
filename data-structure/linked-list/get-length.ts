/*
En este ejercicio, debe implementar el método getLength para obtener la longitud de la lista vinculada.
*/

export {};

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

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  getLength(): number {
    let current = this.head;
    let length = 0;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
console.log(linkedList.getLength());
linkedList.print();
