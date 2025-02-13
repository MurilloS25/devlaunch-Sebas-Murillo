/*
Implemente un método removeDuplicates que tome una lista enlazada como entrada y elimine los duplicados 
de la lista mientras preserva el orden de los elementos restantes.
*/

export {};

class Node {
  public value: number;
  public next: Node | null;

  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  public head: Node | null;

  constructor() {
    this.head = null;
  }

  add(value: number): void {
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

  print(): void {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current!.next;
    }
  }

  removeDuplicates() {
    let current = this.head;
    let prev: Node | null = null
    const num = new Map();

    while (current) {
        if (num.has(current.value)) {
            prev!.next = current.next
        }else{
            num.set(current!.value, true)
            prev = current
        }
        current = current.next
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(1);
linkedList.add(1);
linkedList.add(1);

linkedList.removeDuplicates();
linkedList.print();
