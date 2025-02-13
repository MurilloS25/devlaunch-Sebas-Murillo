/*
Implementa un método reverse que invierte la lista enlazada.
*/

class ReverseNode<T> {
  public value: T;
  public next: ReverseNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList<T> {
  public head: ReverseNode<T> | null;

  constructor() {
    this.head = null;
  }

  add(value: T): void {
    const newNode = new ReverseNode(value);
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

  find(value: T): ReverseNode<T> | null {
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

  reverse(): void {
    let current = this.head;
    let prev: ReverseNode<T> | null = null;
    let next: ReverseNode<T> | null = null;
    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next
    }

    this.head = prev
  }

}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);
linkedList.reverse();
linkedList.print();
