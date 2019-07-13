let computerScore = 0;
let playerScore = 0;

function playGame(playerInput){
    clearMessages('messages');

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

        printMessage('Twój ruch to: ' + playerMove, 'messages');
        printMessage('Mój ruch to: ' + computerMove, 'messages');

        if(argPlayerMove == 'kamień' && argComputerMove == 'kamień'){
            printMessage('REMIS!', 'messages');
        } else if(argPlayerMove == 'papier' && argComputerMove == 'papier'){
            printMessage('REMIS!', 'messages');
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'nożyce'){
            printMessage('REMIS!', 'messages');
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'papier'){
            printMessage('PRZEGRAŁEŚ', 'messages');
            computerScore ++;
        } else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
            printMessage('PRZEGRAŁEŚ', 'messages');
            computerScore ++;
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
            printMessage('PRZEGRAŁEŚ', 'messages');
            computerScore ++;
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('WYGRAŁEŚ', 'messages');
            playerScore ++;
        } else if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
            printMessage('WYGRAŁEŚ', 'messages');
            playerScore ++;
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
            printMessage('WYGRAŁEŚ', 'messages');
            playerScore ++;
        } else{
            printMessage('NIE UMIESZ WYBRAĆ POPRAWNIE LICZBY GAMONIU?');
        }
        console.log('moves:', argComputerMove, argPlayerMove);

        function result(){
            clearMessages('score');
        printMessage(playerScore + ' : ' + computerScore, 'score');
            if(playerScore == '5'){
                printMessage('Brawo, wygrałeś partię!', 'score')
            } else if(computerScore == '5'){
                printMessage('Niestety, przegrałeś partię!', 'score')
            }
        }

        result();
    }
   
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);
    const playerMove = getMoveName(playerInput);
    const gameResults = getResult(computerMove, playerMove);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wybrał: ' + playerInput);
}

document.getElementById('rock-button').addEventListener('click', function(){playGame(1)});

document.getElementById('paper-button').addEventListener('click', function(){playGame(2)});

document.getElementById('scissors-button').addEventListener('click', function(){playGame(3)});