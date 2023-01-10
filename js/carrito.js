const carrito = document.querySelector('#carrito')
const templateFrutas = document.querySelector('#templateFrutas')
const fragment = document.createDocumentFragment()
const btnsBotones = document.querySelectorAll('.card .btn')

const carritoObjeto = {}//Aquí almacenaremos si compramos frutilla, banana o manzana

const agregarAlCarrito = (e) =>{
    console.log(e.target.dataset.fruta)//con el dataset accedemos a lo que pusimos en data-frutilla

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }

    if(carritoObjeto.hasOwnProperty(producto.titulo)){
        producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1 //con esto sumamos la cantidad que viene de nuestro carrito
    }

    carritoObjeto[producto.titulo] = producto

    // console.log(carritoObjeto)
    pintarCarrito(producto)
}

const pintarCarrito = () =>{
    // console.log('Pintar carrito',producto)

    carrito.textContent = ""

    Object.values(carritoObjeto).forEach(item =>{
        const clone = templateFrutas.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent =item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btnsBotones.forEach(btn => btn.addEventListener("click",agregarAlCarrito))

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
