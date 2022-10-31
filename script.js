const players = ["X", "O"];
let turn = 0;

const cell = document.querySelectorAll('.cell');
for(let i = 0; i<cell.length; i++) {
    cell[i].addEventListener('click', function() {
        if (isWinner() || cell[i].textContent !== ""){
            return;
        };
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
        if (isWinner()){
            if (turn == 0) {
                document.getElementsByTagName('h2')[0].textContent = "O won";
            } else {
                document.getElementsByTagName('h2')[0].textContent = "X won";
            }
            return;
        };


    })
}

const reset = document.getElementById('button');
        reset.addEventListener('click', function() {
            for (let i = 0; i<cell.length; i++) {
                cell[i].textContent = "";
                turn = 0;
            }
            
        })


function isWinner() {
	const winning_combinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

	for (let element of winning_combinations) {
		if (
			cell[element[0]].textContent == cell[element[1]].textContent &&
			cell[element[1]].textContent == cell[element[2]].textContent &&
			cell[element[0]].textContent != ''
		) {
			return true;
		}
	}
	return false;

}


