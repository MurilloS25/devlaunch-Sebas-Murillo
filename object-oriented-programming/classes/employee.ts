    /*
Horizon Innovations, una destacada empresa enfocada en el bienestar de los empleados,
está desarrollando un sistema de seguimiento de salarios que busca mantener registros
precisos de las remuneraciones de los empleados, incluyendo actualizaciones y
modificaciones salariales.

Para gestionar y manipular los datos salariales de manera eficiente, es útil encapsularlos
en un sistema de clases. Este enfoque proporciona una estructura clara y organizada para
manejar las operaciones relacionadas con los salarios, asegurando la modularidad y la
mantenibilidad del código.

Para implementar esto, crearemos una clase Employee con una variable principal llamada _salary,
que servirá como la base para todos los cálculos de salario en el sistema.

Esta clase incluirá dos métodos clave: un "getter" para recuperar el salario actual y un "setter"
para modificarlo. Es importante que el "setter" valide que el nuevo valor del salario sea positivo
ya que no se permiten salarios negativos.

Adicionalmente, se incluirá un método giveRaise para aumentar el salario en una cantidad especifica
*/



class Employee{

    constructor(
        private _salary:number, 
        public _name: string, 
        public _lastName: string
    ){
        this._salary = _salary
        this._name = _name
        this._lastName = _lastName
            
    }


    get salary(): number{
        return this._salary;
    }
    set salary(salary:number){
        if (salary >= 0){
            this._salary = salary
        }
    }
    
    giveRaise(aument:number): string{

        if (aument <= 0) return 'It is impossible receive number negatives o zero'

        this._salary += aument
        return `Your new salary is ${this._salary}`
    }

    

}


const emp1 = new Employee(100, 'Sebas', 'Murillo');
const emp2 = new Employee(0, 'Tony', 'Soto');

console.log(emp2.salary)
console.log(emp2.giveRaise(50))
console.log(emp2.giveRaise(-50))
emp1.salary = -2000
console.log(emp1.salary)