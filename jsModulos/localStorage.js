console.log("vinculado")

/**LOCALSTORAGE
 * permite guardar datos en el navegador.
 * Los datos persisten almacenados entre de las diferentes sesiones de navegación. Es similar a 
 * sessionStorage. La única diferencia es que, mientras los datos almacenados en localStorage no 
 * tienen fecha de expiración, loa datos almacenados en SessionStorage son eliminadoas cuando finaliza 
 * la sesion del navegación - lo cual ocurre cuando se cierra la página. Las claves y los valores son
 * siempre cadenas de texto (string).
 */

//guardar
// localStorage.setItem('sandia', '🍉')
// localStorage.setItem('platano','🍌')

//obtener
// console.log(localStorage.getItem("platano")) una forma de hacerlo

//eliminar
// localStorage.removeItem("platano")

//elimina todos los elementos
// localStorage.clear()

// if(localStorage.setItem('platano')){
//     const platano = localStorage.getItem("platano")
//     console.log(platano)
// }


//----------------------------------------------------------------------------------
const frutas = [
    {//objeto
        nombre: "🍌",
        color: "amarillo",
    },
    {//objeto
        nombre: "🍒",
        color: "rojo",
    },
    {//objeto
        nombre: "🍏",
        color: "verde",
    },
]

/**JSON.stringify() 
 * es un método que convierte un objeto o valor de JavaScript en una cadena de texto JSON opcionalmente
 * reemplaza valores si se indica una función de reemplazo, o si se especifican las propiedades mediante un
 * array de reemplazo*/

localStorage.setItem("frutas",JSON.stringify(frutas))//lo formatea


/**JSON.parse()
 * es un método que analiza una cadena de texto como JSON, transformando opcionalmente el valor producido por 
 * el análisis
 */

if(localStorage.getItem("frutas")){
    const frutasDesdeLocal = JSON.parse(localStorage.getItem("frutas"))
    console.log(frutasDesdeLocal)
}