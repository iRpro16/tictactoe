const player = (name, marker) => {

    return {name, marker};
}

let playerOne = player('tristan', 'x');
let playerTwo = player('andrew', 'o');

const winDeclare = document.querySelector('.winner-declare');

// gameBoard module:
const gameBoard = (() => {

    const board = ['', '', '', '', '', '', '', '', ''];
    const items = document.querySelectorAll('.item');
    const itemArr = [...items];
    let currentPlayer = playerOne.marker;

    const displayBoard = () => {

        itemArr.forEach(item => {

            item.addEventListener('click', () => {
                let index = itemArr.indexOf(item);
                item.innerHTML = currentPlayer;
                board.splice(index, 1, currentPlayer);
                changeTurn();
                displayController.winConditions()

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


    return {
        displayBoard,
        board,
        currentPlayer
    };
})();


// displayController Module:
const displayController = (() => {

    gameBoard.displayBoard();

    let array = gameBoard.board;

    const winConditions = () => {
        // Rows 
        if (array[0] == 'x' && array[1] == 'x' && array[2] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
            } else if (array[0] == 'o' && array[1] == 'o' && array[2] == 'o') {
                winDeclare.innerHTML = `${playerTwo.name} wins this round`
            } else if (array[3] == 'x' && array[4] == 'x' && array[5] == 'x') {
                winDeclare.innerHTML = `${playerOne.name} wins this round`
            } else if (array[3] == 'o' && array[4] == 'o' && array[5] == 'o') {
                winDeclare.innerHTML = `${playerTwo.name} wins this round`;
            } else if (array[6] == 'x' && array[7] == 'x' && array[8] == 'x') {
                winDeclare.innerHTML = `${playerOne.name} wins this round`
            } else if (array[6] == 'o' && array[7] == 'o' && array[8] == 'o') {
                winDeclare.innerHTML = `${playerTwo.name} wins this round`;
            }

        // Columns
        if (array[0] == 'x' && array[3] == 'x' && array[6] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
        } else if (array[0] == 'o' && array[3] == 'o' && array[6] == 'o') {
            winDeclare.innerHTML = `${playerTwo.name} wins this round`;
        } else if (array[1] == 'x' && array[4] == 'x' && array[7] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
        } else if (array[1] == 'o' && array[4] == 'o' && array[7] == 'o') {
            winDeclare.innerHTML = `${playerTwo.name} wins this round`;
        } else if (array[2] == 'x' && array[5] == 'x' && array[8] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
        } else if (array[2] == 'o' && array[5] == 'o' && array[8] == 'o') {
            winDeclare.innerHTML = `${playerTwo.name} wins this round`;

        }

        // Diagonals 
        if (array[0] == 'x' && array[4] == 'x' && array[8] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
        } else if (array[0] == 'o' && array[4] == 'o' && array[8] == 'o') {
            winDeclare.innerHTML = `${playerTwo.name} wins this round`;
        } else if (array[2] == 'x' && array[4] == 'x' && array[6] == 'x') {
            winDeclare.innerHTML = `${playerOne.name} wins this round`
        } else if (array[2] == 'o' && array[4] == 'o' && array[6] == 'o') {
            winDeclare.innerHTML = `${playerTwo.name} wins this round`;

        }
    }


    return {
        winConditions
    }

})();