//FORM DATA
/**Proporciona una manera sencilla de construir un conjunto de parejas clve/valor que representan los campos
 * de un formulario y sus valores, que pueden ser enviados fácilmente. Están destinados principalmente para
 * el envío de los datos del formulario, pero se pueden utilizar de forma independiente con el fin de transmitir
 * los datos tecleados.
 */

/**FormData.get()
 * devuelve el primer valor asociado con una clave dada en un objeto FormData
 */

/**FormData.entries()
 * devuelve un iterator que permite recorrer todas las parejas clave/valor contenidas en este objeto.
 */
/**FormData.values()
 * devuelve un iterator que permite recorrer todos los valores contenidos en este objeto
 */


const formulario = document.getElementById('formulario')

formulario.addEventListener('click', (e) =>{
    e.preventDefault()

    const inputs = new FormData(formulario)

    for(let item of inputs){
        console.log(item)
    }

    console.log(inputs.get("nombre"))
    console.log(inputs.get("correo"))

    console.log("procesando formulario")
})