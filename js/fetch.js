console.log("vinculado")

/**Fetch
 * Es una interfaz para hacer solicitudes AJAX en JavaScript. Es usado generalmente para hacer una solicitud a una
 * API.
 * la API fetch proporciona una interfaz para recuperar recursos (incluidos a través de la red).
 * Resultará familiar a cualquier que haya usado XMLHttpRequest, pero la nueva API ofrece un
 * conjunto de características más potentes y flexible.
 * El método fetch() toma un argumento obligatorio, la ruta de acceso al recurso que desea 
 * recuperar.
 * Devuelve una Promise que resuelve en Response a esa petición, sea o no correcta.
 * Una vez que Response es recuperada, hay varios métodos disponibles para definir cuál es el
 * contenido del cuerpo y como se debe manejar
 */

const url = "https://jsonplaceholder.typicode.com/posts/"

// fetch(url)
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((e) => console.log(e))
//     .finally(()=> console.log("finalizó"))

const findPostById = async (id) => {
    try {
        const res = await fetch(url + id)
        const post = await res.json()

        console.log(post)
    } catch (error) {
        console.log(error)
    }
}

findPostById(1)

/**API (Interfaces de Programación de Aplicaciones)
 * son contrucciones disponibles en los lenguajes de programación que permiten a los desarrolladores crear 
 * funcionalidades complejas de una manera simple. Estas abstraen el código más complejo para proveer una sintaxis
 * más fácil de usar en su lugar.
 */
/**REST
 * Cuando queremos comunicar nuestro mundo del Frontend con el Backend (por ejemplo: node.js),
 * necesitamos alguna técnica. Aquí es donde nosotros podemos construir nuestra propia API para que nuestras 
 * aplicaciones se comuniquen de manera efectiva.
 * Es un estándar para la cosntrucción de APIS, una técnica para la arquitectura de software usada para construir
 * APIs que permitan comunicar a nuestro servidor con sus clientes usando el protocolo HTTP mediante URIs lo 
 * suficientemente inteligentes para podeer satisfacer la necesidad del cliente.
 * */