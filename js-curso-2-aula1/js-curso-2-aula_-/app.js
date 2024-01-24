let createNumber = createNumberRandom();

function showTextTags(tag, text){
    let element = document.querySelector(tag);
    element.innerHTML = text;
}
 
showTextTags('h1', 'Jogo do Número Secreto');
showTextTags('p', 'Escolha um número entre 1 a 10');
 
function checkKick() {
    let kick = document.querySelector('input').value;
    console.log(kick == createNumber);
}

function createNumberRandom(){
    return parseInt(Math.random() * 10 + 1);
} 