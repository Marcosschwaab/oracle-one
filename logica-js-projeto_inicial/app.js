alert ('Welcome the GAME');

let secretNumber = 29;

let number = prompt('Choose a number from 1 to 30');

if (secretNumber == number) {
    console.log('Congrats, YOU WIN! The number is', secretNumber)
} else {
    alert('You missed!')
}