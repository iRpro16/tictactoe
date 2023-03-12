const player = (name, marker) => {

    return {name, marker};
}

// gameBoard module:
const gameBoard = (() => {

    const board = ['', '', '', '', '', '', '', '', ''];
    const items = document.querySelectorAll('.item');
    const itemArr = [...items];
    let playerOne = player('jake', 'x');
    let playerTwo = player('andrew', 'o');
    let currentPlayer = playerOne.marker;


    const changeTurn = () => {
        if (currentPlayer == playerOne.marker) {
            currentPlayer = playerTwo.marker;
        } else {
            currentPlayer = playerOne.marker
        }
    }

    const displayBoard = () => {

        itemArr.forEach(item => {

            item.addEventListener('click', () => {
                let index = itemArr.indexOf(item);
                item.innerHTML = currentPlayer;
                board.splice(index, 1, currentPlayer);
                changeTurn();
            })
        });
    };

    return {
        displayBoard,
        board,
        playerOne,
        playerTwo,
        currentPlayer,
    };
})();

gameBoard.displayBoard();

// displayController Module:
const displayController = (() => {


})();

