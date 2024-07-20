const btn = document.querySelector("button")
const nav = document.querySelector("nav")


btn.addEventListener("click", abrirMenu)
nav.addEventListener("click", fechar)

//function abrirMenu() {
    //nav.style.transform = "translate(0%)"
//}

//function fechar() {
    //nav.style.transform = "translate(-100%)"
//}

function abrirMenu() {
    nav.classList.add("aberto")



}


function fechar() {
    nav.classList.remove("aberto")
}