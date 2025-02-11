/*
Imagina que trabajas en una empresa de análisis de textos y tienes la tarea de encontrar la palabra que aparece con más frecuencia en una lista de cadenas. 
Las cadenas pueden contener palabras en distintos casos (mayúsculas y minúsculas), que deben tratarse como idénticas. Para lograrlo, tu gerente te ha pedido 
específicamente que utilices una tabla hash para resolver el problema de manera eficiente.
*/

class HashTable<T> {
    private table: { [key: string]: T } = {}
  
    put(key: string, value: T) {
      this.table[key] = value
    }
  
    get(key: string): T | undefined {
      return this.table[key]
    }
  
    remove(key: string) {
      delete this.table[key]
    }
  
    getTable(): { [key: string]: T } {
      return this.table
    }
  }
  
  function countWords(words: string[]): HashTable<number> {
    const hashTable = new HashTable<number>()
  
    for (const word of words) {
      const lowerCaseWord = word.toLowerCase()
      if (hashTable.get(lowerCaseWord)) {
        hashTable.put(lowerCaseWord, hashTable.get(lowerCaseWord)! + 1)
      } else {
        hashTable.put(lowerCaseWord, 1)
      }
    }
    return hashTable
  }
  
  
  function findMostCommonWord(hashTable: HashTable<number>): string {
    let mostCommon = ""
    let maxCount = 0
  
    for (const key in hashTable.getTable()) {
      const count = hashTable.getTable()[key]
      if (count > maxCount) {
        maxCount = count
        mostCommon = key
      }
    }
  
    return mostCommon
  }
  
  const words = ["dog", "cat", "dog", "dog", "cat", "bird"]
  const countWord = countWords(words)
  console.log(`The most common word is: ${findMostCommonWord(countWord)}`)