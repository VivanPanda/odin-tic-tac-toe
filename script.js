const gameBoardContainer = document.querySelector('.game-board-container');
const congratulationMessage = document.querySelector(".congratulation-message")
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
                congratulationMessage.innerHTML = playerOne.marker + ' won the game.'
            }

            function displayWinPlayerX() {
                congratulationMessage.innerHTML = playerTwo.marker + ' won the game.'
            }

            function displayTie() {
                congratulationMessage.innerHTML = 'It was a tie, no one won the game.'
            }
        }

        function checkWinCondition() {
            // Horizontal win conditions

            if (gameBoardArray[0] === playerOne.marker && gameBoardArray[1] === playerOne.marker && gameBoardArray [2] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[1] === playerTwo.marker && gameBoardArray [2] === playerTwo.marker){
                displayWinPlayerX();
            } if (gameBoardArray[3] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [5] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[3] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [5] === playerTwo.marker) {
                displayWinPlayerX();
            } if (gameBoardArray[6] === playerOne.marker && gameBoardArray[7] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[6] === playerTwo.marker && gameBoardArray[7] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
                displayWinPlayerX();
            }

            // Vertical win conditions 

            if (gameBoardArray[0] === playerOne.marker && gameBoardArray[3] === playerOne.marker && gameBoardArray [6] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[3] === playerTwo.marker && gameBoardArray [6] === playerTwo.marker){
                displayWinPlayerX();
            } if (gameBoardArray[1] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [7] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[1] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [7] === playerTwo.marker) {
                displayWinPlayerX();
            } if (gameBoardArray[2] === playerOne.marker && gameBoardArray[5] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[2] === playerTwo.marker && gameBoardArray[5] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
                displayWinPlayerX();
            }

            // Diagonal win conditions

            if (gameBoardArray[0] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [8] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[0] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [8] === playerTwo.marker) {
                displayWinPlayerX();
            } if (gameBoardArray[2] === playerOne.marker && gameBoardArray[4] === playerOne.marker && gameBoardArray [6] === playerOne.marker) {
                displayWinPlayerO();
            } if (gameBoardArray[2] === playerTwo.marker && gameBoardArray[4] === playerTwo.marker && gameBoardArray [6] === playerTwo.marker) {
                displayWinPlayerX();
            } 
        }

        // Tie condition

        function tieCondition() {
            if (!checkWinCondition(playerOne.marker) && !checkWinCondition(playerTwo.marker)) {
                if (!gameBoardArray.includes('')) {
                    displayTie();
                }
            }
        }


        tieCondition();
    })
})();

