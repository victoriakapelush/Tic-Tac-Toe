const grid = document.getElementById('grid');

for (let i = 0; i < 9; i++) {
    const cells = document.createElement('buttons');
    grid.appendChild(cells);
    cells.setAttribute('class', 'cell');
    cells.style.border = "1px solid black";
}
