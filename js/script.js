let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

if(randomNumber == 1){
    computerMove = 'kamień';
}

let playerInput = prompt('Twój ruch to... 1: kamień, 2: papier, 3: nożyce');

console.log('Gracz wybrał: ' + playerInput);

if(playerInput == '1'){
    playerMove = 'kamień';
}

printMessage('Twój ruch to: ' + playerMove);

printMessage('Mój ruch to: ' + computerMove);

