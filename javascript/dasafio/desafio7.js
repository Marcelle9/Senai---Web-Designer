const carro1 = {
    modelo1: "corola",
    fabricante: "toyota",
    veloMaxima: 180,
    consumo: 14.5,

    calcularEficiencia: function() {
        let valorCorola = carro1.consumo * 0.7 + carro1.veloMaxima * 0.3
        return valorCorola
    }


}

const carro2 = {
    modelo2: "jetta",
    fabricante: "volks",
    veloMaxima: 200,
    consumo: 12.3,

    calcularEficiencia: function() {
        let valorJetta = carro2.consumo * 0.7 + carro2.veloMaxima * 0.3
        return valorJetta



    }


}



if (carro1.calcularEficiencia() > carro2.calcularEficiencia()) {
    alert(`o ${carro1.modelo1} é mais eficiente que o ${carro2.modelo2}`)

} else if (carro2.calcularEficiencia() > carro1.calcularEficiencia()) {
    alert(`o ${carro2.modelo2} é mais eficiente que o ${carro1.modelo1}`)

} else {
    alert("os dois modelos tem a mesma eficiencia")

}