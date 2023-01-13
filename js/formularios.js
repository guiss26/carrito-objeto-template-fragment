//VALIDACIÓN FORMULARIOS
/**Form validation
 * antes de enviar datos al servidor, es importante asegurarse de que se completan todos los controles
 * de formularios requeridos, y en el formato correcto.
 * Esto se denomina validación de formulario en el lado del cliente y ayuda a garantizar que los datos
 * que se envían coinciden con los requisitos establecidos en los diversos controles de formulario.
 */

//CAPTURAR VALUE

/**por id */
const formulario = document.getElementById('formulario')
// const userName = document.querySelector('#userName')

/**por querySelector input */
const userName = document.querySelector("input[name= 'userName']")
const userEmail = document.querySelector("input[name= 'userEmail']")

//VALIDAR SOLO CON JS
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/ //solo caractere, válido tildes
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/ //validar email

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()//Detiene lo que hace el navegador por defecto

    // console.log("suscrito")
    // console.log(userName.value)
    // console.log(userEmail.value)

    if(!regUserName.test(userName.value) && !regUserEmail.test(userEmail.value)){
        console.log("Formato no válido")
        return
    }

    // if(!regUserEmail.test(userEmail.value)){
    //     console.log('Email no válido')
    //     return
    // }

    console.log('formulario enviado')
})

