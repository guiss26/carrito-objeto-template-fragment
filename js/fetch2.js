console.log("Vinculado")

const cards = document.getElementById('card-dinamicas')
const templateCard = document.getElementById('template-card').content

document.addEventListener('DOMContentLoaded', () => {//DOMContentLoaded para que cargue todo nuestro DOM
    fetchData()
})

const fetchData = async () => {
    // console.log("obteniendo datos...")
    try {
        loadingData(true)

        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json()

        // console.log(data)
        pintarCards(data)
    } catch (error) {
        console.log(error)
    }finally{
        loadingData(false)
    }
}

const pintarCards = data => {
    // console.log(data)
    const fragment = document.createDocumentFragment()

    data.results.forEach(item => {
        // console.log(item)
        const clone = templateCard.cloneNode(true)
        clone.querySelector('img').setAttribute("src",item.image)
        clone.querySelector('h5').textContent = item.name
        clone.querySelector('p').textContent = item.species

        //guardamos en el fragment para evitar el reflow
        fragment.appendChild(clone)
    });

    cards.appendChild(fragment)
}

const loadingData = estado => {
    const loading = document.getElementById('loading')
    if(estado){
        loading.classList.remove('d-none')
    }else{
        loading.classList.add('d-none')
    }
    
}