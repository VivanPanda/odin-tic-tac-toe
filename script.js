const gameBoardContainer = document.querySelector('.game-board-container');
const congratulationMessage = document.querySelector(".congratulation-message");
const restartButton = document.querySelector('.restart-button')
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
    const playerOne = createPlayer('Player O', 'O');
    const playerTwo = createPlayer('Player X', 'X');
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
                congratulationMessage.innerHTML = playerOne.name + ' won the game.'
            }

            function displayWinPlayerX() {
                congratulationMessage.innerHTML = playerTwo.name + ' won the game.'
            }

            function displayTie() {
                congratulationMessage.innerHTML = 'It was a tie, no one won the game.'
            }

            function checkWinCondition(marker) {
                // Horizontal win conditions
                if (
                    (gameBoardArray[0] === marker && gameBoardArray[1] === marker && gameBoardArray[2] === marker) ||
                    (gameBoardArray[3] === marker && gameBoardArray[4] === marker && gameBoardArray[5] === marker) ||
                    (gameBoardArray[6] === marker && gameBoardArray[7] === marker && gameBoardArray[8] === marker)
                ) {
                    restartButton.style.display = 'initial';
                    gameBoardContainer.style.cursor = 'default';
                    gameBoardContainer.style.pointerEvents = "none";
                    return true;
                }

                // Vertical win conditions
                if (
                    (gameBoardArray[0] === marker && gameBoardArray[3] === marker && gameBoardArray[6] === marker) ||
                    (gameBoardArray[1] === marker && gameBoardArray[4] === marker && gameBoardArray[7] === marker) ||
                    (gameBoardArray[2] === marker && gameBoardArray[5] === marker && gameBoardArray[8] === marker)
                ) {
                    restartButton.style.display = 'initial';
                    gameBoardContainer.style.cursor = 'default';
                    gameBoardContainer.style.pointerEvents = "none";
                    return true;
                }

                // Diagonal win conditions
                if (
                    (gameBoardArray[0] === marker && gameBoardArray[4] === marker && gameBoardArray[8] === marker) ||
                    (gameBoardArray[2] === marker && gameBoardArray[4] === marker && gameBoardArray[6] === marker)
                ) {
                    restartButton.style.display = 'initial';
                    gameBoardContainer.style.cursor = 'default';
                    gameBoardContainer.style.pointerEvents = "none";
                    return true;
                }
                return false;
            }

            function checkTieCondition() {
                if (!gameBoardArray.includes('') && !checkWinCondition(playerOne.marker) && !checkWinCondition(playerTwo.marker)) {
                    restartButton.style.display = 'initial';
                    gameBoardContainer.style.cursor = 'default';
                    gameBoardContainer.style.pointerEvents = "none";
                    displayTie();
                }
            }

            if (checkWinCondition(playerOne.marker)) {
                displayWinPlayerO();
            } else if (checkWinCondition(playerTwo.marker)) {
                displayWinPlayerX();
            } else {
                checkTieCondition();
            }
        }
    })

    restartButton.addEventListener('click', () => {
        location.reload();
    })
})();