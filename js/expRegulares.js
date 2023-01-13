console.log("Vinculado")

// EXPRESIONES REGULARES

/**Regular Expressions (no son netamente de js)
 * las expresiones regulares (a menudo llamadas RegExp o RegEx) son patrones que se
 * utilizan para hacer coincidir combinaciones de caracteres en cadenas.
 * Son un sistema para buscar, capturar o reemplazar texti utilizando patrones.
 * Estos patrones permite realizar una búsqueda de texto de una forma relativamente 
 * sencilla y abstracta, de forma que abarca una gran cantidad de posibilidades que
 * de otra forma sería imposible o muy costosa.
 * Consta de un patrón y una bandera (/patron/flags). El patrón es lo que vamos a 
 * evaluar y la bandera es como una pequeña ayuda.
 */

const regExp = /hello/i //notación literal
const regExpObjeto = new RegExp("hello","i")//notación de objeto

/** método test()
 * ejecuta la búsqueda de una ocurrencia entre una expresión regular y una cadena especificada. 
 * Devuelve true o false. Retorna true si existe una coincidencia entre la expresión regular y la 
 * cadena especidicada; de lo contrario retorna false. 
 * Use test() cuando desee saber swi existe la ocurrencia de un patrón en una cadena.
 */

console.log(regExp.test("hello"))

/**carácteres especiales
 * [] rango de caracteres. Cualquiera de los caracteresdel interior de los corchetes.
 * | Establece una alternativa: lo que está a la izq o lo que está a la derecha.
 */

const regExpr = /[ue]/i
const reguExpreObjeto = new RegExp("bluuweb","i")

console.log(regExpr.test("fejkbfew hello rhew nj uwibqw jdbu"))

const regExpres = /bluweb|bluuweb/i
const str = new RegExp("bluweb|bluuweb","i")

console.log(regExpres.test("str dsjabdkjsab bluuwe"))

//FORMDATA