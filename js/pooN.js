console.log("vinculado")

class Persona{//ventaja: todos sus métodos están en la cadena de prototipos
    constructor(nombre, edad){
        this.nombre = nombre
        this.edad = edad
    }
    
    get getNombre(){//la regla de los getters es que no reciben parámetros y siempre tienen que retornar algo
        return this.nombre
    }

    set setNombre(nombre){//los setters solo reciben un parámetro
        this.nombre = nombre
    }
    saludar(){
        return `${this.nombre} dice hola`
    }

    static probarSaludo(nombre){
        return `${nombre} probando saludo`
    }
}

console.log(Persona.probarSaludo("Nacho"))

const joseJuan = new Persona("Jose Juan")
console.log(joseJuan)
console.log(joseJuan.saludar())
// joseJuan.nombre = "lalo" mala práctica
joseJuan.setNombre = "pedritto"
console.log(joseJuan)
console.log(joseJuan.getNombre)//si llamamos a los getters y setters no van con () porque no son métodos, buenas prácticas

const pedro = new Persona("Pedrito")
console.log(pedro)

/*static
la palabra clave static define un método estático para una clase. Son llamados sin instanciar su claase y no pueden ser 
llamados mediante instancia de clase.
Son a menudo usados para crear funciones de utilidad para una aplicación */

/**HEREDAR
 * extends: se usa en declaraciones de clase o expresiones de clase para crear una clase hija.
 */

class Estudiante extends Persona {//hereda de persona

    // constructor(nombre, edad, notas = []){
    //     super(nombre, edad)//los parámetros del padre
    //     this.notas = notas 
    // }

    #notas = [] //propiedad privada

    set setNotas(nota){
        this.#notas.push(nota)
    }
    get getNotas(){
        return this.#notas
    }

    // saludar(){//Si un método tiene el mismo nombre se sobrescribe (POLIMORFISMO)
    //     return `${this.nombre} desde estudiante` 
    // }
}

const miguel = new Estudiante("Miguel",13)

miguel.setNotas = 7
miguel.setNotas = 5
miguel.setNotas = 1


console.log(miguel)
// console.log(miguel.getNotas)
console.log(miguel.saludar())

/**Private class field
 * las propiedades e la clase son públicas de forma predeterminada y se pueden examinar o modificar fuera de la
 * clase, sin embargo, existe una propuesta experimental para permitir la definición de campos de clase privados
 * utilizando un #prefijo hash
 */
