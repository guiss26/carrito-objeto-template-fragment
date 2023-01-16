console.log("vinculado")

const posts =[
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    },
];

/**async
 * la declaración de la función async define una función asíncrona, la cual devuelve una
 * AsyncFunction. Puede funcionar solo. Funciona bajo promesas
 */

/**await 
 * el operador await es usado para esperar a una promise. Solo puede ser usado dentro
 * de una función async function, sino no funciona. Funciona bajo promesas
 */

// const findPostById = (id) =>{
//     const post = posts.find(item => item.id === id)
//     return new Promise ((resolve, reject) =>{
//         if(post) {
//             resolve(post)
//         }else{
//             reject("no se encontró id: " + id)
//         }

//     })
// }

const findPostById = id => new Promise((resolve, reject) => {//otra forma de hacerlo
    setTimeout(() => {
        const post = posts.find((item) => item.id === id)
        if(post){
            resolve(post)
        }else{
            reject("No se encontró id: " + id)
        }
    },2000)
    
})

const buscar = async (id) =>{
    // let loading = true
    try {

        // const post = await findPostById(id)
        // console.log(post)

        const resPost = await Promise.all([
            findPostById(1),
            findPostById(2)
        ])//importtante, Promise.all se va a ejecutar siempre que lo que tenga dentro sea satisfactorio, si hay uno que falla, saltará directamente al catch y no seguirá con el código en cuestión

        console.log(resPost[0].title, resPost[1].title)

        // const postUno = await findPostById(1)
        // const postDos = await findPostById(2)
        // console.log(postUno.title, postDos.title)
    } catch (error) {
        console.log(error)
    } finally {//ejecuta un código al final
        console.log("Se ejecuta sí o sí")
        // loading = false
    }
    
}

buscar(1)