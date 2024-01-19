let circulo = document.querySelector(".circulo")
let imgCopo = document.querySelector(".starbucks")
let verde = document.querySelector(".verde")
let amarelo = document.querySelector(".amarelo")
let rosa = document.querySelector(".rosa")
let meuBotao = document.querySelector("#meuBotao")
let meuCopo = document.querySelector("#meuCopo")
let logo = document.querySelector("#logo")
let span = document.querySelector("span")

verde.addEventListener ("click", () => {
    imgCopo.src = "./img/img1.png"
    circulo.style.background = "#017143"
    span.style.color = "#017143"
    meuBotao.style.backgroundColor = "#017143"
})

amarelo.addEventListener ("click", () => {
    imgCopo.src = "./img/img2.png"
    circulo.style.background = "#eb7495"
    span.style.color = "#eb7495"
    meuBotao.style.backgroundColor = "#eb7495"
})

rosa.addEventListener ("click", () => {
    imgCopo.src = "./img/img3.png"
    circulo.style.background = "#d752b1"
    span.style.color = "#d752b1"
    meuBotao.style.backgroundColor = "#d752b1"
})

meuCopo.addEventListener("click", () => {
    meuCopo.classList.toggle("selecionado");
})

logo.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

let copos = document.querySelector(".menu")
let coposArray = Array.from(copos.children)

copos.addEventListener("wheel", (event) => {
    if (event.deltaY < 0) {
        let primeiroCopo = coposArray.shift()
        coposArray.push(primeiroCopo)
    } else {
        let ultimoCopo = coposArray.pop()
        coposArray.unshift(ultimoCopo)
    }
    coposArray.forEach((copo, index) => {
        copo.style.order = index
    })
})
