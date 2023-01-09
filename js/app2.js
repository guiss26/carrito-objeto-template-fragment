//------------- FUNCIÓN ---------------

function saludar(nombreUsuario){
    console.log('Bienvenido '+ nombreUsuario)
}

saludar("Guisse")

function saludar2(userName){
    return 'Welcome ' + userName
}
console.log(saludar2("Guisse"))


function sumar(n1,n2){
    return parseInt(n1) + parseInt(n2)
}

console.log(sumar(2,4))

// let numUno = prompt('Ingrese el primer número: ')
// let numDos = prompt('Ingrese segundo número: ')

// console.log(sumar(numUno, numDos))


//------------- INTERPOLACIÓN --------------
let nombreUsuario = "Guiss"
let estado = true
// console.log('Bienvenida: \n'+nombreUsuario)

console.log(`Bienvenida:
${nombreUsuario.toUpperCase()}
`)

console.log(`
${(estado) ? 'en línea' : 'offline'}
`)

//----- VAR VS LET VS CONST -----

var nombreUsuario1 = "guiss" //let no nos permite declarar 2veces la misma variable, pero si sobrescribirla
var nombreUsuario1 = "guissella"

console.log('-------------------------')
let nomUser = "guiss"
nomUser = "guisssss"
console.log(nomUser)

console.log(nombreUsuario1)
console.log('-------------------------')

//el scope de una variable hace referencia a lugar donde va a vivir o podrá ser accesible.
var estad = true
if(estad){
    console.log('Entró al if')
    var estad = false
}

console.log(estad)

for(let i= 0; i<10; i++){
    console.log(i)
}


const estao = true

if(estao){
    const estao = false
    console.log(estao)
}

console.log(estao)

const frutas =[]
frutas[0] = "sandía";

console.log(frutas)

const frutas1 = ["sandía","pera"];
frutas1.push("manzana") // PUSH añade un elemento o + al final de un array y devuelve una nueva longitud del array
frutas1.unshift("uva")//UNSHIFT lo añade al principio
const frutaEliminada = frutas1.pop()//POP elimina el último elemento de un array y lo devuelve
const frutaEliminada1 = frutas1.shift() //SHIFT elimina el primer elemento de un array

console.log(frutas1)
console.log(frutaEliminada)
console.log(frutaEliminada1)

console.log(" ")
console.log("---------------------------------")
//EJERCICIO
/**Crear un app que nos permita ir agregando elementos a un carrito de compras, la idea es que se use un prompt para preguntar al usuario por una
 * cantidad de elementos y lo agraguen a un carrito de compras.
*/

// const carrito = []
// let pregunta = prompt('Frutería "La mexicana", ¿qué fruta deseas comprar?: ')
// console.log(pregunta)

// if(pregunta){
//     carrito.push(pregunta)
//     console.log(carrito)

//     if(window.confirm('¿Desea comprar otro elemento?')){
//         pregunta = prompt('¿Qué fruta desea comprar?')
//         carrito.push(pregunta)
//         console.log(carrito)
//     }else{
//         window.open('exit')
//     }

// }else{
//     console.log('No se ha añadido')
// }

// console.log('estas son sus compras: ' + carrito)

console.log(" ")
console.log("--------------------------------------------------------")
//CORRECIÓN

const frutasS = []

const fruta = prompt('Frutería "La mexicana", ¿qué fruta deseas comprar?: ')

frutasS.push(fruta)

while(confirm('¿Desea agragar otro elemento al 🛒?')){
    const fruta = prompt('¿Qué fruta deseas comprar?: ')
    frutasS.push(fruta);
}

console.log('Compraste: ')
for (let fruta of frutasS){
    console.log(fruta)
}