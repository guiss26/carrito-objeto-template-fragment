const carrito = document.querySelector('#carrito')
const templateFrutas = document.querySelector('#templateFrutas')
const footer = document.querySelector('#footer')
const templateFooter = document.querySelector('#templateFooter') 
const fragment = document.createDocumentFragment()
// const btnsBotones = document.querySelectorAll('.card .btn')
const agregar = document.querySelectorAll('.card button')
 
document.addEventListener('click', (e)=>{
    // console.log(e.target.matches(".card .btn-outline-primary"))
    if(e.target.matches(".card .btn-outline-primary")){//capturamos los botones
        // console.log('ejecutar agregar al carro')
        agregarAlCarrito(e)
    }
    // console.log(e.target.matches('.list-group-item .btn-success'))
    if(e.target.matches('.list-group-item .btn-success')){
        btnAumentar(e)//para que capture lo que le hemos puesto de forma dinámica
    }

    if(e.target.matches('.list-group-item .btn-danger')){
        btnDisminuir(e)
    }
})

// const carritoObjeto = {}//Aquí almacenaremos si compramos frutilla, banana o manzana
let carritoObjeto = []

const agregarAlCarrito = (e) =>{
    // console.log(e.target.dataset.fruta)//con el dataset accedemos a lo que pusimos en data-frutilla

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    }
    // console.log(producto)

    // if(carritoObjeto.hasOwnProperty(producto.titulo)){
    //     producto.cantidad = carritoObjeto[producto.titulo].cantidad + 1 //con esto sumamos la cantidad que viene de nuestro carrito
    // }

    // carritoObjeto[producto.titulo] = producto

    // pintarCarrito(producto)


    //buscamos el indice
    const indice = carritoObjeto.findIndex((item)=> item.id === producto.id) //buscamos el indice si existe el producto
    // console.log(indice)

    if(indice === -1){//si nos devuelve -1 es que no exite el producto
        carritoObjeto.push(producto)
    }else{
        carritoObjeto[indice].cantidad ++
        // carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio
    }

    console.log(carritoObjeto)

    pintarCarrito();
}

const pintarCarrito = () =>{
    // console.log('Pintar carrito',producto)

    carrito.textContent = ""

    // Object.values(carritoObjeto).forEach(item =>{
    //     const clone = templateFrutas.content.firstElementChild.cloneNode(true)
    //     clone.querySelector('.lead').textContent = item.titulo
    //     clone.querySelector('.badge').textContent =item.cantidad

    //     fragment.appendChild(clone)
    // })

    carritoObjeto.forEach((item) => {
        // const clone = templateFrutas.content.firstElementChild.cloneNode(true)
        const clone = templateFrutas.content.cloneNode(true)
        clone.querySelector('.text-white .lead').textContent = item.titulo
        clone.querySelector('.badge').textContent = item.cantidad
        clone.querySelector('div .lead span').textContent = item.precio * item.cantidad

        clone.querySelector('.btn-success').dataset.id = item.id
        clone.querySelector('.btn-danger').dataset.id = item.id
        fragment.appendChild(clone)
    })

    carrito.appendChild(fragment)

    pintrFooter()
}

// btnsBotones.forEach((btn) => btn.addEventListener("click",agregarAlCarrito))
const pintrFooter = () =>{
    console.log('pintar footer')

    footer.textContent = ""

    const total = carritoObjeto.reduce((acc,current)=>acc + current.cantidad * current.precio, 0
    )
    console.log(total)

    const clone = templateFooter.content.cloneNode(true)
    clone.querySelector('span').textContent = total
    
    footer.appendChild(clone)
}

const btnAumentar = (e) =>{
    console.log('me diste click', e.target.dataset.id)
    carritoObjeto = carritoObjeto.map(item =>{
        if(item.id === e.target.dataset.id){
            item.cantidad ++
        }
        return item
    })
    pintarCarrito()
}

const btnDisminuir = (e) =>{
    console.log('me quitaste',e.target.dataset.id)
    carritoObjeto = carritoObjeto.filter(item=>{
        if(item.id === e.target.dataset.id){
            if(item.cantidad >0){
                item.cantidad --
                if(item.cantidad === 0) return
                return item
            }
        }else{
            return item
        }
    })
    pintarCarrito()
}