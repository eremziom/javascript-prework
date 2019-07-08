function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'kamień';
    } else if(argMoveId == 2){
      return 'papier';
    } else if(argMoveId == 3){
      return 'nożyce';
    }
  
    printMessage('Nie znam ruchu o nazwie ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  function getResult(argComputerMove, argPlayerMove){

    printMessage('Twój ruch to: ' + playerMove);
    printMessage('Mój ruch to: ' + computerMove);

    if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
        printMessage('REMIS!');
    } else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
        printMessage('REMIS!');
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
        printMessage('REMIS!');
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'papier'){
        printMessage('PRZEGRAŁEŚ');
    } else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
        printMessage('PRZEGRAŁEŚ');
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
        printMessage('PRZEGRAŁEŚ');
    } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
        printMessage('WYGRAŁEŚ');
    } else if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
        printMessage('WYGRAŁEŚ');
    } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
        printMessage('WYGRAŁEŚ');
    } else{
        printMessage('NIE UMIESZ WYBRAĆ POPRAWNIE LICZBY GAMONIU?');
    }
    console.log('moves:', argComputerMove, argPlayerMove);
  }
    
let randomNumber = Math.floor(Math.random() * 3 + 1);
let playerInput = prompt('Twój ruch to... 1: kamień, 2: papier, 3: nożyce');
let computerMove = getMoveName(randomNumber);
let playerMove = getMoveName(playerInput);
let gameResult = getResult(computerMove, playerMove);

console.log('Wylosowana liczba to: ' + randomNumber);
console.log('Gracz wybrał: ' + playerInput);