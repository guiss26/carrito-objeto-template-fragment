console.log("vinculado")
/**MODULOS
 * llevan nuestro código a otro archivo, lo encapsulan y después traerlos para poder manejarlos de una
 * forma más ordenada
 */


/**IIFE
 * las expresiones de función ejecutadas inmmediatamente son funciones que se ejecutan tan
 * pronto como se definen. Es un patrón de diseño también conocido como función autoejecutable
 */

// (function(){//estamos declarando una función anónima que se va aejecutar a penas se lea el código
//     const fruta = "🍉";
//     console.log(fruta);
// })();

// (function() {
//     const sandia = "🍉";
//     console.log(sandia);
// })();

// const nombre = "bluuweb"

/**EXPORT E IMPORT
 * Lo primero que se debe hacer para acceder a las funciones del módulo es exportarlas, esto se hace
 * usando la declaración export.
 * Puedes exportar funciones, var, let, const. Debe ser elementos de nivel superior; no se puede 
 * usar export dentro de una función, por ejemplo.
 * Esto se conoce como exportaciones con nombre.
 */

import pintarUvas, { sandia, pintarPlatano, frutilla as fresa, Fruta } from "./fruta.js" 
import melon from "./fruta.js"

console.log(melon)

console.log(sandia)
// console.log(manzana)

const guinda = new Fruta("🍒")
console.log(guinda)
pintarPlatano()
// frutilla()
fresa()
pintarUvas()
