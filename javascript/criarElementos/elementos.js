//começa criando uma variavel para o elemento HTML que vamos inserir na pagina

const h1 = document.createElement("h1");
h1.textContent = "estou criando meu primeiro elemento"
h1.style.textAlign = "center"

const container = document.querySelector("section")

container.prepend(h1)

h1.remove()


// =============================================


//criação de elementos

let tituloCard2 = "viajem para tailandia"
let descCard2 = "na tailandia nós vamos comer carnes exóticas"

const card = document.createElement("article")

card.classList.add("card")

const conteudo = ` <h2 class="titulo--card">${tituloCard2}</h2>
<p class="desc--card">${descCard2}</p>
<button class="btn--primario">reserve</button>
<button class="btn--secundario">saiba mais</button>`
card.innerHTML = conteudo

container.append(card)


//============================================

//criando elementos em massa
//array,lesta

const tamArray = ["pp", "p", "m", "gg", "egg", "exgg"]

for (const item of tamArray) {
    const conteiner = document.getElementById("tamanhos")
    console.log(conteiner)

    const elTamanho = document.createElement("div")
    elTamanho.classList.add("seletor--tamanho")
    elTamanho.innerHTML = `<span class="tamanho">${item}</span>`

    conteiner.append(elTamanho)
}


const add = document.querySelector("#add--")