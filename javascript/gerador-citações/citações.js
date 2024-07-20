const quadro = document.querySelector("header")

const citaçoes = [
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos.",
    "O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.",
    "A única maneira de fazer um ótimo trabalho é amar o que você faz.",
    "Não é o mais forte que sobrevive, nem o mais inteligente, mas o que melhor se adapta às mudanças.",
    "A jornada de mil milhas começa com um único passo.",
    "Acredite que você pode, assim você já está no meio do caminho.",
    "A melhor maneira de prever o futuro é criá-lo.",
    "O fracasso é apenas a oportunidade de começar de novo, desta vez de forma mais inteligente.",
    "A maior glória em viver não está em nunca cair, mas em nos levantar cada vez que caímos.",
    "A persistência é o caminho do êxito.",
    "O sucesso normalmente vem para quem está ocupado demais para procurar por ele.",
    "A vida é 10% do que acontece com você e 90% de como você reage a isso.",
    "Se você quer viver uma vida feliz, amarre-se a uma meta, não a pessoas ou coisas.",
    "As oportunidades não acontecem, você as cria.",
    "Não pare quando estiver cansado. Pare quando tiver terminado.",
    "Acredite em você mesmo e em tudo o que você é.",
    "O que você faz faz uma diferença, e você precisa decidir que tipo de diferença você quer fazer.",
    "Se você não lutar por algo, será vencido por qualquer coisa.",
    "O segredo do sucesso é a constância de propósito.",
    "Você é mais corajoso do que acredita, mais forte do que parece e mais inteligente do que pensa."
];


quadro.addEventListener("click", alterar)

function alterar() {
    const idx = Math.trunc(Math.random() * citaçoes.length)
    quadro.textContent = citaçoes[idx]

}