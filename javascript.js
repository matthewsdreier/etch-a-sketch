let createBoard = function(sideLength, board) {

    while(board.firstChild) {
        board.removeChild(board.lastChild);
    }

    for (let i = 0; i < sideLength; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        board.appendChild(row);
        for (let j = 0; j < sideLength; j++) {
            const square = document.createElement("div")
            square.classList.add("square");
            square.addEventListener("mouseenter", e => {
                square.classList.add("colored");
            })
            row.appendChild(square);
        }
    }
}

let board = document.querySelector(".board");
let sideLengthButton = document.querySelector("button");

createBoard(4, board);

sideLengthButton.addEventListener("click", e => {
    let sideLength = prompt("Enter the side length for the grid:");
    if (isNaN(sideLength)) {
        alert("Please enter a number.");
        sideLength = prompt("Enter the side length for the grid:");
    } else if (sideLength > 100 || sideLength < 0) {
        alert("Please enter a number between 1 and 100");
        sideLength = prompt("Enter the side length for the grid:");
    } else {
        createBoard(sideLength, board);
    }
});