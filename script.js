const gameBoardContainer = document.querySelector('.game-board-container');
const congratulationMessage = document.querySelector(".congratulation-message");
const restartButton = document.querySelector('.restart-button');
const startGameForm = document.querySelector('.start-game-form');
const startGameButton = document.querySelector('.start-game-button');
let currentPlayer;
let playerOne; // Move playerOne outside the startGameButton event listener
let playerTwo; // Move playerTwo outside the startGameButton event listener

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

function startGame(playerOneObj, playerTwoObj) {
    playerOne = playerOneObj; // Assign playerOneObj to the global playerOne variable
    playerTwo = playerTwoObj; // Assign playerTwoObj to the global playerTwo variable
    currentPlayer = playerOne;
    gameBoardArray = ['', '', '', '', '', '', '', '', ''];
    const gridCells = document.querySelectorAll('.grid-cell');
    gridCells.forEach((cell, index) => {
        cell.innerHTML = gameBoardArray[index];
        cell.style.cursor = 'pointer';
        cell.style.pointerEvents = 'auto';
    });
    startGameForm.style.display = 'none';
    gameBoardContainer.style.display = 'inherit';
    congratulationMessage.innerHTML = '';
    restartButton.style.display = 'none';
    gameBoardContainer.style.cursor = 'pointer';
    gameBoardContainer.style.pointerEvents = 'auto';
}

const gameController = (function() {
    gameBoardContainer.style.display = 'none';
    startGameButton.addEventListener('click', function(event) {
        event.preventDefault();

        const playerOneName = document.getElementById('playerO').value;
        const playerTwoName = document.getElementById('playerX').value;

        const playerOneObj = createPlayer(playerOneName, 'O');
        const playerTwoObj = createPlayer(playerTwoName, 'X');

        startGame(playerOneObj, playerTwoObj);
    })

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
        gameBoardArray = ['', '', '', '', '', '', '', '', ''];
        startGame(playerOne, playerTwo);
    })
})();
