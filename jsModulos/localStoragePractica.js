console.log("vinculado")

const alert = document.querySelector('.alert')

const formulario = document.getElementById('formulario')
const pintarToDo = document.getElementById('pintarToDo')
const templateTodo = document.getElementById('templateTodo').content

let todos = []


const agregarTodo = todo =>{
    const objetoTodo = {
        nombre: todo,
        id: `${Date.now()}`
    }

    todos.push(objetoTodo)
}

const pintarToDos = () =>{

    localStorage.setItem('todos', JSON.stringify(todos))
    pintarToDo.textContent = ""

    const fragment = document.createDocumentFragment()

    todos.forEach((item) =>{
        const clone = templateTodo.cloneNode(true)
        clone.querySelector('.lead').textContent = item.nombre

        clone.querySelector('.btn-danger').dataset.id = item.id

        fragment.appendChild(clone)
    })
    pintarToDo.appendChild(fragment)
}


document.addEventListener('click', e =>{//delegación de eventos
    // console.log(e.target.dataset.id) //va a ser como nosotros accedemos
    // console.log(e.target.dataset)
    // console.log(e.target.matches('.btn-danger'))

    if(e.target.matches('.btn-danger')){
        // console.log('diste click al boton eliminar')
        todos = todos.filter(item => item.id !== e.target.dataset.id)
        pintarToDos()
    }
}) 

formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    alert.classList.add('d-none')

    const data = new FormData(formulario)
    const [todo] = [...data.values()]//esto nos devolverá un array de los elementos de los valores que contengan sus elementos de los inputs
    // console.log(todo)

    // console.log(!todo.trim())

    if(!todo.trim()){
        console.log("te equivocaste, mandaste vacío")
        alert.classList.remove('d-none')
        return//para que siga con nuestro código
    }

    agregarTodo(todo)
    pintarToDos()
})

document.addEventListener('DOMContentLoaded', (e)=>{//el addEventListener se activa cuando carga el DOM
    if(localStorage.getItem('todos')){
        todos = JSON.parse(localStorage.getItem('todos'))
        pintarToDos()
    }
})