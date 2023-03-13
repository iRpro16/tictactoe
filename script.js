const player = (name, marker) => {

    return {name, marker};
}

let playerOne = player('tristan', 'x');
let playerTwo = player('andrew', 'o');

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


})();