alert ('Welcome the GAME');

let secretNumber = 5;
let number;
let attempts = 1;

while (number != secretNumber) {

    number = prompt('Choose a number from 1 to 30');

    if (secretNumber == number) {
        console.log(`Congrats, YOU WIN! The number is ${secretNumber} with ${attempts} `);
    } else {
        if ( number > secretNumber){
            alert(`The number is less than ${number}`);

        }
        else {
            alert(`The number is greater than ${number}`);
        }
        attempts++;
    }
}
