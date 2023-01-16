console.log("vinculado")

/**Callbacks
 * es una función que se oasa a otra función como argumento que luego se invoca dentro de la función
 * externa para completar algún tipo de turina o acción. Cada vez se ocupa menos.
 */

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

const findPostById = (id, callback) => {
    const post = posts.find(item => item.id === id)

    if(post){
        callback(null, post)
    }else{// en el error
        callback("No se encontró el post con id: " + id)
    }

    
}

findPostById(2, (err, post) => {
    if(err){
       return console.log(err)
    }
    /**otra forma de hacer el if
     * if(err) return console.log(err)
     */
    console.log(post);

    findPostById(2, (err, post) =>{
        if(err) return console.log(err)
        console.log(post)

        findPostById(3, (err,post)=>{
            if(err) return console.log(err)
            console.log(post)

            findPostById(4, (err, post)=>{
                if(err) return console.log(err)
                console.log(post)
            })
        })
    })
})



