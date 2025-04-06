const defaultColor = "#ffffff";
let selectedColor = defaultColor;
const gridContainer = document.querySelector(".grid-container");
let gridContainerSize = gridContainer.clientHeight;
let mouseDown = false;

const newButton = document.getElementById("new");
const clearButton = document.getElementById("clear");
const pickColorButton = document.getElementById("pick color");
const rainbowButton = document.getElementById("rainbow");

function createBox (boxSize) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = boxSize + "px";
    box.style.width = boxSize + "px";
    box.ondragstart = (e) => e.preventDefault();
    box.addEventListener("mousedown", () => mouseDown = true);
    box.addEventListener("mousedown", () => colorBox(box));
    box.addEventListener("mouseup", () => mouseDown = false);
    box.addEventListener("mouseover", () => {
        if (mouseDown) {
            colorBox(box);
        };
    });
    gridContainer.appendChild(box);
}

function createBoxes(gridSize) {
    if (gridSize < 1 || gridSize > 100) {
        alert("Error: Invalid Choice");
        return;
    }
    let boxSize = gridContainerSize / gridSize;
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            createBox(boxSize);
        }
    }
}

function colorBox(box, color) {
    box.style.backgroundColor = color;
    console.log("Box colored");
}

// Program starts with a 16x16 grid
createBoxes(16);

