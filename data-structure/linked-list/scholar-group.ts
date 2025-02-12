/*
Imagina que estás creando una base de datos escolar y quieres almacenar información sobre los estudiantes de tu clase. 
Cada estudiante tiene un nombre y quieres poder buscar, agregar y eliminar estudiantes de la base de datos.

Para resolver este problema, podemos usar una estructura de datos llamada lista enlazada.
*/

export {}; //Solucion para que no de error de identificador duplicado

class StudentNode {
  public value: string;
  public next: StudentNode | null;
  constructor(value: string) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  public head: StudentNode | null;

  constructor() {
    this.head = null;
  }

  add(value: string): void {
    const newStudent = new StudentNode(value);
    if (!this.head) {
      this.head = newStudent;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newStudent;
    }
  }

  find(value: string): StudentNode | null {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  delete(value: string): void {
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
}

const studentList = new LinkedList();

studentList.add("Sebas");
studentList.add("Ema");
studentList.add("Luis");
studentList.print()
console.log(studentList.find('Ema'));
studentList.delete("Ema");
console.log(studentList.find('Ema'));
