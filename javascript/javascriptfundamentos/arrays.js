const jogadores = ["Cássio", "Luciona", "Luva de pedreiro", "pelé", "Zacarias"];

// manipular array envolve o uso de métodos (função) para colocar valores no começo ou final do array;

// ====== adicionando valores no array ====

// push() unshift()


jogadores.push("banto")
console.log(jogadores)

jogadores.unshift("tafarel")
console.log(jogadores)

//removendo valores do array ======
// pop(), shift(), indexOf(), splice();

let removido = jogadores.shift()

console.log(`ojagador ${removido} foi de base`)

console.log(jogadores)

let removido2 = jogadores.pop()
console.log(`o jogadores ${removido2} foi de base`)