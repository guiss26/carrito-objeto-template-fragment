
const inputColor = document.querySelector('#inputColor')
const boton = document.querySelector('#visualizar')
const texto = document.querySelector('#texto')
const cardColor = document.querySelector('#cardColor')

console.log(inputColor)
console.log(boton)
console.log(texto)
console.log(cardColor)

boton.addEventListener("click", ()=>{
    console.log("Has dado al botón")
    console.log(inputColor.value)

    texto.textContent = inputColor.value
    cardColor.style.backgroundColor = inputColor.value;
    navigator.clipboard.writeText(inputColor.value).then(()=>console.log("texto copiado")).catch((e)=>console.log(e))
})



