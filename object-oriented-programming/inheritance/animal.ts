/*
Un zoológico necesita un sistema para gestionar los animales y sus comportamientos.

Debes modelar un conjunto de clases que representen distintos tipos de animales y sus características.

Todos los animales tienen un nombre, especie y edad. Además, todos deben poder emitir un sonido
y mostrar su información básica.

Algunos animales, como los leones, pueden rugir y tienen una melena. Los elefantes pueden hacer
sonar su trompa y tienen un tamaño específico (por ejemplo, 'pequeño', 'mediano' o 'grande').

Crea una clase base Animal con las propiedades y métodos necesarios.

Extender la clase Animal para crear clases específicas como Leon y Elefante que tengan comportamientos
y propiedades particulares.
*/



class Animal {
  constructor(
    public age: number, 
    public name: string, 
    public species: string
  ) {
    this.age = age;
    this.name = name;
    this.species = species;
  }

  public makeSound(): string {
    return "";
  }

  public toString(): string {
    return `Name: ${this.name}\nSpecies: ${this.species}\nAge: ${this.age}`;
  }
}


class Lion extends Animal{

  constructor(
    age: number, 
    name: string, 
    species: string
  ) {
    super(age,name,species)
  }

  makeSound(): string {
    return 'ROAAAAAR'
  }

  print(): string {
    const info = this.toString()
    
    return `🦁:\n${info}`
  }


}

type ElephantSize = "Big" | "Medium" | "Small";
class Elephant extends Animal{

  constructor(
    age: number, 
    name: string, 
    species: string,
    private size: ElephantSize
  ) {
    super(age,name,species)
    this.size = size
  }

  makeSound(): string {
    return 'PHRRR'
  }

  print(): string {
    const info = this.toString()
    
    return `🐘:\n${info}\nSize: ${this.size}`
  }


}




const l1 = new Lion(1, "Simba", "King")
console.log(l1.print())
console.log(l1.makeSound())

const e1 = new Elephant(6, "Big Boy", "King", "Big")
console.log(e1.print())
console.log(e1.makeSound())