let createBoard = function(sideLength, board) {
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

board = document.querySelector(".board");
sideLength = 4;

createBoard(sideLength, board);