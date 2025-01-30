function calculateUnion(arr1: number[], arr2: number[]) {
    const unionArray: number[] = []
  
    for (const num of arr1) {
      if (!unionArray.includes(num)) {
        unionArray.push(num)
      }
    }
  
    for (const num of arr2) {
      if (!unionArray.includes(num)) {
        unionArray.push(num)
      }
    }
  
    return unionArray
  }
  

  function exclusiveNumbers(arr1: number[], arr2: number[]) {
    const exclusiveArray: number[] = []
  
    for (const num of arr1) {
      if (!arr2.includes(num) && !exclusiveArray.includes(num)) {
        exclusiveArray.push(num)
      }
    }
  
    for (const num of arr2) {
      if (!arr1.includes(num) && !exclusiveArray.includes(num)) {
        exclusiveArray.push(num)
      }
    }
  
    return exclusiveArray
  }
  
  const array1: number[] = [1, 2, 3]
  const array2: number[] = [100, 2, 1, 1]
  
  const unionArray = calculateUnion(array1, array2)
  console.log(`Union of arrays: ${unionArray}`)
  
  const exclusiveArray = exclusiveNumbers(array1, array2)
  console.log(`Numbers exclusive to one of the arrays: ${exclusiveArray}`)
  