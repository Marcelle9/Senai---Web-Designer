let elememtoH1 = document.querySelector("h2")

elememtoH1.addEventListener("click", iniciarHello)

function iniciarHello() {
    //alert("testando...1,2,3");

    elememtoH1.textContent = "Olá, mundo. 👨‍🚀"
}

// variáveis e tipos de dados;


//não pode começar com número;
//não pode ter espaço;
//não pode ser uma palavra reservada;
//não pode ter duas variáveis com o mesmo nome;

//nomes segnificativos = evitar abc, variável com uma letra só;
//variáveis com duas palavras - adoar o camelCase;

//texto = string;
//número inteiros = integer;
//número decimal = float;
//javacript não essa, é tudo NUMBER;
//Booleana = verdadeira ou falso;
//undefined = indefinido = quando a elemento não existe ou não tem valor;

//let = variavel uqe deve mudar o valor;
//const = variável que não deve mudar o valor;
//var = variável voçe pode mudar o valor;
//LEGADO =sistema antigo;

let nomepet = "thor";

let anoNascimento = 2006;

console.log(anoNascimento)

let castrado = true

//variável criado sem valor atribuido
let vacinado;

anoNascimento = 2022;
console.log(anoNascimento)

//operadores Metemáticos;
//somo = +
//subtração = -
//divisão = /
//multiplacaçao = *
//potência = **

console.log(2023 - anoNascimento);
let primeiroNome = "Guilherme"
let segundoNome = "porto"

//jeito ruim, do passodo/LEGAOD;
//console.log("Bem vindo " + primeiroNome + " " + segundoNome)

//string Literal / template Literal ``;



//jeito bom, jeito certo/melhor;
console.log(`bem vindo ${primeiroNome}  ${segundoNome}`)


let nomeUsuario = prompt("nome?")
let peso = prompt("Qual o peso?")
let altura = prompt("Qual a altura?")
let imc = 0;

imc = peso / altura ** altura

console.log(`${nomeUsuario} seu imc é de ${Math.trunc(imc)}`)
    //Trunc é feito para tirar o numero decimal
    //rould a redondar para cima/+ o numero decimal
    //floor a rendonda o numero decimal para baixo/-
    //tofixed  pode escolher quantas casa decimal