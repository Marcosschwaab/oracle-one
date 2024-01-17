alert ('Welcome the GAME');

let secretNumber = 5;
let number


while (number != secretNumber) {

    number = prompt('Choose a number from 1 to 30');

    if (secretNumber == number) {
        console.log(`Congrats, YOU WIN! The number is ${secretNumber}`);
    } else {
        if ( number > secretNumber){
            alert(`The number is less than ${number}`)
        }
        else {
            alert(`The number is greater than ${number}`)
        }
    }
}
