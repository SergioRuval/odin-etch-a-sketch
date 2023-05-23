const canvas = document.querySelector('#canvas');

function createGrid(){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(let i = 0; i < 16; i++){
        const canvasRow = document.createElement('div');
        canvasRow.classList.add('gridRow');
        for(let j = 0; j < 16; j++){
            const canvasSquare = document.createElement('div');
            canvasSquare.classList.add('gridSquare');
            canvasRow.appendChild(canvasSquare);
        }
        grid.appendChild(canvasRow);
    }
    canvas.appendChild(grid);
}

createGrid();