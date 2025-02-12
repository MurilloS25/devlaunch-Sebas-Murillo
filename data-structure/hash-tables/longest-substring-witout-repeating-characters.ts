/*
Implemente una función llamada "longestSubstringWithoutRepeatingCharacters" que tome una cadena y encuentre 
la subcadena más larga sin caracteres repetidos. La función debe devolver la longitud de la subcadena más larga. 
Utilice una tabla hash para resolver el problema.
*/

function longestSubstringWithoutRepeatingCharacters(word: string): number {
    const lastSeen: Record<string, number> = {}
    let maxLength = 0
    let start = 0
  
    for (let i = 0; i < word.length; i++) {
      if (lastSeen[word[i]] !== undefined && lastSeen[word[i]] >= start) {
        start = lastSeen[word[i]] + 1
      }
      lastSeen[word[i]] = i
      maxLength = Math.max(maxLength, i - start + 1)
    }
  
    return maxLength
  }
  
  console.log(longestSubstringWithoutRepeatingCharacters("abcabcbb")) 
  console.log(longestSubstringWithoutRepeatingCharacters("bbbbb"))     
  console.log(longestSubstringWithoutRepeatingCharacters("pwwkew"))  