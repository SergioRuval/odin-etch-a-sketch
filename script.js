const canvas = document.querySelector('#canvas');

function createGrid(){
    for(let i = 0; i < 16; i++){
        const canvasRow = document.createElement('div');
        canvasRow.classList.add('gridRow');
        for(let j = 0; j < 16; j++){
            const canvasSquare = document.createElement('div');
            canvasSquare.classList.add('gridSquare');
            canvasRow.appendChild(canvasSquare);
        }
        canvas.appendChild(canvasRow);
    }
}

createGrid();