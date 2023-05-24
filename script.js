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
            canvasSquare.addEventListener('mouseover', hoverOnSquare);
            canvasSquare.addEventListener('mouseleave', exitSquare);
            canvasRow.appendChild(canvasSquare);
        }
        grid.appendChild(canvasRow);
    }
    canvas.appendChild(grid);
}

function hoverOnSquare(e){
    const square = e.target;
    square.classList.add('squareHover');
}

function exitSquare(e){
    const square = e.target;
    square.classList.remove('squareHover');
}

createGrid();