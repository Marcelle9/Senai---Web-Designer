function somarNumeros(num1, num2) {
    let resultado = num1 + num2
    return resultado
}

function calcImc(peso, altura) {
    let imc = peso / altura ** 2
    return imc.toFixed(2)
}

function classImc(imc) {

    let faixa = "normal"

    if (imc < 18.5) {
        faixa = "abaixo do peso"
    } else if (imc >= 18.5 && imc <= 24.9) {
        faixa = "normal"

    } else if (imc >= 25 && imc <= 29.9) {
        faixa = "acima do peso"

    } else if (imc >= 30 && imc <= 34.9) {
        faixa = "obesidade"

    } else if (imc >= 35 && imc <= 39.9) {
        faixa = "obesidade gravíssima"

    }

    return faixa

}

let peso = prompt("Digite seu peso")

let altura = prompt("Digite sua altura")

let imcCalculado = calcImc(peso, altura)

let classificacao = classImc(imcCalculado)

alert(`Seu imc é de ${imcCalculado} e voçê está ${classificacao}`)

10 > 5 ? console.log("10 é maior que 5 ") : console.log("5 maior que 10")