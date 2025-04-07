const defaultColor = "black";
let selectedColor = defaultColor;
const gridContainer = document.querySelector(".grid-container");
let gridContainerSize = gridContainer.clientHeight;
let mouseDown = false;

const newButton = document.getElementById("new");
const clearButton = document.getElementById("clear");
const pickColorButton = document.getElementById("pick-color");
const rainbowButton = document.getElementById("rainbow");

function createBox (boxSize) {
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.height = boxSize + "px";
    box.style.width = boxSize + "px";
    box.ondragstart = (e) => e.preventDefault();
    box.addEventListener("mousedown", () => mouseDown = true);
    box.addEventListener("mousedown", () => colorBox(box, selectedColor));
    box.addEventListener("mouseup", () => mouseDown = false);
    box.addEventListener("mouseover", () => {
        if (mouseDown) {
            colorBox(box, selectedColor);
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

function isColor(color) {
    const s = new Option().style;
    s.color = color;
    return s.color !== "";
}

//Button functionality
newButton.addEventListener("click", () => {
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.remove());
    createBoxes(prompt("Pick grid size from 1 to 100: "));
});

clearButton.addEventListener("click", () => {
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.style.backgroundColor = "white");
})

pickColorButton.addEventListener("click", () => {
    const color = prompt("Type the color you want to use: ");
    if (isColor(color)) {
        selectedColor = color;
    }
    else {
        alert("Invalid color!");
    }
})

rainbowButton.addEventListener("click", () => {
    boxes = document.querySelectorAll(".box");
    boxes.forEach((box) => box.addEventListener("mouseover", () => {
        selectedColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
        console.log(selectedColor);
    }));
})

// Program starts with a 16x16 grid
createBoxes(16);