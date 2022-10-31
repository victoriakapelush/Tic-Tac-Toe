const winning_combinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const players = ["X", "O"];
let turn = 0;

const cell = document.querySelectorAll('.cell');
for(let i = 0; i<cell.length; i++) {
    cell[i].addEventListener('click', function() {
        if (turn == 0) {
            cell[i].textContent = players[0];
            cell[i].style.fontSize = "90px";
            turn++;
            document.getElementsByTagName('h2')[0].textContent = "Player O's turn";
        } else {
            cell[i].textContent = players[1];
            cell[i].style.fontSize = "90px";
            turn--;
            document.getElementsByTagName('h2')[0].textContent = "Player X's turn";
        }
    })
}

function isWinner () {
if (winning_combinations[0][0].includes === "X" && winning_combinations[0][1].includes === "X" && winning_combinations[0][2].includes === "X") {
    document.getElementsByTagName('h2')[0].textContent = "X won!";
}
}

isWinner();
