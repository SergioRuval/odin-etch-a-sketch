const canvas = document.querySelector('#canvas');

function createGrid(){
    for(let i = 0; i < 16; i++){
        const canvasSquare = document.createElement('div');
        canvasSquare.classList.add('gridSquare');
        canvas.appendChild(canvasSquare);
    }
}

createGrid();