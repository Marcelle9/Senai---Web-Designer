let elementoh1 = document.querySelector("h1")

elementoh1.addEventListener("click", iniciar)

function iniciar() {
    let senhaAtual = prompt("Cria uma senha")
    let tamanho = 8

    if (senhaAtual.length >= tamanho) {
        alert("Sua senha está correta")
    } else {
        alert("Sua senha tem que conter 8 caracteres")
    }




    let deposito = prompt("Deposito")
    let saldo = 2000

    if (deposito < 2000) {
        alert("Seu deposito está insuficiente")

    } else if (deposito > saldo) {
        alert("Deposito foi aceito")
    }

}


let elementoh2 = document.querySelector("h2")

elementoh2.addEventListener("click", iniciar2)

function iniciar2() {
    let velocidadeAtual = prompt("Coloque sua velociadade")
    let velociadadePermitida = 80

    if (velocidadeAtual > velociadadePermitida * 2) {
        alert("sua habilitação esta suspensa!")

    } else if (velocidadeAtual > velociadadePermitida) {
        alert("Multa aplicada")

    } else if (velocidadeAtual < velociadadePermitida) {
        alert("Dentro do limite permitido")
    }
}

let elementoh3 = document.querySelector("h3")

elementoh3.addEventListener("click", iniciar3)

function iniciar3() {
    let nota = prompt("Nota de bimestre")

    if (nota >= 6) {
        alert("Aprovado")

    } else if (nota < 5) {
        alert("reprovado")

    } else {
        alert("Recuperação")
    }

}