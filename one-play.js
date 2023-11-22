const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById("restartBtn");
const boxes = Array.from (document.getElementsByClassName("box"));

const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);

const startGame = () => {

    boxes.forEach(box => box.addEventListener('click', boxClicked));
};

function boxClicked(e) {

    const id = e.target.id;
    
    if(!spaces[id]) {

        spaces[id] = currentPlayer
        e.target.innerText = currentPlayer

        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
    }
}

restartBtn.addEventListener("click", restart);
function restart(){

    spaces.fill(null);

    boxes.forEach((box) => {
        box.innerText = "";
});
}

startGame();