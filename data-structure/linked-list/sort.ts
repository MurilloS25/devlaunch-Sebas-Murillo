/*
Implemente un método sortList que tome una lista enlazada como entrada y ordene los elementos en orden ascendente.
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

  add(value: number):void {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode
    }
  }

  print():void{
    let current = this.head;
    while (current) {
    console.log(current.value)
      current = current!.next;
    }
  }


  sort():void {

    let current = this.head
    let array = []

    while(current){
        array.push(current.value)
        current = current.next
    }
    array.sort((a, b) => a - b)
    current = this.head
    let i = 0
    while(current){
        current.value = array[i]
        current = current.next
        i++
    }
  }
}

const linkedList = new LinkedList();

linkedList.add(1);
linkedList.add(3);
linkedList.add(2);
linkedList.add(5);
linkedList.add(6);
linkedList.add(7);
linkedList.add(4);
linkedList.add(10);
linkedList.print();
linkedList.sort()
linkedList.print();


