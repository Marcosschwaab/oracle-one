const prompt = require("prompt-sync")();

console.log ('Olá, seja bem vindo ao Java Script');

let name = prompt ('Digite seu nome');
console.log (`Olá, ${name}!`)

let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(linguagemFavorita);

//declaração de variaveis
let valor1 = 10;
let valor2= 20;

//soma dos valores
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} + ${valor2} é igual a ${resultado}.`);

//diferença dos valores
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//Verificação de idade
let = prompt("Insira sua Idade")
    if (idade >= 18) {
        console.log("Você é maior de idade");
    }else {
        console.log("Você é menor de idade.");
    }

// Positivo negativo e zero
let numero = prompt ("Insira um número");
    if (numero > 0){
        console.log("O número é positivo");
    } else if (numero < 0 ){
        console.log("O número é negativo");
    } else {
        console.log("O número é 0")
    }

//Numeros de 1 a 10 - loop
let n = 1;
    while (n <= 10) {
        console.log(i);
        n++;
     }

// verificaçao de nota
let nota = 8;
    if (nota >= 7) {
    console.log("Aprovado");
    } else {
    console.log("Reprovado");
    }

// número aleatório Math.random
let numAleatorio = Math.random();
console.log(numAleatorio);


// Random até 10
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(10));

  // Random até 1000
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  console.log(getRandomInt(1000));


