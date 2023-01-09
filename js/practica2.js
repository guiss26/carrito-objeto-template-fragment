console.log('vinculado')

const lista = document.querySelector('#lista');
const fragment = document.createDocumentFragment()
const liTemplate = document.querySelector('#liTemplate');//opción 3

const arrayPaises = ["Perú", "México", "Colombia"]

const clickPaises = () => console.log("me diste click")
// const clickPaises = (e) => console.log("me diste click", e.target)

//OPCIÓN 1

// arrayPaises.forEach(pais =>{
//     const li = document.createElement("li")
//     li.className = 'list'

//     const b = document.createElement('b')
//     b.textContent = "Pais: "

//     const span = document.createElement('span')
//     span.className = 'text-primary'
//     span.textContent =pais

//     li.appendChild(b)
//     li.appendChild(span)

//     fragment.appendChild(li)
// })

// lista.appendChild(fragment)


//OPCIÓN 2

// let template = ''

// arrayPaises.forEach((pais)=>{
//     template += `
//     <li class="list">
//             <b>Pais:</b>
//             <span class="text-primary">${pais}</span>
//         </li>
//     `;
// })

// lista.innerHTML = template

//OPCIÓN 3

arrayPaises.forEach(pais => {
    const clone = liTemplate.content.firstElementChild.cloneNode(true)
    clone.querySelector('span').textContent = pais

    clone.addEventListener("click", clickPaises)

    fragment.appendChild(clone)
})

lista.appendChild(fragment)

// const clone = liTemplate.content.cloneNode(true); //para clonar el liTemplate

// clone.querySelector('.text-primary').textContent = "agregué a través de un template"

// lista.appendChild(clone)

/**HTMLTemplateElement tiene una propiedad content, que es solo lectura y 
 * DocumentFragment contiene el subárbol DOM que representa la plantilla. El uso
 * directo del valor content podría provocar un comportamiento inesperado.
 */