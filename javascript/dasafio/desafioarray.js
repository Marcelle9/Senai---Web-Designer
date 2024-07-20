const timepokemon = ["pakachu, Charmander, charizard"]

while (timepokemon.length <= 5) {
    let adicionarPokemon = prompt("qual pokemon voçe quer adicionar")

    addPokemon(adicionarPokemon);


}


function addPokemon(adicionarPokemon) {
    let adicionar = adicionarPokemon
    let remover = adicionarPokemon



    if (timepokemon.length <= 6) {
        alert("voçê esta pronto?")
        timepokemon.push(adicionarPokemon)
    }

}






function removerpokemon() {
    if (timepokemon.length >= 6) {
        alert("o número maximo de pokemon foi ultrapassado")
        timepokemon.shift(adicionarPokemon)
    }
}