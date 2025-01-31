/*
Imaginemos un escenario de investigación criminal en el que el método para determinar al sospechoso implica el análisis de cromosomas, que 
son cadenas de 20 dígitos que contienen 0 y 1. El procedimiento de investigación es el siguiente:

1. Obtener una muestra del cromosoma del infractor, que consta de 20 caracteres.
2. Cada sospechoso se registra en un archivo, que contiene su nombre y cromosoma correspondiente.
3. En la lista de sospechosos, se busca el cromosoma más similar a la muestra obtenida del infractor.
4. La similitud entre cromosomas se determina por la cantidad de genes idénticos (caracteres) entre la muestra y el cromosoma del sospechoso.
5. Al finalizar la búsqueda, se identifica al sospechoso con el cromosoma más similar a la muestra, junto con el porcentaje de parentesco.

Su tarea es desarrollar un programa que facilite este proceso de investigación. El programa debe permitir al investigador ingresar información inicial, 
como los nombres y cromosomas de los sospechosos. Luego, debe realizar el análisis en función de un cromosoma de muestra proporcionado.

Para implementar esta funcionalidad, deberá crear tres clases:

- **Sospechoso**: esta clase representa a un sospechoso y contiene atributos para su nombre y cromosoma. También debe tener un método para imprimir los detalles del sospechoso.
- **Análisis**: esta clase administra el proceso de análisis. Tiene atributos para el cromosoma de muestra (Muestra: 00000101010101010101) y una lista de sospechosos. 
                La clase debe incluir un método llamado `guilty()` que determina el sospechoso con el cromosoma más similar a la muestra.

- **Menú**: esta clase maneja la interfaz y la interacción del usuario. Mantiene una lista de sospechosos y proporciona un menú principal con opciones para:
1. Ingresar sospechoso: permite al usuario ingresar el nombre y el cromosoma de un sospechoso.
2. Listar sospechosos: muestra los nombres y cromosomas de todos los sospechosos.
3. Realizar análisis: ejecuta el análisis cromosómico y muestra el nombre del sospechoso más similar junto con el porcentaje de parentesco.
4. Salir: finaliza el programa.

Además, el programa debe implementar el manejo y la validación de errores para garantizar la correcta entrada de datos por parte del usuario y la integridad de los mismos.
*/

/* COD HECHO POR MI

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Suspect {
  constructor(public name: string, public chromosome: string) {
    this.name = name;
    this.chromosome = chromosome;
  }

  toString() {
    console.log(`Nombre: ${this.name} Cromosoma: ${this.chromosome}`);
  }
}

class Analisis {
  private criminalChromosome: string = "110011001100";

  constructor(public suspects: Suspect[] = []) {
    this.suspects = suspects;
  }

  public guilty() {
    let cantOfSimilar: number = -1;
    let cantOfSimilar2: number = 0;
    let percentageOfSimilar: number = 0;
    let similarSuspect: Suspect | undefined;

    if (this.suspects.length <= 1) {
      console.log(
        "Se necesitan mas de dos sospechosos para realizar el analisis"
      );
    } else {
      this.suspects.forEach((suspect) => {
        cantOfSimilar2 = 0

        for (let i = 0; i < this.criminalChromosome.length; i++) {
            if (this.criminalChromosome[i] === suspect.chromosome[i]) {
                cantOfSimilar2++
            }
        }
        if(cantOfSimilar < cantOfSimilar2){
            cantOfSimilar = cantOfSimilar2
            console.log(suspect)
            similarSuspect = suspect
        }
      });
        percentageOfSimilar = (cantOfSimilar / (this.criminalChromosome.length)) * 100
        console.log(`The mos similar suspect is: ${similarSuspect?.toString() ?? "Ninguno"} with a similarity off ${percentageOfSimilar}%`)
    }
  }
}

class Menu {
  public suspects: Suspect[] = [];

  constructor() {
    this.suspects = [];
  }

  private addSuspect(): void {
    console.clear();
    const name = prompt("Digite el nombre del sospechoso: ");
    const chroomosome = prompt("Digite el cromosoma del sospechoso: ");

    const suspect = new Suspect(name, chroomosome);
    this.suspects.push(suspect);

    console.log("Sospechoso anadido correctamente");
  }

  private listSuspects() {
    console.clear();
    let string = `Lista de sospechosos:\n`;
    if (this.suspects.length === 0) {
      console.log("Aun no hay sospechoso registrados");
    } else {
      this.suspects.forEach((suspect, i) => {
        string += `${i + 1}- Nombre: ${suspect.name} | Cromosoma: ${
          suspect.chromosome
        }\n`;
      });
      console.log(string);
    }
  }

  private analisis(){
    const analisis = new Analisis(this.suspects)

    analisis.guilty()
  }

  public menu(): void {
    let option = -1;
    console.log(` 1. Ingresar sospechoso: permite al usuario ingresar el nombre y el cromosoma de un sospechoso.
            2. Listar sospechosos: muestra los nombres y cromosomas de todos los sospechosos.
            3. Realizar análisis: ejecuta el análisis cromosómico y muestra el nombre del sospechoso más similar junto con el porcentaje de parentesco.
            4. Salir: finaliza el programa.`);

    while (option !== 4) {
      option = parseInt(prompt("Que opcion desea escoger: "));
      console.clear();

      switch (option) {
        case 1:
          this.addSuspect();
          break;
        case 2:
          this.listSuspects();
          break;
        case 3:
          this.analisis()
          break;
        case 4:
          console.log("Saliendo");
          break;
        default:
          console.log(
            "Opcion invalida, por favor seleciona una opcion entre 1 y 4"
          );
      }
    }
  }
}

const menu = new Menu();
menu.menu();
*/



/* COD EN NOTION
import PromptSync from "prompt-sync"

const prompt = PromptSync()


class Suspect {
    public name: string
    public chromosome: string

    constructor(name: string, chromosome: string) {
        this.name = name
        this.chromosome = chromosome
    }

    public toString() {
        return (`
        Name: ${this.name}
        Chromosome: ${this.chromosome}`)
    }


}

class Analysis {
    public sample: string = "00000101010101010101"
    private suspects: Suspect[]
    constructor(suspects: Suspect[]) {
        this.suspects = suspects
    }


    guilty() {
        let maxSimilarity = 0
        let mostSimilarSuspect = {}
        const currentSample: string = this.sample
        function calculateSimilarity(suspect: Suspect) {
            let matchCount = 0
            for (let i = 0; i < currentSample.length; i++) {
                if (currentSample[i] === suspect.chromosome[i]) {
                    matchCount++
                }

            }
            return matchCount

        }
        const currentSuspect: Suspect[] = this.suspects
        for (let j = 0; j < currentSuspect.length; j++) {
            const similarity = calculateSimilarity(currentSuspect[j])
            if (similarity > maxSimilarity) {
                maxSimilarity = similarity;
                mostSimilarSuspect = currentSuspect[j];
            }
        }
        return (`The suspect is: ${mostSimilarSuspect} with a relationship of ${maxSimilarity * 100 / currentSample.length} % `)


    }


}


class Menu {
    public suspects: Suspect[] = []
    private prompt: string
    constructor(prompt: string) {
        this.prompt = prompt
        this.suspects = []
    }

    private enterSuspect() {
        const name: string = prompt("Name: ")
        const chromosome: string = prompt("Chromosome: ")

        const suspect = new Suspect(name, chromosome)
        return suspect
    }

    private performAnalysis() {
        if (this.suspects.length < 2) {
            console.log("Insufficient suspects for analysis.");
        }
        const analyser = new Analysis(this.suspects)
        const result = analyser.guilty()
        console.log(result)

    }

    private listSuspects() {
        if (this.suspects.length === 0 ) {
            console.log("There are no suspects to display, please enter the name and chromosome of the suspect ")
        } else console.log("List of suspects: "); {
            this.suspects.forEach(function (suspect, index) {
                console.log(`${index + 1}. Name: ${suspect.name}, Chromosome: ${suspect.chromosome}`)
            })
        }
    }

    public mainMenu() {
        let option = -1;
        while (option !== 4) {
            option = parseInt(prompt(this.prompt));
            switch (option) {
                case 1:
                    this. suspects.push(this.enterSuspect());
                    break;
                case 2:
                    this.listSuspects();
                    break;
                case 3:
                    this.performAnalysis();
                    break;
                case 4:
                    console.log("Exiting the program.");
                    break;
                default:
                    console.log("Invalid option. Please select a valid option.");
            }
        }
    }
}

const menu = new Menu("Select an option:\n1. Enter Suspect\n2. List Suspects\n3. Perform Analysis\n4. Exit  ");
menu.mainMenu();

*/


/* COD HECHO POR CHAT GPT */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

class Suspect {
  constructor(public name: string, public chromosome: string) {
    this.name = name;
    this.chromosome = chromosome;
  }

  toString(): string {
    return `Nombre: ${this.name} | Cromosoma: ${this.chromosome}`;
  }
}

class Analisis {
  private criminalChromosome: string = "00000101010101010101"; // Corregido al valor de muestra

  constructor(public suspects: Suspect[] = []) {
    this.suspects = suspects;
  }

  public guilty() {
    let maxSimilarGenes = -1;
    let similarSuspect: Suspect | undefined;
    let percentageOfSimilar = 0;

    if (this.suspects.length < 2) {
      console.log("Se necesitan más de un sospechoso para realizar el análisis");
      return;
    }

    this.suspects.forEach((suspect) => {
      let similarGenes = 0;

      for (let i = 0; i < this.criminalChromosome.length; i++) {
        if (this.criminalChromosome[i] === suspect.chromosome[i]) {
          similarGenes++;
        }
      }

      if (similarGenes > maxSimilarGenes) {
        maxSimilarGenes = similarGenes;
        similarSuspect = suspect;
      }
    });

    if (similarSuspect) {
      percentageOfSimilar = (maxSimilarGenes / this.criminalChromosome.length) * 100;
      console.log(`El sospechoso más similar es: ${similarSuspect.toString()} con una similitud del ${percentageOfSimilar.toFixed(2)}%`);
    } else {
      console.log("No se encontraron sospechosos.");
    }
  }
}

class Menu {
  public suspects: Suspect[] = [];

  constructor() {
    this.suspects = [];
  }

  private addSuspect(): void {
    console.clear();
    const name = prompt("Digite el nombre del sospechoso: ").trim();
    let chromosome = prompt("Digite el cromosoma del sospechoso (20 dígitos, 0 o 1): ").trim();

    // Validar que el cromosoma tenga 20 dígitos y solo contenga 0s y 1s
    while (!/^[01]{20}$/.test(chromosome)) {
      console.log("Cromosoma inválido. Debe tener 20 caracteres y solo 0s o 1s.");
      chromosome = prompt("Digite el cromosoma del sospechoso (20 dígitos, 0 o 1): ").trim();
    }

    const suspect = new Suspect(name, chromosome);
    this.suspects.push(suspect);
    console.log("Sospechoso añadido correctamente.");
  }

  private listSuspects() {
    console.clear();
    if (this.suspects.length === 0) {
      console.log("Aún no hay sospechosos registrados.");
    } else {
      console.log("Lista de sospechosos:");
      this.suspects.forEach((suspect, i) => {
        console.log(`${i + 1}. ${suspect.toString()}`);
      });
    }
  }

  private analisis() {
    if (this.suspects.length < 2) {
      console.log("No hay suficientes sospechosos para realizar el análisis.");
    } else {
      const analisis = new Analisis(this.suspects);
      analisis.guilty();
    }
  }

  public menu(): void {
    let option: number = -1;

    while (option !== 4) {
      console.clear();
      console.log("Menú de opciones:");
      console.log("1. Ingresar sospechoso");
      console.log("2. Listar sospechosos");
      console.log("3. Realizar análisis");
      console.log("4. Salir");

      option = parseInt(prompt("¿Qué opción deseas escoger? ").trim());

      switch (option) {
        case 1:
          this.addSuspect();
          break;
        case 2:
          this.listSuspects();
          break;
        case 3:
          this.analisis();
          break;
        case 4:
          console.log("Saliendo...");
          break;
        default:
          console.log("Opción inválida, por favor selecciona una opción entre 1 y 4.");
      }
      if (option !== 4) prompt("Presiona Enter para continuar...");
    }
  }
}

const menu = new Menu();
menu.menu();
