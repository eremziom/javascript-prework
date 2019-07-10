let computerScore = 0;
let playerScore = 0;

function playGame(playerInput){
    clearMessages();

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
            computerScore ++;
        } else if(argPlayerMove == 'papier' && argComputerMove == 'nożyce'){
            printMessage('PRZEGRAŁEŚ');
            computerScore ++;
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'kamień'){
            printMessage('PRZEGRAŁEŚ');
            computerScore ++;
        } else if(argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
            printMessage('WYGRAŁEŚ');
            playerScore ++;
        } else if(argPlayerMove == 'papier' && argComputerMove == 'kamień'){
            printMessage('WYGRAŁEŚ');
            playerScore ++;
        } else if(argPlayerMove == 'nożyce' && argComputerMove == 'papier'){
            printMessage('WYGRAŁEŚ');
            playerScore ++;
        } else{
            printMessage('NIE UMIESZ WYBRAĆ POPRAWNIE LICZBY GAMONIU?');
        }
        console.log('moves:', argComputerMove, argPlayerMove);

        function result(){
            clearMessages1();
        printMessage1(playerScore + ' : ' + computerScore);
            if(playerScore == '5'){
                printMessage1('Brawo, wygrałeś partię!')
            } else if(computerScore == '5'){
                printMessage1('Niestety, przegrałeś partię!')
            }
        }

        result();
    }
   
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    let computerMove = getMoveName(randomNumber);
    let playerMove = getMoveName(playerInput);
    let gameResults = getResult(computerMove, playerMove);

    console.log('Wylosowana liczba to: ' + randomNumber);
    console.log('Gracz wybrał: ' + playerInput);
}

document.getElementById('rock-button').addEventListener('click', function(){playGame(1)});

document.getElementById('paper-button').addEventListener('click', function(){playGame(2)});

document.getElementById('scissors-button').addEventListener('click', function(){playGame(3)});