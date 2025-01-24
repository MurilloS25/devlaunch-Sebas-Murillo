/*
En este ejercicio de codificación, trabajará con datos electorales. Su tarea es leer los votos emitidos por 'n' personas, 
donde cada voto corresponde a uno de los tres candidatos, representados por los números 1, 2 o 3. Si un voto se registra como 0, 
indica un voto en blanco. Cualquier número distinto de 0, 1, 2 o 3 se considera un voto nulo.

Su programa debe calcular e informar la cantidad total de votos recibidos por cada candidato, así como el recuento combinado de votos en blanco y nulos.
*/

function countVotes(numberOfPeople: number) {
  let nullVotes: number = 0;
  let blankVotes: number = 0;
  let candidate1Votes: number = 0;
  let candidate2Votes: number = 0;
  let candidate3Votes: number = 0;
  for (let i = 1; i <= numberOfPeople; i++) {
    let vote = Math.floor(Math.random() * 5);
    if (vote === 0) {
      blankVotes += 1;
    } else if (vote === 1) {
      candidate1Votes += 1;
    } else if (vote === 2) {
      candidate2Votes += 1;
    } else if (vote === 3) {
      candidate3Votes += 1;
    } else {
      nullVotes += 1;
    }
  }

  return `Blank Votes: ${blankVotes}
Null Votes: ${nullVotes}
Candidate 1 Votes: ${candidate1Votes}
Candidate 2 Votes: ${candidate2Votes}
Candidate 3 Votes: ${candidate3Votes}`;
}

console.log(countVotes(100));

/* 
Solucion en notion

function countVotes(numberOfPeople: number): Record<string, number> {
    let voteCounts = {
      candidate1: 0,
      candidate2: 0,
      candidate3: 0,
      blank: 0,
      null: 0
    }
  
    for (let i = 0; i < numberOfPeople; i++) {
      const randomVote = Math.floor(Math.random() * 4)
  
      if (randomVote === 0) {
        voteCounts.blank++
      } else if (randomVote === 1) {
        voteCounts.candidate1++
      } else if (randomVote === 2) {
        voteCounts.candidate2++
      } else {
        voteCounts.candidate3++
      }
    }
  
    return voteCounts
  }
  
  const numPeople = 100
  const voteCounts = countVotes(numPeople)
  
  console.log("Candidate 1 Votes:", voteCounts.candidate1)
  console.log("Candidate 2 Votes:", voteCounts.candidate2)
  console.log("Candidate 3 Votes:", voteCounts.candidate3)
  console.log("Blank Votes:", voteCounts.blank)
  console.log("Null Votes:", voteCounts.null) */
