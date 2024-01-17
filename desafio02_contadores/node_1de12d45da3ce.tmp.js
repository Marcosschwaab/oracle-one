const prompt = require("prompt-sync")();

let number = prompt ("Digite o número")

number = parseInt(number);

let count = 0;

while (count <= number){
    console.log(count);
    count++;
}