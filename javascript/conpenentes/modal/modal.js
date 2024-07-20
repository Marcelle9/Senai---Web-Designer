const btnModal = document.querySelector("#abrir")
const vanderlay = document.querySelector(".overlay")
const modalJanela = document.querySelector(".modal")
const btnx =document.querySelector("#fechar")


btnModal.addEventListener("click", abrirModal)
btnx.addEventListener("click", fecharModal)

function abrirModal() {
    vanderlay.classList.remove("escondido")
    modalJanela.classList.remove("escondido")
}


function fecharModal() {
    vanderlay.classList.add("escondido")
    modalJanela.classList.add("escondido")
}

// usar uma funçao apenas

//function alterarModal() {
   // vanderlay.classList.toggle("escondido")
    //modalJanela.classList.toggle("escondido")
//}
























