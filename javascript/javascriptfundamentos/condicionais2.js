// MAIOR DE IDADE
//CNH


let idade = prompt("Qual é sua idade");
let CNH = prompt("Voçe tem CNH")
CNH = Boolean(CNH)

let alcoolizado = true




if (idade >= 18 && CNH === CNH && !alcoolizado) {
    alert("Cidadao está nos conformes !")

} else {
    alert("Cidadão está fora da lei")

}

//pessoa pode pagar meia entrada
//estudante = paga meia
//idade >= 65 paga meia
//renda per capita =< 1429 =page meia
//pcd = paga meia

let estudante = false;
let idadePessoa = 47
let rpc = 2900;
let pcd = true;


if (estudante || idadePessoa >= 65 || rpc <= 1429 || pcd) {
    alert("Paga meia")

} else {
    alert("Paga inteira")
}