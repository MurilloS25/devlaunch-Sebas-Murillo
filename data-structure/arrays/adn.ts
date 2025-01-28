/*
En un entorno de laboratorio, los investigadores están implementando actualmente una función en línea destinada a identificar enfermedades 
genéticas en individuos. Los genetistas suelen encargarse de la tarea de buscar secuencias específicas dentro del ADN de un individuo para 
identificar mutaciones genéticas asociadas con diversos trastornos. Por ejemplo, pueden buscar secuencias de ADN distintas que se sabe que 
están correlacionadas con enfermedades genéticas.

Su objetivo es desarrollar esta función, en la que recibirá una secuencia y deberá verificar su presencia dentro de la cadena de ADN dada. 
La función debe devolver verdadero si se detecta la secuencia dentro de la cadena de ADN y falso en caso contrario.

El ADN estará representado por una cadena de caracteres, donde cada carácter denota un nucleótido (p. ej., "gtggggggtttatgcctttagaacagcag"). 
De manera similar, la secuencia que se va a comparar también estará representada como una cadena de caracteres, que representa una serie más 
corta de nucleótidos (p. ej., "gtt"). 
*/

const adn: string = "gtggggggtttatgcctttagaacagcag";

function findSubSequenceInAdn(adn: string, match: string): boolean {
  let subsequence = "";

  for (let i = 0; i <= adn.length - match.length; i++) {
    subsequence = adn.slice(i, i + match.length);
    if (subsequence === match) {
      return true;
    }
  }

  return false;
}

const hasSubsequence = findSubSequenceInAdn(adn, "tct");
const hasSubsequence2 = findSubSequenceInAdn(adn, "ggt");
console.log(`Does the sequence contain the subsequence? ${hasSubsequence}`);
console.log(`Does the sequence contain the subsequence? ${hasSubsequence2}`);
