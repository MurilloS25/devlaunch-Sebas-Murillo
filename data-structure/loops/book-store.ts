/*
En una librería se está implementando un nuevo sistema para optimizar la gestión del inventario de libros, que abarca tareas como agregar nuevos libros, 
actualizar la información existente y proporcionar a los clientes detalles de los libros.

Su tarea es desarrollar un objeto que represente cada libro, con atributos esenciales como título, autor, año de publicación, número de páginas y precio. 
Además, incluya un método para imprimir sin problemas los detalles del libro en la consola. Además, construya un objeto "read-book" equipado con un método 
para ingresar información del libro a través de la consola, generando un objeto de libro completamente formado.

Para completar el sistema, cree una función de menú que permita a los usuarios ejecutar acciones clave: crear un libro nuevo, imprimir detalles del 
libro y salir del programa.
*/

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public numPages: number,
    public price: number
  ) {}

  printBookInfo(): void {
    console.log("Book Information:");
    console.log("Title:", this.title);
    console.log("Author:", this.author);
    console.log("Year:", this.year);
    console.log("Number of Pages:", this.numPages);
    console.log("Price:", this.price);
    console.log("----------------------");
  }
}

function createBook():Book{
    const title = prompt('Enter the book title: ')
    const author = prompt('Enter the book Author: ')
    const year = parseInt(prompt('Enter the book Year: '))
    const numberOfPages = parseInt(prompt('Enter the number of pages: '))
    const prices = parseInt(prompt('Enter the book price: '))

    return new Book(title,author,year,numberOfPages,prices)
}



function menu(): void {
  let book: Book | null = null;

  while (true) {
    console.log("1. Create a Book");
    console.log("2. Print Book Information");
    console.log("3. Exit");
    const option = prompt("Enter an option: ");

    switch (option) {
      case "1":
        book = createBook();
        break;
      case "2":
        if (book) {
          book.printBookInfo();
        } else {
          console.log("No book information available.");
        }
        break;
      case "3":
        return;
      default:
        console.log("Invalid option. Please try again.");
    }

    console.log("----------------------");
  }
}

menu();
