console.log("esto es la consola 💋")

console.log('también es un string')
console.log(20)
console.log(true)
console.log(false)

let nombreUsuario = "Guiss"
console.log(nombreUsuario)

let edadUsuario = 23
console.log("mi nombre es: " + nombreUsuario + " y mi edad es " + edadUsuario)

let numeroUno = 33
let numeroDos = 55
console.log(numeroDos + numeroUno)

//-------------------------------------------------------------------------------
// let num1 = prompt("Ingrese un número 1: ")
// let num1 = parseInt(prompt("ingrese un número 1: ")) esta es otra forma también
// console.log(typeof num1) typeof es para indicar de que tipo es
// console.log(parseInt(num1));

// let num2 = prompt("Ingrese un número 2: ")
// console.log(parseInt(num2));

// let resultado = parseInt(num1) + parseInt(num2)
// console.log("El resultado es: " + resultado)

//------------------------ OPERADORES ARITMÉTICOS, RELACIONALES Y LÓGICOS--------------------------------
let resultado1 = 10+20
console.log(resultado1)

resultado1 = 30 - 20
console.log(resultado1)

resultado1 = 10*20
console.log(resultado1)

resultado1 = 100/20
console.log(resultado1)

resultado1 = 20%2
console.log(resultado1)

resultado1 = (2* (100/5)+10)
console.log(resultado1)

resultado1 = 100<20
console.log(resultado1)

resultado1 = 100>20
console.log(resultado1)

resultado1 = 100===20
console.log(resultado1)

resultado1 = 10 == "10"
console.log(resultado1)

resultado1 = 10 === "10"
console.log(resultado1)

resultado1 = 100!=20
console.log(resultado1)

resultado1 = 10 != "10"
console.log(resultado1)

resultado1 = 10 !== "10"
console.log(resultado1)

resultado1 = true && true
console.log(resultado1)

resultado1 = true && true && false
console.log(resultado1)

resultado1 = true || true || false
console.log(resultado1)

//----------------- IF ELSE-------------------
let stringUsuario = prompt('Escriba "Javascript"')
if(stringUsuario === 'Javascript'){
    console.log('Correcto')
}else{
    console.log('False')
}

let numUser = parseInt(prompt('Ingrese un número del 1 al 10'));
if(numUser <=10){
    console.log('Perfecto')
}else{
    console.log('Mal, ahí era del 1 al 10')
}

//------------- TEMPLATE STRING --------------
let opcionUser = prompt(`
    Elija una opción:
    1: Libros
    2: Películas
    3: Juegos
`)
console.log(opcionUser)

switch(opcionUser){
    case '1':
        console.log('principito')
    break;
    case '2':
        console.log('Matrix')
    break;
    case '3':
        console.log('NFS')
    break;
    default:
        console.log('Opción no válida')
    break;
}

//-------------- WHILE ----------------------
let numero = 1

while (numero <= 10){
    console.log(numero)
    numero = numero + 1 // numero ++;
}

console.log('fin numero ' + numero)


//-------------------- MATH.RANDOM ------------------------

let numeroMaquina = Math.floor(Math.random() * (10-1)) + 1;
console.log(numeroMaquina)

let vidas = 3

let numeroUser = parseInt(prompt('Adivine el número del 1 al 10'))

while(numeroMaquina !== numeroUser && vidas > 1){

    let mensaje = (numeroMaquina > numeroUser) ? 'El numeroMaquinna es mayor' : 'El numeroMaquina es menor'

    console.log('te equivocaste ' + mensaje)
    numeroUser = parseInt(prompt('Número del 1 al 10'))
    vidas --;
}

if(numeroMaquina ===numeroUser){
    console.log('Ganaste 😍')
}else{
    console.log('Perdiste 😢')
}

// ----------------------- ARRAY -----------------------

let frutas = ["plátano", "sandía", "pera"]
// console.log(frutas)
// console.log(frutas.length)

for(let i = 0; i< frutas.length; i++){
    console.log(frutas[i]);
}

//----------------------------- FOR OF -----------------------------------

for (let fruta of frutas){ //el of siempre va a funcionar con objetos iterables
    console.log(fruta);
}

let nombreUser = "Guiss"

for(let letra of nombreUser){
    console.log(letra)
}