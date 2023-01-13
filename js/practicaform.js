//ALERTA Y COLORES

const formulario = document.getElementById('formulario')
const nombre = document.getElementById('nombre')
const correo = document.getElementById('correo')
const templateFormulario = document.getElementById('templateFormulario')

const alertSuccess = document.getElementById('alertSuccess')

const regNombre = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
const regCorreo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

const pintarMensajeExito = () => {
    alertSuccess.classList.remove('d-none')
    // alertSuccess.classList.add()
}
formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    // alertSuccess.classList.add('d-none')
    // console.log("Enviado")

    if (!formulario.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
    }else{
        pintarMensajeExito()
    }
    formulario.classList.add('was-validated')
    
},false)

/**otra forma de hacerlo, más larga (ej bluuweb) */

// formulario.addEventListener('submit',(e) =>{
//     e.preventDefault()
//     alertSuccess.classList.add('d-none')

//     const errores = []

//     console.log(!nombre.value.trim())//trim saca los espacios en blanco. Devuelve true si existe solo espacios


//     if(!regNombre.test(nombre.value) || !nombre.value.trim()){
//         item.classList.add('is-invalid')
//         errores.push({
//             tipo: alertName,
//             msg: "Formato no válido, solo válido letras"
//         })
//     }else{
//         nombre.classList.remove('is-invalid')
//         nombre.classList.add('is-valid')
//         alertName.classList.add('d-none')
//     }
//     if(!regCorreo.test(correo.value) || !correo.value.trim()){
//         item.classList.add('is-invalid')
//         errores.push({
//             tipo: alertEmail,
//             msg: "Email no válido"
//         })
//     }else{
//         correo.classList.remove('is-invalid')
//         correo.classList.add('is-valid')
//         alertCorreo.classList.add('d-none')
//     }

//     if(errores.length !==0){
//         pintarMensajeError(errores)
//         return
//     }

//     console.log("formulario enviado")
//     pintarMensajeExito()
// })

// const pintarMensajeError = (errores) => {
//     errores.forEach(item =>{
//         item.tipo.classList.remove('d-none')
//         item.tipo.textContent = item.msg
        
//     })
// }



  
      
    
