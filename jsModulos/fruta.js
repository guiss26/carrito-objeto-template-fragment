
// (() => {
//     const sandia = "🍉";
//     console.log(sandia);
// })();

//una forma de hacerlo
// export const sandia = "🍉"
// export function pintarPlatano(){
//     console.log("🍌")
// }

// export const frutilla = () => {
//     console.log("🍓")
// }

// export class Fruta{
//     constructor(nombre){
//         this.nombre = nombre
//     }
// }

//otra forma de hacerlo
const sandia = "🍉"

function pintarPlatano(){
    console.log("🍌")
}

const frutilla = () =>{
    console.log("🍓")
}

class Fruta{
    constructor(nombre){
        this.nombre = nombre
    }
}

export{ sandia, pintarPlatano, frutilla, Fruta }

/**export default
 * también hay un tipo de exportación llamado exportación predeterminada. Solo se permite una exportación
 * predeterminada por módulo. No necesitan nombre y tampoco se puede exportar dentro de funciones
 * Al importarlo, se puede poner cualquier nombre pero no va entre llaves
 */

// export default  manzana = "🍏" es una forma de hacerlo
// const manzana = "🍏" 
// export default manzana

export default function (){
    console.log("🍇")
}