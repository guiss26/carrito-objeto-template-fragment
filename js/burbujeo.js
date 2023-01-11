/**Burbujeo y la captura de eventos 
 * son dos mecanismos que describen los que sucede cuando dos controladores del mismo
 * tipo de evento se activan en un elemento
*/

/**Fase de burbuja (bubbling)
 * se propaga desde el elemento hijo hasta el padre. (comportamiento por defecto)
 */


const padre = document.querySelector('.border-primary')
const hijo = document.querySelector('.border-secondary')
const nieto = document.querySelector('.border-danger')

// padre.addEventListener('click', () =>{
//     console.log('me diste click padre')
// })

// hijo.addEventListener('click',()=>{
//     console.log('me diste click hijo')
// })

// nieto.addEventListener('click',()=>{
//     console.log('me diste click nieto')
// })

/**Fase de captura
 * se propaga desde el elemento padre hasta el hijo.
 */

// padre.addEventListener('click', () =>{
//     console.log('me diste click padre')
// },true)

// hijo.addEventListener('click',()=>{
//     console.log('me diste click hijo')
// },true)

// nieto.addEventListener('click',()=>{
//     console.log('me diste click nieto')
// },true)

/**para evitar el burbujeo o captura exite, stopPropagation
 * evita la propagación adicional del evento actual en las fases de captura y bubbling
 */

const cajitas = document.querySelectorAll('.border')

// cajitas.forEach((caja) =>{
//     caja.addEventListener('click',(e)=>{
//         e.stopPropagation()
//         console.log('me diste click caja')
//     })
// })

/**preventDefault
 * cancela el evento si este es cancelable, sin detener el resto del funcionamiento del 
 * evento, es decir, puede ser llamado de nuevo. Mayormente se ussa en formularios pero
 * también sirve para cualquier evento
 */

// const formulario = document.querySelector('form')
// formulario.addEventListener('submit', e =>{
//     console.log('me diste click')
//     e.preventDefault()
// })

// const ancla = document.querySelector('a')
// ancla.addEventListener('click', (e)=>{
//     e.preventDefault()
//     console.log('me diste click')
// })

/**Delegación de eventos
 * es un patrón para manejar eventos de manera eficiente. En lugar de agregar un detector
 * de eventos a todos y ada unos de los elementos similares, podemos agregar un dectector
 * de eventos a un elemento principal y llamar a un evento en un objetivo en particular
 * utilizando la propiedad .target del objeto de evento. Así evitamos la propagación.
 */

const container = document.querySelector('.container')
container.addEventListener('click', e =>{
    // console.log(e.target.id)

    if(e.target.id === "padre"){
        console.log('diste click al padre')
    }
    /**matches
     * comprueba si el Element sería seleccionable por el selector CSS especificado en la
     * cadena; en caso contrario, retorna false.
     */

    // console.log(e.target.matches(".border-secondary"))

    if(e.target.matches(".border-secondary")){
        console.log('diste click al hijo')
    }

    /**dataset
     * es una propiedad que en sí se puede leer, pero no escribir directamente. En su lugar,
     * todas las escrituras deben realizarse en las porpiedades individuales dentro de dataset,
     * que a su vez representan los atributos de datos.
     */

    // console.log(e.target.dataset.div)

    if(e.target.dataset.div === "divNieto"){
        console.log('le diste click al nieto')
    }
})