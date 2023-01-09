console.log('vinculado')
/**DOM: la interfaz Document representa cualquier página web cargada en el navegador 
 * y sirve como punto de entrada al contenido de la página (El árbol DOM)
 */

console.log(document)
console.log(document.head);
console.log(document.title)

//getElementById : devuelve una referencia al elemento por su ID
console.log(document.getElementById("tituloWeb"))
console.log(document.getElementById("tituloWeb").textContent);//textContent muestra el contenido del elemento seleccionado
console.log(document.getElementById("tituloWeb").innerHTML);//es similar al textContent, pero nos permite insertar código HTML

document.addEventListener("DOMContentLoaded", () => { //si ponemos el script dentro del head
    // console.log(document.getElementById("tituloWeb"))
    // console.log(document.getElementById("tituloWeb").textContent);
})/**El navegador HTML está completamente
cargado y el árbol DOM está construido, pero es posible que los recursos externos como
<img> y hojas de estilo aún no se hayan cargado. */

/**defer : este atributo indica al navegador que no espere por el script. En lugar de
 * ello, debe seguir procesando el HTML, construir el DOM. El script carga "en segundo
 * plano" y se ejecuta cuando el DOM esta completo.
 * No funciona con todos los navegadores.
 */


/**querySelector : Devuelve el primer elemento del documento que coincida con el grupo
 * especificado de selectores.
 */
console.log(document.querySelector("h1"))
console.log(document.querySelector(".text-primary"))
console.log(document.querySelector("#tituloWeb"));

console.log(document.querySelectorAll(".text-danger"));//para seleccionar todos los que tengan esa clase

console.log(document.querySelectorAll(".container .text-danger"));

const h1 = document.getElementById("tituloWeb")

console.log(h1.className)
//las propiedades no llevan paréntesis, los métodos sí
console.log(h1.id)
console.log(h1.style)
console.log(h1.tagName)
console.log(h1.textContent)

h1.textContent = "nuevo texto desde js"
h1.style.backgroundColor = "red"
h1.style.color = "white"

/**La interacción con los usuarios se consigue mediante la captura de los eventos que este 
 * produce. Un evetno es una acción del usuario ante la cual puede realizarse algún proceso
 * (por ej: cambiar del valor de un formulario, o la pulsación de un enlace.)
 */


// h1.addEventListener()
const boton = document.querySelector(".btn-primary")
console.log(boton)

boton.addEventListener("click", () =>{
    console.log('me diste click')
    h1.textContent = "texto desde js"
    h1.style.color = "black"
})