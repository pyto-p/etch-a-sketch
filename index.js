const container = document.querySelector(".grid-container");
let sizeOfPix = prompt("Enter the size of canvas: ");

for (i = 1; i <= sizeOfPix*sizeOfPix; i++) {
    let gridChild = document.createElement("div");
    gridChild.style.width = `calc(100% / ${sizeOfPix})`;
    gridChild.style.height = `calc(100% / ${sizeOfPix})`;
    gridChild.classList.add("grid-children");
    container.appendChild(gridChild);
}

const drawButton = document.querySelector(".draw-button");
const eraseButton = document.querySelector(".erase-button");
const clearButton = document.querySelector(".clear-button");
const gridChildren = document.querySelectorAll(".grid-children");

drawButton.addEventListener("click", () => {
    let isMouseDown = false;    
    gridChildren.forEach((element) => {
        element.addEventListener("mousedown", () => {
            isMouseDown = true;
        });
        element.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
        element.addEventListener("mousemove", () => {
            if (isMouseDown) {
                // Action to perform while the left mouse button is held down
                paintGrid(element);
            }
        });
    });
})

function paintGrid(element) {
    element.style.backgroundColor = 'black';
}

eraseButton.addEventListener("click", () => {    
    gridChildren.forEach((element) => {
        element.addEventListener("mousedown", () => {
            isMouseDown = true;
        });
        element.addEventListener("mouseup", () => {
            isMouseDown = false;
        });
        element.addEventListener("mousemove", () => {
            if (isMouseDown) {
                // Action to perform while the left mouse button is held down
                eraseGrid(element);
            }
        });
    });
})

function eraseGrid(element) {
    element.style.backgroundColor = 'white';
}

clearButton.addEventListener("click", () => {
    clearGrid(gridChildren);
})

function clearGrid(element) {
    element.forEach(eraseGrid);
}