let players = ["X", "O"]
let turn = 0;
let moves = 9;

const cells = document.querySelectorAll('.cell');

for (let i = 0; i < cells.length; i++) {
    //disable click after there's already X or O
    cells[i].addEventListener('click', function() {
        if (checkWinner() || cells[i].textContent !== "") {
            return;
    }

    //taking turns between X and O    
        if (turn == 0) {
            cells[i].textContent = players[0];
            cells[i].style.color = "#09C372";
            document.getElementById('changeTurns').textContent = "O"
            document.getElementById('changeTurns').style.color = "#498AFB";
            turn++;
            moves--;
        } else {
            cells[i].textContent = players[1];
            cells[i].style.color = "#498AFB";
            document.getElementById('changeTurns').textContent = "X"
            document.getElementById('changeTurns').style.color = "#09C372";
            turn--;
            moves--;
        }
        if (checkWinner()){
            if (turn == 0) {
                document.getElementsByTagName('h3')[0].textContent = "O won";
                document.getElementsByTagName('h3')[0].style.color = "#498AFB";
            } else if (turn > 0) {
                document.getElementsByTagName('h3')[0].textContent = "X won";
                document.getElementsByTagName('h3')[0].style.color = "#09C372";
            } 
        } 
        else {
            isTie();
        }
        
       return;
        
    })
}

//click on reset button to clear the game
const resetBtn = document.getElementById('reset');
    for (let i = 0; i < cells.length; i++) {
        resetBtn.addEventListener('click', function() {
            cells[i].textContent = "";
            document.getElementsByTagName('h3')[0].textContent = "Player " + players[0] + "'s" + " turn";
            turn = 0;
            moves = 0;
            window.location.reload();
        })
    }

function checkWinner() {
    let winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    for (let element of winningCombos) {
        if (
            cells[element[0]].textContent == cells[element[1]].textContent &&
            cells[element[1]].textContent == cells[element[2]].textContent &&
            cells[element[0]].textContent != ''
        ) {
            return true;
        }
    }
    return false;
}

function isTie() {
    if (moves == 0){
        return document.getElementsByTagName('h3')[0].textContent = "It's a tie!";
    }
}
