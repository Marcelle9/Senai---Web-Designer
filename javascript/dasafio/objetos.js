const produto = {
    nome: "samsung galaxy s23",
    preco: 3499.9,
    momoria: "299gb",
    cores: ["branco", "preto", "carbono"],
    tem5g: true,

    formatarReal: function() {
        return this.preco.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL"
        })

    },

    formatarDolar: function() {
        let precoConvertido = this.preco / 5.12;
        return precoConvertido.toLocaleString("pt-br", {
            style: "currency",
            currency: "USD"
        })
    },





    calcParcela: function(vezes) {
        return produto.preco / vezes;
    },
    resumirProduto: function() {
        // o celular Samsung galaxy s23 possui 8gb de memoria, esta desponivel em 3 cores, tem 5g, e custa R$ 3499,90
        let resumo = `o celular ${produto.nome} possui  ${produto.momoria}, está desponivel em ${produto.cores.length} cores, ${produto.tem5g ? "tem 5g" : "não tem 5g"} e custa ${this.formatarReal()}`

        return resumo
    }
}



//resulta.tofixed(2) OBS: converte o número em STRING.