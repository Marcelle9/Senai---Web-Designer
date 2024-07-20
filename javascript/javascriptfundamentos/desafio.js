let começar = document.querySelector("h1")

começar.addEventListener("click", thor)

function thor() {
    let nome = prompt("Nome?")
    let cidade = prompt("Onde nasceu?")
    let animal = prompt("Animal favorito?")

    console.log(`Bem vido ${nome}, voçê nasceu ${cidade}, seu animal favorito é um ${animal}`)

    alert("testando em 3..2..1")

    let idade = prompt("Sua idade")
    let quantoVida = (0)

    quantoVida = idade * 52
    alert(`Voçê viveu ${quantoVida} semanas`)


    quantoVida = (76 - idade) * 52
    alert(`Voçê tem ${quantoVida} semanas de vida`)






}