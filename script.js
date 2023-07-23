const gameBoardContainer = document.querySelector('.game-board-container');
let currentPlayer;

const gameBoard = (function() {
    gameBoardArray = ['', '', '', '', '', '', '', '', ''];
    gameBoardArray.forEach((cell, index) => {
        let gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridCell.setAttribute('data-index', index)
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
    currentPlayer = playerOne;

    gameBoardContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('grid-cell')) {
            gameBoardArray.splice(event.target.dataset.index, 1, currentPlayer.marker)
            event.target.innerHTML = currentPlayer.marker;

            if ((gameBoardArray[event.target.dataset.index])  !== '') {
                event.target.style.cursor = 'default';
                event.target.style.pointerEvents = "none";
            }

            if (currentPlayer === playerOne) {
                currentPlayer = playerTwo;
            } else {
                currentPlayer = playerOne;
            }

            function displayWinPlayerO() {
                
            }

            function displayWinPlayerX() {

            }

            function displayTie() {

            }
        }

        // Horizontal win conditions

        if (gameBoardArray[0] === playerOne.marker && gameBoardArray[1] === playerOne.marker && gameBoardArray [2] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[1] === playerTwo.marker && gameBoardArray [2] === playerTwo.marker){
            console.log('win!')
        } if (gameBoardArray[3] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [5] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[3] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [5] === playerTwo.marker) {
            console.log('win!')
        } if (gameBoardArray[6] === playerOne.marker && gameBoardArray[7] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[6] === playerTwo.marker && gameBoardArray[7] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
            console.log('win!')
        }

        // Vertical win conditions 

        if (gameBoardArray[0] === playerOne.marker && gameBoardArray[3] === playerOne.marker && gameBoardArray [6] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[3] === playerTwo.marker && gameBoardArray [6] === playerTwo.marker){
            console.log('win!')
        } if (gameBoardArray[1] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [7] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[1] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [7] === playerTwo.marker) {
            console.log('win!')
        } if (gameBoardArray[2] === playerOne.marker && gameBoardArray[5] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[2] === playerTwo.marker && gameBoardArray[5] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
            console.log('win!')
        }

        // Diagonal win conditions

        if (gameBoardArray[0] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
            console.log('win!')
        } if (gameBoardArray[2] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [6] === playerOne.marker) {
            console.log('win!')
        } if (gameBoardArray[2] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [6] === playerTwo.marker) {
            console.log('win!')
        } 

        // Tie condition

        if (!gameBoardArray.includes('')) {
            console.log()
        }   

    })
})();

