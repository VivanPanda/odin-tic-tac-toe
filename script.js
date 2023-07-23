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

// const createPlayer = ({

// });

// const playerOne = createPlayer();
// const playerTwo = createPlayer();

const gameController = (function() {

})();