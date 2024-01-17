const prompt = require("prompt-sync")();

let number = prompt ("Digite um número para iniciar a contagem progressiva:")

// alterando variável number que é string para número inteiro
number = parseInt(number);

let count = 0;

while (count <= number){
    console.log(count);
    count++;
}