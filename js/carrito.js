const carrito = document.querySelector('#carrito')
const templateFrutas = document.querySelector('#templateFrutas')
const fragment = document.createDocumentFragment()
const btnsBotones = document.querySelectorAll('.card .btn')
const agregar = document.querySelectorAll('.card button')


// const carritoObjeto = {}//Aquí almacenaremos si compramos frutilla, banana o manzana
const carritoObjeto = []

const agregarAlCarrito = (e) =>{
    console.log(e.target.dataset.fruta)//con el dataset accedemos a lo que pusimos en data-frutilla

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    }

    // if(carritoObjeto.hasOwnProperty(producto.titulo)){
    //     producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1 //con esto sumamos la cantidad que viene de nuestro carrito
    // }

    // carritoObjeto[producto.titulo] = producto

    // pintarCarrito(producto)


    //buscamos el indice
    const indice = carritoObjeto.findIndex((item)=> item.id === producto.id)
    console.log(indice)

    if(indice === -1){
        carritoObjeto.push(producto)
    }else{
        carritoObjeto[indice].cantidad ++
    }

    console.log(carritoObjeto)

    pintarCarrito(carritoObjeto);
}

const pintarCarrito = (array) =>{
    // console.log('Pintar carrito',producto)

    carrito.textContent = ""

    // Object.values(carritoObjeto).forEach(item =>{
    //     const clone = templateFrutas.content.firstElementChild.cloneNode(true)
    //     clone.querySelector('.lead').textContent = item.titulo
    //     clone.querySelector('.badge').textContent =item.cantidad

    //     fragment.appendChild(clone)
    // })

    array.forEach((item) => {
        const clone = templateFrutas.content.firstElementChild.cloneNode(true)
        clone.querySelector('.lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad

        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)
}

btnsBotones.forEach((btn) => btn.addEventListener("click",agregarAlCarrito))

