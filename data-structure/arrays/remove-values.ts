/*
Escriba una función de JavaScript que elimine valores falsos específicos de una matriz. La función debe eliminar las ocurrencias de 'null', 
'0', '""', 'false', 'undefined' y 'NaN' de la matriz dada, dejando intactos solo los valores verdaderos restantes. Esta función debe tomar 
una matriz como entrada y devolver una nueva matriz con los valores falsos especificados eliminados.
*/

function invalidValues(array:any[]): any[]{

    const arr:any[] = []
    for (let i = 0; i < array.length; i++) {
        if(array[i]){
            arr.push(array[i])
        }
    }

    return arr
}

const mixedValues = [NaN, 0, 15, false, -22, "", undefined, 47, null, 'a simple string']

console.log(invalidValues(mixedValues))



/*
SOLUCION EXTREMANDANTE SIMPLIFICADA
const removeFalsyValues = (arr: any[]) => arr.filter(Boolean);
*/

/* 
NOTION SOLUTION 
function removeFalsyValues(arr: any[]): any[] {
  return arr.filter((item) => {
    return item !== null && 
           item !== 0 && 
           item !== "" && 
           item !== false && 
           item !== undefined && 
           !Number.isNaN(item)
  })
}

const originalArray: any[] = [NaN, 0, 15, false, -22, "", undefined, 47, null, "a simple string"]
const filteredArray: any[] = removeFalsyValues(originalArray)
console.log(filteredArray)
*/