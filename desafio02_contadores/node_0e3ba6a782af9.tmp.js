//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
const prompt = require("prompt-sync")();

let number = prompt ("Digite um número para iniciar a contagem regressiva:");

// alterando variável number que é string para número inteiro
number = parseInt(number);

while (number >= 0){
    console.log(number);
    number--
}

