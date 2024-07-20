const cores = document.querySelectorAll(".seletor--core")

const quadro = document.querySelector(".id--box")

document.body.addEventListener("keydown", detectarTecla)

for (const cor of cores) {
    cor.addEventListener("click", alterarCor)
}


function alterarCor(e) {
    //estamos mapeando o elemento que gerou o click
    const elem = e.target
        //estamos resgatando o ATRIBUTO  data-cor, que contem a cor do elemento
    const corElem = elem.getAttribute("data-cor")
    console.log(corElem)
    quadro.style.backgroundColor = corElem
}

function detectarTecla(e) {
    quadro.textContent = e.key

    if (e.key == " ") {
        document.body.style.backgroundColor = "#000"
    } else {
        document.body.style.backgroundColor = "#fff"
    }
}