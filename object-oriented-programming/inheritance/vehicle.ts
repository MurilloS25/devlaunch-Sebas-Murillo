/*
Eres responsable de diseñar un sistema sencillo de gestión de vehículos para una empresa de transporte.

El sistema debe representar diferentes tipos de vehículos y sus comportamientos utilizando una estructura

Todos los vehículos tienen un emoji, marca, modelo y año de fabricación.

Los vehículos deben poder arrancar y mostrar su información.

Los coches tienen un número específico de puertas y deben poder encender el aire acondicionado.

Las motocicletas pueden tener un sidecar y deben poder hacer una acrobacia en una rueda (wheelie).

emoji, brand, model and year of manufacture.
*/

type EmojiType = "🚗" | "🏍️";

class Vehicle {
  constructor(
    protected emoji: EmojiType,
    protected brand: string,
    protected model: string,
    protected manufactureYear: number
  ) {
    this.emoji = emoji;
    this.brand = brand;
    this.model = model;
    this.manufactureYear = manufactureYear;
  }

  public startEngine(): string {
    return "RRRRRRRR";
  }

  public toString(): string {
    return `Emoji: ${this.emoji}\nBrand: ${this.brand}\nModel: ${this.model}\nYear of Manufacture: ${this.manufactureYear}`;
  }
}

type Temperature = "Hot" | "Cold";
type NumberOfDoors = 2 | 4
class Car extends Vehicle {

    public isAirOn: boolean = false
  constructor(
    emoji: EmojiType,
    brand: string,
    model: string,
    manufactureYear: number,
    private numberOfDoors: NumberOfDoors
  ) {
    super(emoji, brand, model, manufactureYear);
    this.numberOfDoors = numberOfDoors;
    this.isAirOn = false
  }

  public startAirConditioning(temperature: Temperature): string {
    this.isAirOn = true
    return `The temperature now is On and : ${temperature}`;
  }
}

class Motorcycle extends Vehicle {
  constructor(
    emoji: EmojiType,
    brand: string,
    model: string,
    manufactureYear: number,
    public sidecar: boolean
  ) {
    super(emoji, brand, model, manufactureYear);
    this.sidecar = sidecar;
  }

    startEngine(): string {
    return 'BRRR BRRRR'
  }

  public doAWheelie(): string {
    return `Now you are doing a wheelie`
  }
}


const car1 = new Car("🚗", 'Toyota', 'Hilux', 2015, 4)
console.log(car1.startEngine())
console.log(car1.toString())
console.log(car1.startAirConditioning("Cold"))

const mot1 = new Motorcycle("🏍️", 'Yamaha', 'N', 2015, false)
console.log(mot1.startEngine())
console.log(mot1.toString())
console.log(mot1.doAWheelie())

