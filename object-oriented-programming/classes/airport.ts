/*
El objetivo es crear una clase Airport que modele las características y operaciones de un aeropuerto
de forma más avanzada.

Cada aeropuerto tiene:

Un nombre.
Una ubicación.
Una pista de aterrizaje (runway).
Un nivel de tráfico aéreo (bajo, medio, alto).

La clase debe incluir:
Un método changeTrafficLevel que permita cambiar el nivel de tráfico aéreo.
Un método emergencyLanding que cierre la pista de aterrizaje y marque el nivel de tráfico como alto.
Un método displayInfo que muestre el nombre del aeropuerto, la ubicación y el estado actual de la
pista y el nivel de tráfico.

Crea una instancia de la clase Airport y demuestra el uso de estos métodos con disti
*/

type AirTraffic = "Low" | "Medium" | "High"
type RunwayStatus = "Open" | "Close"

class Airport{

  public runwayStatus:RunwayStatus
  public airTraffic: AirTraffic

    constructor(
      public name: string, 
      public ubication: string, 
    ){
      this.name = name
      this.ubication = ubication
      this.runwayStatus = "Open"
      this.airTraffic = "Low"
    }


    public changeTrafficLevel(trafficLevel:AirTraffic) {
      this.airTraffic = trafficLevel
    }

    public emergencyLanding(){
      this.runwayStatus = "Close"
      this.airTraffic = "High"
    }

    public displayInfo():string{
      return `
      Airport Name: ${this.name}
      Airport Ubication: ${this.ubication}
      Runway: ${this.runwayStatus}
      Air Traffic Level: ${this.airTraffic}
      `
    }

}

const aiport1 = new Airport("Juan Santamaria", "Alajuela, Costa Rica")

console.log(aiport1.displayInfo())
aiport1.changeTrafficLevel("Medium")
console.log(aiport1.displayInfo())
aiport1.emergencyLanding()
console.log(aiport1.displayInfo())