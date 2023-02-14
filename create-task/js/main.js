const cells = document.querySelectorAll('.cell');
const message = document.getElementById('message');
const resetButton = document.getElementById('reset');
let currentPlayer = 'x';
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(event) {
    const cell = event.target;
    const cellIndex = parseInt(cell.getAttribute('id'));

    if (cell.classList.contains('x') || cell.classList.contains('o') || !gameActive) {
        return;
    }

    cell.classList.add(currentPlayer);
    cell.textContent = currentPlayer;

    if (checkForWin()) {
        endGame(false);
    } else if (checkForDraw()) {
        endGame(true);
    } else {
        currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
        message.textContent = `It's ${currentPlayer}'s turn`;
    }
}

function checkForWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentPlayer);
        });
    });
}

function checkForDraw() {
    return Array.from(cells).every(cell => {
        return cell.classList.contains('x') || cell.classList.contains('o');
    });
}

function endGame(draw) {
    gameActive = false;

    if (draw) {
        message.textContent = "It's a draw!";
    } else {
        message.textContent = `${currentPlayer} wins!`;
    }
}

function handleResetButtonClick() {
    cells.forEach(cell => {
        cell.classList.remove('x');
        cell.classList.remove('o');
        cell.textContent = '';
    });

    currentPlayer = 'x';
    gameActive = true;
    message.textContent = `It's ${currentPlayer}'s turn`;
}

cells.forEach(cell => {
    cell.addEventListener('click', handleCellClick);
});

resetButton.addEventListener('click', handleResetButtonClick);

message.textContent = `It's ${currentPlayer}'s turn`;