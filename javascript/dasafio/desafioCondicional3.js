let pix = prompt("qual o valor do pix")
let horarioAtual = prompt("Qual é o horario")


if (pix <= 2000 && horarioAtual >= 6 && horarioAtual <= 23) {
    alert("Pix realizado")

} else {
    alert("Pix não pode ser feito")
}