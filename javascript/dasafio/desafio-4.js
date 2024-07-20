let mediaAtleta1 = (127 + 185 + 134 + 199) / 4
let mediaAtleta2 = (115 + 190 + 136 + 197) / 4

if (mediaAtleta1 > mediaAtleta2) {
    alert(`Cbum venceu com ${mediaAtleta1} pontos`)

} else if (mediaAtleta2 > mediaAtleta1) {
    alert(`Ramon venceu com ${mediaAtleta2} pontos`)

} else if (mediaAtleta1 === mediaAtleta2) {
    alert(`os atletas empataram com ${mediaAtleta2} pontos`)
}