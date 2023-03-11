const player = (name, marker) => {

    return {name, marker};
}

const playerOne = player('ryan', 'x');
const playerTwo = player('andrew', 'o')

const gameBoard = (() => {

    const board = ['', '', '', '', '', '', '', '', ''];
    const items = document.querySelectorAll('.item');
    const itemArr = [...items]

    const displayBoard = () => {

        itemArr.forEach(item => {
            item.addEventListener('click', () => {
                let index = itemArr.indexOf(item)
                item.innerHTML = playerOne.marker
                board.splice(index, 1, playerOne.marker)
                console.log(index);
                console.log(board)
            })
        });

    }

    return {
        displayBoard,
        board
    }
})();
gameBoard.displayBoard();
