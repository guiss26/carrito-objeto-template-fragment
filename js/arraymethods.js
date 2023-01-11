 
/**Programación funcional 
 * se organiza el código en funciones más pequeñas y básicas que se pueden combinar para construir programas de mayor complejidad 
*/

/**Paradigma de programación es una forma de ver/interpretar y crear código de programación para resolver problemas*/

/**Paradigma Imperativo|Emperador (POO)
 * en el que el prgramador isntruye a la máquina cómo cambiar su estado, dictamos el camino a seguir a través del control de flujo.
 * Variables, funciones, if else, switch, loops(while, for, for of, for in), try catch, async await. Por lo tanto siempre utilizas programación 
 * imperativa en Javascript
 */

/**Paradigma Declarativo (funcional)
 * en el que el programador solo declara las propiedades del resultado deseado, pero no cómo calcularlo. Escribe código que hace algo (declaro lo que
 * hace) pero no es específico sobre cómo hacerlo(imperativo)
 */

/**Array methods
 * estos métodos no mutan el array original
 */

/**map
 * iterará sobre cada elemento de un array y devuelve un nuevo array que contiene los resultados
 * de llamar a la función callback en cada elemento. Esto se hace sin mutar el array original
 * 
 * TIP
 * una función de callback es una función que se pasa a otra función como un argumento, que 
 * luego se invoca dentro de la función externa para completar algún tipo de rutina o acción 
 */

const frutas = ["🍌","🍏","🍓"]

console.log(frutas)

//los objetos, array y funciones se pasan por referencia
const newArray = frutas.map((item)=>{
    return item 
})

frutas.push("🍉")
console.log(newArray)

// const newArray = frutas.map((item)=> item) es válido también


console.log(newArray)

const users = [
    {uid: 1, name: "John", age: 34},
    {uid: 2, name: "Amy", age: 20},
    {uid: 3, name: "camperCat", age: 10},
]

const names = users.map((user)=>user.name)
console.log(names)

const numeros = [1,2,3,4,5,6,7,8,9,10];

const doble = numeros.map((numero)=>numero*2)

console.log(doble)

/**filter
 * crea un nuevo array con todos los elementos que cumplan la condición implementada por la
 * función data
 */

const mayores = users.filter((user)=>user.age>30)
console.log(mayores)

const userFiltrado = users.filter((user)=>user.uid !== 3)
console.log(userFiltrado)

/** find
 * devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
 * Sirve para buscar, y para ello se pueden usar: find, some y findIndex
 */

const amy = users.find((user)=>user.uid === 2)
console.log(amy)

const {age} = users.find((user)=> user.uid === 2)
console.log(age)

/**some
 * comprueba si al menos un elemento del array cumple con las condición implementada por la 
 * función proporcionada.
 */

const existe = users.some((user)=>user.uid === 4)
console.log(existe)

/**findIndex
 * devuelve el índice del primer elemento de un array que cumpla con la función proporcionada. 
 * En el caso contrario devueleve -1.
 */

const indice = users.findIndex((user)=>user.uid === 2)
console.log(indice)
console.log(users[indice])

const indice2 = users.findIndex((user)=>user.uid === 4)
console.log(indice2)

/**slice
 * devuelve una copia de una parte del array dentro de un nuevo array empezando por inicio
 * hasta fin (fin no incluido). El array original no se modificará
 */

const arr = ["Cat", "Dog", "Tiger", "Zebra"];
//              0     [1      2]        3

const arrayNuevo = arr.slice(1,3)
console.log(arrayNuevo)

/**concat
 * se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que 
 * devuelve un nuevo array
 */

const array1 = ["a","b","c"];
const array2 = ["d","e","f"];

const array3 = array1.concat(array2)
console.log(array3)

/**spread syntax 
 * permite a un elemento iterable tal como un arreglo o cadena ser expandido(copia) en lugares donde
 * son esperados
*/

const unirArrays = [...array1,...array2]
console.log(unirArrays)

/**reduce
 * ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado
 * un único valor
 * current/valor actual
 */

const numbers = [1,2,3,4,5]
const sumarTodos = numbers.reduce((acc,current)=> acc + current)
console.log(sumarTodos)

const arrayNumbers = [
    [0,1],
    [2,3],
    [4,5],
];//si quisieramos que no esté anidado, sino en un único array

const soloNumeros = arrayNumbers.reduce(
    (acc,current)=>acc.concat(current)
)
console.log(soloNumeros)
//otra forma de hacerlo:

const arrayPlano = [].concat(...arrayNumbers);
console.log(arrayPlano)

/**otra forma es con flat
 * crea una matriz con todos los elementos de sub-array concatenados recursivamente hasta la
 * profundidad especificada
 */

const arrayPlano2 = arrayNumbers.flat();
console.log(arrayPlano2)

const arrayNum = [1,2,[3,4]]
const arrPlano = arrayNum.flat();
console.log(arrPlano)

const arrayN = [1,2,[3,4,[5,6]]];
const arrP = arrayN.flat(2)
console.log(arrayN);

/**split
 * divide un objeto de tipo String en un array, mediante un separador
 */

const cadenaMeses = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const arrayMeses = cadenaMeses.split(",")
console.log(arrayMeses)

/**join
 * une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y
 * devuelve esta cadena
 */

const nuevoTexto = arrayMeses.join("-")
console.log(nuevoTexto)

/**Separador: es una cadena usada para separar cada uno de los elementos del arreglo. El
 * separador es covertido a una cadena si es necesario. Si este se omite, los elementos del
 * arreglo son separados con una coma (",")
 */

const newText = arrayMeses.join()
console.log(newText)

/**Delegación de eventos */