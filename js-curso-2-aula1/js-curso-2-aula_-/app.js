let listNumbersSort = [];
let numberLimit = 3;
let secretNumber = createNumberRandom();
let attemps = 1;


function showTextTags(tag, text){
    let element = document.querySelector(tag);
    element.innerHTML = text;
}
 
function showInitialGame(){
    showTextTags('h1', 'Jogo do Número Secreto');
    showTextTags('p', 'Escolha um número entre 1 a 10');
}
 
showInitialGame();

function checkKick() {
    let kick = document.querySelector('input').value;
   
    if (kick == secretNumber){
        showTextTags('h1', 'Acertou!');
        let checkAttemps = attemps > 1 ? 'tentativas' : 'tentativa';
        let msgAttemps = `Você descobriu o número secreto com ${attemps} ${checkAttemps}.`;
        showTextTags('p', `${msgAttemps}`);
        document.getElementById('refresh').removeAttribute('disabled');
    } else {
        if (kick > secretNumber) {
            showTextTags('p', 'O número secreto é MENOR, tente outra vez!');
        } else {
        showTextTags('p', 'O número secreto é MAIOR, tente outra vez!');
        }
        attemps ++;
        clearKick();
    }   
}

function createNumberRandom(){
    let numberChosen =  parseInt(Math.random() * numberLimit + 1);
    let quantityElementsList = listNumbersSort.length;
        if (quantityElementsList == numberLimit){
            listNumbersSort = [];
        }

        if (listNumbersSort.includes(numberChosen)){
            return createNumberRandom();
        }
        else {
            listNumbersSort.push(numberChosen);
            console.log(listNumbersSort);
            return numberChosen;
        }
} 
function clearKick (){
    kick = document.querySelector('input');
    kick.value = '';
}
function refreshGame(){
    secretNumber = createNumberRandom();
    clearKick();
    attemps = 1;
    showInitialGame();
}

