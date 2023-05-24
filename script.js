const canvas = document.querySelector('#canvas');

function initializeCanvas(){
    createGrid(16);
}

function createGrid(gridSize){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for(let i = 0; i < gridSize; i++){
        const canvasRow = document.createElement('div');
        canvasRow.classList.add('gridRow');
        for(let j = 0; j < gridSize; j++){
            const canvasSquare = document.createElement('div');
            canvasSquare.classList.add('gridSquare');
            canvasSquare.addEventListener('mouseover', hoverOnSquare);
            // canvasSquare.addEventListener('mouseout', exitSquare);
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

function paintSquare(e){
    const square = e.target;
    square.style.backgroundColor = "aqua";
}

function changeGridSize(e){
    let newSize = prompt("Ingresa un tamaño entre 5 y 100");
    newSize = Number.parseInt(newSize);
    while(isNaN(newSize) || newSize < 5 || newSize > 100){
        newSize = prompt("Cantidad no válida, ingresa un nuevo número");
        newSize = Number.parseInt(newSize);
    }
    
    const lastChild = document.querySelector('#canvas>.grid');
    canvas.removeChild(lastChild);
    createGrid(newSize);
}

function clearGrid(e){
    const paintedSquares = document.querySelectorAll(".squareHover");
    paintedSquares.forEach(square => {
        square.classList.remove("squareHover");
    });
}

initializeCanvas();