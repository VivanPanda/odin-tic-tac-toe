const gameBoardContainer = document.querySelector('.game-board-container');
let gameBoardArray = ['', '', '', '', '', '', '', '', ''];

const gameBoard = (function(gridCell) {
    gameBoardArray.forEach(cell => {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.innerHTML = cell;
        gameBoardContainer.appendChild(gridCell)
    })
})();

const createPlayer = (name, marker) => {
    return { name, marker };
}

const gameController = (function() {
    const playerOne = createPlayer('Player one', 'O');
    const playerTwo = createPlayer('Player two', 'X');

    gameBoardContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('grid-cell')) {
            // make current user player one and add o for the first time
            // every other time alternate
            // update dom with new array
        }
    })

})();