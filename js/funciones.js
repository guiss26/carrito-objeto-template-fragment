//FUNCIONES DECLARATIVAS
function numeroAleatorio( min,max){
    return Math.floor(Math.random()*(max-min)+min)
}

console.log(numeroAleatorio(10,21))

//FUNCIONES EXPRESADAS, la guardamos en una variable
const numAzar = function(min, max){
    return Math.floor(Math.random()*(max-min)+min)
}

console.log(numAzar(100,201))

//FUNCIONES DE FLECHA, se pueden tener atajos
/** ------------ Limitaciones: --------------
 * No se puede acceder ni a this ni a super
 */


// const azarFlecha = (min, max) =>{
//     return Math.floor(Math.random()*(max-min)+min)
// };

// const azarFlecha = (min, max) => Math.floor(Math.random()*(max-min))+min;
// console.log(azarFlecha(1,11))

// const azarFlecha = (max) => Math.floor(Math.random()*(max-1))+1;
// console.log(azarFlecha(11))

const azarFlecha = (min = 1, max = 100) => Math.floor(Math.random()*(max-min));
console.log(azarFlecha(11))//se sustituirá por el primer parámetro
console.log(azarFlecha(null,50))//si queremos que se sustituta solo el segundo parámetro, en el primero añadimos null

//ARROW Y FOREACH()

const frutasS = []

const fruta = prompt('Frutería "La mexicana", ¿qué fruta deseas comprar?: ')

frutasS.push(fruta)

while(confirm('¿Desea agragar otro elemento al 🛒?')){
    const fruta = prompt('¿Qué fruta deseas comprar?: ')
    frutasS.push(fruta);
}

console.log('Compraste: ')
// for (let fruta of frutasS){
//     console.log(fruta)
// }   

frutasS.forEach( (fruta) => console.log(fruta)) //fruta es el parámetro

let fruts = ["manzana", "sandía","pera"]

fruts.forEach((frut, index, array) => {
    console.log(`${index}: ${frut} `)
    console.log(array)
})