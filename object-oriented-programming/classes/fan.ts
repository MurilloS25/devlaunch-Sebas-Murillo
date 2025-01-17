/*
Cuando se trata de ventiladores, a menudo presentan características distintivas como configuraciones
de velocidad, tamaño, potencia medida en vatios o caballos de fuerza, tipo y color.

Para manejar y modificar adecuadamente las características de un ventilador, es útil organizarlas
en un sistema de clases. De esta manera, se obtiene una estructura clara para trabajar con las
propiedades del ventilador, facilitando la comprensión, reutilización y mantenimiento del código.

Para abordar esta tarea, crearemos una clase que encapsule los diferentes atributos de un ventilador.
Esta clase incluirá un constructor para inicializar dichos atributos y métodos como getters y setters
para acceder y modificarlos según sea necesario.

Al implementar esta estructura de clase, podremos representar y gestionar de manera eficiente las
características de los ventiladores en nuestro sistema.

Esta clase está diseñada para proporcionar todas las características esenciales del ventilador desde
el momento de su creación.

speed, FanSize, power measured in watts or horsepower, type and color
*/

type FanPowerType = "Watts" | "Horse Power";
type FanSize = | "Big" | "Medium" | "Small";
type FanType = | "Ventiladores Axiales" | "Ventiladores Centrífugos" | "Ventiladores Tangenciales";
type FanSpeed = 0 | 1 | 2 | 3

class Fan{

  private speed: FanSpeed = 0 

constructor(
  private FanSize:FanSize, 
  private FanPowerType: FanPowerType, 
  private color: string, 
  private type: FanType  
){
  this.FanSize = FanSize
  this.FanPowerType = FanPowerType
  this.color = color
  this.type = type
}

getSpeed(): FanSpeed{
  return this.speed
}

setSpeed(speed: FanSpeed){
    this.speed = speed
}

getFanPowerType(): number{
  return this.speed
}

setFanPowerType(FanPowerType: FanPowerType){ 
    this.FanPowerType += FanPowerType 
}

getFanSize(): FanSize{
  return this.FanSize
}

setFanSize(FanSize: FanSize){
    this.FanSize = FanSize
}

getColor(): string{
  return this.color
}

setColor(color: string){
    this.color = color
}

getType(): FanType{
  return this.type
}

setType(type: FanType){
    this.type = type
}

}

const f1 = new Fan("Medium", "Horse Power", "Black", "Ventiladores Axiales")
const f2 = new Fan("Big", "Watts", "Black", "Ventiladores Tangenciales")

console.log(f1)
f2.setSpeed(2)
console.log(f2)

