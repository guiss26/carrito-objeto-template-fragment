console.log('vinculado')

const gato = {
    nombre: "valiente",  //propiedad: "valor"
    duerme: true,
    edad: 10,
    enemigos: ["agua", "perros"]
};

//Leer(read) el objeto
console.log(gato)
console.log(gato.nombre)
console.log(gato["nombre"])
console.log(gato["enemigos"][0])
console.log(gato.enemigos[0])

//------------ CRUD ------------

//Crear(create)
gato.color = "azul"
console.log(gato)

//Actualizar(update)
gato.edad = 5
console.log(gato)

//Eliminar(delete)
delete gato.duerme;
console.log(gato)

//hasOwnProperty
console.log(gato.hasOwnProperty("edad"))//para saber si un objeto tiene una propiedad
console.log(gato.hasOwnProperty("edadDos"))

if(gato.hasOwnProperty("nombre")){
    gato.nombre = "flojera" 
}
console.log(gato)

const perro = {
    nombre: "feroz",
    duerme: true,
    edad: 10,
    enemigos: ["agua","gatos"],
    otros: {
        amigos: ["fuerte","extrovertido"],
        favoritos: {
            comida: {
                frio: "leche",
                caliente: "pollo"
            }
        }
    }
};

console.log(perro)
console.log(perro.otros.favoritos.comida.frio)
console.log(perro.otros.amigos[1])

const amigos = ["fuerte","extrovertido"]

//Encadenamiento opcional
/** ? sirve para saber si esa propiedad existe o está declarada */
console.log(perro.otros.favorito?.comida.frio)

const gato1 = {//lo que hay dentro es un contexto, un scope
    nombre: "brave",
    duerme: true,
    edad: 5,
    enemigos: ["agua","perros"],
    comer: function(){
        console.log('gato comiendo')
    },
    comerDos(){
        console.log('Gato comiendo 2')
    },
    comerTres(alimento){
        console.log("gato comiendo: " + alimento);
        console.log(this)
        console.log(`
            ${this.nombre} está comiendo ${alimento}
        `);
    },
    comerCuatro: (alimento) =>{//también se puede escribit con función de flecha, pero no funcionará
        console.log(`
        ${this.nombre} está comiendo ${alimento}
        `)
    },
    listarEnemigos(){
        this.enemigos.forEach((item)=> console.log(item))
    }
};

/**Las funciones de flecha no se usa con this o super ni debe usar como método, pero si
 * se puede usar la función de flecha DENTRO de un método
 */

gato1.comer();
gato1.comerDos();
gato1.comerTres("pez");

gato1.listarEnemigos();
console.log(" ")
console.log("----------------------")

//RECORRER UN OBJETO

/** iterar: es la repetición de un segmento de código dentro de un programa de computadora.
*/

//for in

const conejo ={
    nombre: "pacheco",
    edad: 2,
    duerme: true,
    enemigos: ["águilas","galgos"]
};

for(let propiedad in conejo){
    // console.log(propiedad)
    console.log(conejo[propiedad]);
}

/** Object.values()
 * Devuelve en un array los valores de las propiedades de un objeto */

console.log(Object.values(conejo));
Object.values(conejo).forEach(item => console.log(item))

/** Destructuring Objects 
 * permite desempacar valores de arreglos o propiedades de objetos en distintas variables
*/

const nombreConejo = conejo.nombre;
console.log(nombreConejo);

const {nombre, edad, duerme} = conejo//destructuring
console.log(nombre,edad,duerme)

/**Si ya teníamos declarada una constante y que no nos de error al hacer destructuring, usaremos
 * el alias:
 * const {nombre : nombreSuperConejo, edad, duerme} = conejo;
 * console.log(nombreSuperConejo, edad, duerme);
 */


/**Por defecto: -> si nombre no exista, funciona con y sin alias
 * const {nombre: nombreSuperConejo = "sin nombre", edad} = conejo;
 * console.log(nombreSuperConejo, duerme, edad);
 */

const amigosPerros = perro.otros.amigos;
console.log(amigosPerros);

const {amigos: amigosPerro} = perro.otros;//destructuring
console.log(amigosPerro);

// const {otros: {amigos},} = perro;
// console.log(amigos)

const {amigos: amigosArray} = perro.otros;
/**Es lo mismo que hacer: 
 * const amigosArray = ["fuerte","extroverido"]
 */
// console.log(amigosArray)

// const [amigoUno, amigoDos] = amigosArray
// console.log(amigoUno)

const [aUno, aDos, aTres = "rolando"] = amigosArray;
console.log(aTres)

const cobaya ={
    nombre: "rikia",
    edad: 3,
    duerme: true,
    enemigos: ["gatos","perros"],
    comerCobaya(comida){
        return `${this.nombre} está comiendo ${comida}`;
    },
    mostrarEnemigos(){
        return this.enemigos.forEach((item) => console.log(item));
    }
}

// const comerCobaya = cobaya.comerCobaya
// console.log(comerCobaya('hierba'))

//getters y setters
/**los GETTERS no tiene parámetros y no puede haber múltiples getters para una misma
 * propiedad
 * los SETTERS tiene solo un parámetros
 */

const hamster = {
    nombre: "pepi",
    edad: 4,
    duerme: true,
    enemigos: ["águila", "gato","perro"],
    get nombreMayuscula(){
        return this.nombre.toUpperCase()
    },
    set agregarEnemigo(nuevoEnmigo){
        this.enemigos.push(nuevoEnmigo)
    }
};

console.log(hamster.nombreMayuscula);

hamster.agregarEnemigo = "Batman"
console.log(hamster)

//por valor vs por referencia
/**por valor: cuando asignamos valores primitivos (boolean, null, undefined, number,
 * string, symbol), el valor asignado es una copia del valor que estamos asignando
 * por referencia: pero cuando asignamos valores NO primitivos o complejos (Object,
 * Array y Function). js copia "la referencia*, lo que implica que no se copia el valor en
 * sí, si no una referencia a través de la cual accedemos al valor original */

let a = 'hola'
let b = a

a = "chao"//por valor
console.log(b)//por valor



let aOne = ["hola"]
let bDos = aOne

aOne.push("chao")//por referencia
console.log(bDos)

let a1 = {nombre: 'hola'};
let b1 = a1;

a1.nombre = "chao"//por referencia
console.log(b1)
