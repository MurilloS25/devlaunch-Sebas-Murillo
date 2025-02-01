/*
En este ejercicio de codificación, se le asignará la tarea de implementar una función TypeScript que realice un seguimiento 
eficiente de los votos de los candidatos en una elección. La función utilizará una estructura de datos `Map` para almacenar 
el nombre de cada candidato como una clave y su recuento de votos correspondiente como el valor asociado. Los objetivos 
principales son facilitar la suma de votos para los candidatos y determinar el candidato con la mayor cantidad de votos.

Para lograr esto, se definirán dos funciones:

1. `addVote`: esta función tomará dos parámetros: un `Map` que representa los votos actuales y una cadena que representa el 
nombre del candidato. Incrementará el recuento de votos para el candidato especificado.
2. `findLeadingCandidate`: esta función tomará el `Map` de votos como parámetro y devolverá el nombre del candidato con la 
mayor cantidad de votos. En caso de empate, devolverá una matriz que contiene los nombres de todos los candidatos empatados. 
*/


const votes = new Map<string, number>();

function addVote(actualVotes: Map<string, number>, candidate: string) {
  if (actualVotes.has(candidate)) {
    const currentFrequency: number = actualVotes.get(candidate) || 0;
    actualVotes.set(candidate, currentFrequency + 1);
  } else {
    actualVotes.set(candidate, 1);
  }
}

function addVotes(actualVotes: Map<string, number>, candidates: string[]) {
  for (const candidate of candidates) {
    if (actualVotes.has(candidate)) {
      const currentFrequency: number = actualVotes.get(candidate) || 0;
      actualVotes.set(candidate, currentFrequency + 1);
    } else {
      actualVotes.set(candidate, 1);
    }
  }

  return actualVotes
}

function findLeadingCandidate(votes: Map<string, number>): string {
    let maxVotes = 0;
    let leadingCandidate = '';
  
    votes.forEach((voteCount, candidate) => {
      if (voteCount > maxVotes) {
        maxVotes = voteCount;
        leadingCandidate = candidate;
      } else if (voteCount === maxVotes && candidate < leadingCandidate) {
        // If there's a tie, choose the candidate with the lexicographically smaller name
        leadingCandidate = candidate;
      }
    });
  
    return leadingCandidate + ' Votes: ' + maxVotes;
  }
  
  const vote = new Map<string, number>();
  const votingRecords = ["Alice", "Alice", "Alice", "Bob", "Bob", "Charlie"];
  const voteResults = addVotes(vote, votingRecords);
  const newVotes = addVote(voteResults, 'Bob')
  console.log(findLeadingCandidate(voteResults)); 