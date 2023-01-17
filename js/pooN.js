console.log("vinculado")

class Persona{//ventaja: todos sus métodos están en la cadena de prototipos
    constructor(nombre){
        this.nombre = nombre
    }

    saludar(){
        return `${this.nombre} dice hola`
    }
}

const joseJuan = new Persona("Jose Juan")
console.log(joseJuan)
console.log(joseJuan.saludar())

const pedro = new Persona("Pedrito")
console.log(pedro)