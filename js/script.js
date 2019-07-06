let computerMove = 'nieznany ruch';
let playerMove = 'nieznany ruch';
let randomNumber = Math.floor(Math.random() * 3 + 1);

if(randomNumber == 1){
    computerMove = 'kamień';
} else if(randomNumber == 2){
    computerMove = 'papier';
} else if(randomNumber == 3){
    computerMove = 'nożyce';
}

let playerInput = prompt('Twój ruch to... 1: kamień, 2: papier, 3: nożyce');

if(playerInput == '1'){
    playerMove = 'kamień';
} else if(playerInput == '2'){
    playerMove = 'papier';
} else if(playerInput == '3'){
    playerMove = 'nożyce';
}

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wybrał: ' + playerInput);

printMessage('Twój ruch to: ' + playerMove);
printMessage('Mój ruch to: ' + computerMove);

if(playerMove == 'kamień' && computerMove == 'kamień'){
    printMessage('REMIS!');
} else if(playerMove == 'papier' && computerMove == 'papier'){
    printMessage('REMIS!');
} else if(playerMove == 'nożyce' && computerMove == 'nożyce'){
    printMessage('REMIS!');
} else if(playerMove == 'kamień' && computerMove == 'papier'){
    printMessage('PRZEGRAŁEŚ');
} else if(playerMove == 'papier' && computerMove == 'nożyce'){
    printMessage('PRZEGRAŁEŚ');
} else if(playerMove == 'nożyce' && computerMove == 'kamień'){
    printMessage('PRZEGRAŁEŚ');
} else if(playerMove == 'kamień' && computerMove == 'nożyce'){
    printMessage('WYGRAŁEŚ');
} else if(playerMove == 'papier' && computerMove == 'kamień'){
    printMessage('WYGRAŁEŚ');
} else if(playerMove == 'nożyce' && computerMove == 'papier'){
    printMessage('WYGRAŁEŚ');
} else{
    printMessage('NIE UMIESZ WYBRAĆ POPRAWNIE LICZBY GAMONIU?');
}