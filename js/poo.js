console.log("vinculado")

//VIEJA ESCUELA

// const estudiante ={
//     nombre: 'Juanito', //proepiedades
//     uid: 1,
//     intereses: ["Música", "Fútbol"],
//     saludar(){//métodos
//         return `${this.nombre} dice hola!`
//     }
// }


//Función constructora = Plantilla = Class
function Persona(nombre){
    this.nombre = nombre

    this.saludar = function(){//método
        return `${this.nombre} dice hola`
    }

    // this.saludarIngles = function(){
    //     return `${this.nombre} says hi`
    // }
}

Persona.prototype.saludarIngles = function(){
    return `${this.nombre} says hi`
}

const juanito = new Persona("Juanito")
console.log(juanito)
console.log(juanito.saludar())

const pedrito = new Persona("Pedrito")
console.log(pedrito)
console.log(pedrito.saludarIngles())