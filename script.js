const player = (marker) => {

    return {marker};
}

const winDeclare = document.querySelector('.winner-declare');
const btnRestart = document.querySelector('.restart');
const btnSubmit = document.querySelector('.submit');


let nameOne = document.getElementById('player-one');
let nameTwo = document.getElementById('player-two');
let playerOne = player('x');
let playerTwo = player('o');

btnSubmit.addEventListener('click', () => {
    gameBoard.displayBoard();
    console.log(`${nameOne.value} and ${nameTwo.value}`);
})

// gameBoard module:
const gameBoard = (() => {

    let board = ['', '', '', '', '', '', '', '', ''];
    const items = document.querySelectorAll('.item');
    const itemArr = [...items];
    let currentPlayer = playerOne.marker;
    let moves = 0;

    const displayBoard = () => {

        itemArr.forEach(item => {

            item.addEventListener('click', () => {
                let index = itemArr.indexOf(item);
                item.innerHTML = currentPlayer;
                board.splice(index, 1, currentPlayer);
                changeTurn();
                
                moves++;
                displayController.winConditions();
                if (moves == 9) {
                    winDeclare.innerHTML = "It's a tie!";
                }
            }, { once: true});
        });
    };

    const changeTurn = () => {
        if (currentPlayer == playerOne.marker) {
            currentPlayer = playerTwo.marker;
        } else {
            currentPlayer = playerOne.marker
        }
    };

    const clearGrid = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        winDeclare.innerHTML = ''
        items.forEach(item => {
            item.innerHTML = ''
        })
        window.location.reload();
    }

    btnRestart.addEventListener('click', clearGrid);

    return {
        displayBoard,
        board,
        currentPlayer
    };
})();

// displayController Module:
const displayController = (() => {

    let array = gameBoard.board;

    const winConditions = () => {
        // Rows 
        if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
            } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o') {
                winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
            } else if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') {
                winDeclare.innerHTML = `${nameOne.value} wins this round!`;
            } else if (array[3] == 'o' && array[4] == 'o' && array[5] == 'o') {
                winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
            } else if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') {
                winDeclare.innerHTML = `${nameOne.value} wins this round!`;
            } else if (array[6] == 'o' && array[7] == 'o' && array[8] == 'o') {
                winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
            } 

        // Columns
        if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
        } else if (array[0] == 'o' && array[3] == 'o' && array[6] == 'o') {
            winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
        } else if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
        } else if (array[1] == 'o' && array[4] == 'o' && array[7] == 'o') {
            winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
        } else if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
        } else if (array[2] == 'o' && array[5] == 'o' && array[8] == 'o') {
            winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
        }

        // Diagonals 
        if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
        } else if (array[0] == 'o' && array[4] == 'o' && array[8] == 'o') {
            winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
        } else if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {
            winDeclare.innerHTML = `${nameOne.value} wins this round!`;
        } else if (array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {
            winDeclare.innerHTML = `${nameTwo.value} wins this round!`;
        } 
    }

    return {
        winConditions
    }

})();