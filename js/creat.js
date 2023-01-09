//CREATEELEMENT Y APPENDCHILD
//cómo crear un elemento

/**createElement
 * es un método que crea un elemento HTML especificado por su tagname
 */

const lista = document.querySelector('#lista')
console.log(lista)

const arrayPaises = ["Perú", "Bolivia", "Colombia"]

const fragment = document.createDocumentFragment('')


arrayPaises.forEach(pais =>{//no estaría bien hecho, no buenas prácticas tambieén tiene reflow
    const li1 = document.createElement("li")
    li1.textContent = pais
    // lista.appendChild(li1)

    const refereciaNode = fragment.firstChild //para cambiar el orden
    fragment.insertBefore(li1, refereciaNode)

    // fragment.appendChild(li1)
})

lista.appendChild(fragment)


// arrayPaises.forEach((pais) =>{//reflow 
//      lista.innerHTML += `<li>${pais}</li>`;
// });

const li = document.createElement('li')
li.textContent = "elemento desde js"
console.log(li)


/**appendChild
 * agrega un nuevo nodo al final de la lista de un elemento hijo de un elemento padre especificado
 */

lista.appendChild(li)


// for ( let pais of arrayPaises){
//     console.log(pais)
// }

/**innerHTLM
 * devuelve o establece la sintaxis HTML desccribiendo los descendientes del elemento. Al establecerse
 * se reemplaza la sintaxis HTML del elemento por la nueva
 */

// arrayPaises.forEach((pais) =>{//reflow 
//      lista.innerHTML += `<li>${pais}</li>`;
// });


/**REFLOW
 * ocurre cuando el navegador debe procesar y dibujar parte o la totalidad de una página web nuevamente,
 * como después de una actualización en un sitio interactivo.
 */

/**insertBefore 
 * para insertarun nodo anted del nodo de referencia como hijo de un nodo padre indicado
 */

