const board = document.querySelector('.container');

board.addEventListener('mouseover', (e) => {
  const cell = e.target.closest('.cell');
  if (cell && board.contains(cell)) cell.style.backgroundColor = 'red';
});
board.addEventListener('mouseout', (e) => {
  const cell = e.target.closest('.cell');
  if (cell && board.contains(cell)) cell.style.backgroundColor = 'purple';
});

function buildGrid(n) {
    board.style.setProperty('--size', n);
    board.innerHTML = '';

    const frag = document.createDocumentFragment();
    for (let i = 0; i < n * n; i++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        frag.appendChild(cell);
    }
    board.appendChild(frag);
}

function promptForSize() {
  const input = prompt('Enter grid size (1–100):', '16');
  if (input === null) return;
  const n = parseInt(input, 10);
  if (!Number.isFinite(n) || n < 1 || n > 100) {
    alert('Please enter a whole number between 1 and 100.');
    return;
  }
  buildGrid(n);
}

const btn = document.querySelector('#resize');
btn.addEventListener('click', promptForSize);

buildGrid(16);