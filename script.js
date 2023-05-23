const canvas = document.querySelector('#canvas');

function createGrid(){
    for(let i = 0; i < 16; i++){
        const canvasSquare = document.createElement('div');
        canvasSquare.style.border = "1px solid black";
        canvasSquare.style.height = "5px";
        canvasSquare.style.width = "5px";
        canvas.appendChild(canvasSquare);
    }
}

createGrid();