const gameBoardContainer = document.querySelector('.game-board-container');

const gameBoard = (function() {
    let gameBoardArray = ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'O'];
    gameBoardArray.forEach(cell => {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.innerHTML = cell;
        gameBoardContainer.appendChild(gridCell)
    })
})();

const gameFlow = (function() {

})();

// const createPlayer = ({

// });

// const playerOne = createPlayer();
// const playerTwo = createPlayer();