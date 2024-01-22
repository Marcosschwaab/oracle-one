let title = document.querySelector('h1');
title.innerHTML = 'Hora do Desafio';

function checkKick() {
    console.log('O botão foi clicado');
}

function checkAlert(){
    console.log('Eu Amo JS!')
}
function viewPrompt() {
    let nomeDaCidade = prompt('Digite o nome de uma cidade do Brasil que você gosta muito:')
    alert(`Estive em ${nomeDaCidade} e lembrei de você`)
}

function sumTwoNumbers() {
    let firstNumber = parseInt(prompt('Digite o primeiro número'));
    let secondNumber = parseInt(prompt('Digite o segundo número'));
    let result = firstNumber + secondNumber;
    alert(`${firstNumber} + ${secondNumber} = ${result}`)
}