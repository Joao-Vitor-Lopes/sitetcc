class Computer{
    constructor() {}

    play(spaces, boxes, level) {
        switch (level) {

            case 1:
                this.playInEasyLevel(spaces, boxes);
                break;
            case 2:
                this.playInMiddleLevel(spaces, boxes);
            default:
        }
    }

    playInEasyLevel(spaces, boxes) {
        boxes[this.getRandomAvailableSpace(spaces)].click();
    }

    playInMiddleLevel(spaces, boxes){
        if(this.getRandomAvailableSpace(spaces).length === 9){
            boxes[this.getRandomAvailableSpace(spaces)].click();
        }
    }

    getRandomAvailableSpace(spaces){
        const availableSpaces = (() => {
            const aux = [];
            for(let i = 0; i < spaces.length; i++){
                if(!spaces[i]) aux.push(i);
            }
            return aux;
        })();
    
       return availableSpaces[Math.floor(Math.random() * availableSpaces.length)];
    }
}

const playerText = document.getElementById("playerText");
const restartBtn = document.getElementById("restartBtn");
const boxes = Array.from(document.getElementsByClassName("box"));
const winningIndicator = getComputedStyle(document.body).getPropertyValue("--winning-blocks"
);

    const xPointsText = document.getElementById("x-points");
    const oPointsText = document.getElementById("o-points");
    const levelSelect = document.getElementById("difficulty-select")




const O_TEXT = "O";
const X_TEXT = "X";
let currentPlayer = X_TEXT;
let spaces = Array(9).fill(null);
let level = 1;
const computer = new Computer();

levelSelect.addEventListener('change', (e) => {
    
    level = Number(e.target.value);
    console.log(level);
});

const startGame = () => {
    console.log("chegou")
    let teste = boxes.forEach((box) => box.addEventListener("click", boxClicked));
};

function boxClicked(e) {

    const id = e.target.id;
    
    if (!spaces[id] && !playerHasWon()) {

        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;



        if(playerHasWon()){
        playerText.innerText = `${currentPlayer} Ganhou!`;
        const winningBlocks = playerHasWon();
        winningBlocks.map(
            (box) => (boxes[box].style.backgroundColor = winningIndicator)
           );
           addPointsToWinner();
        }else if(isDraw()){
            playerText.innerText = "Empate!";

        }

        currentPlayer = currentPlayer === X_TEXT ? O_TEXT : X_TEXT;
        if(currentPlayer === O_TEXT && getRemainingSpaces().length){
       computer.play(spaces, boxes, level);
        }
    }
}

const winningCombos = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
     
];

function playerHasWon(){
    for(const combo of winningCombos){
        const [a, b, c] = combo;

        if(spaces[a] && spaces[a] === spaces[b] && spaces[a] === spaces[c]){
            return combo;
        }
    }
    return false;
}



function addPointsToWinner(){
    if(currentPlayer === X_TEXT)
    xPointsText.innerText = Number(xPointsText.innerText) + 1;
else    oPointsText.innerText = Number(xPointsText.innerText) + 1;

}

function isDraw(){
    for(let i = 0; i < spaces.length; i++){
      if(spaces[i] === null) return false;
    }
    return true
}

function getRemainingSpaces(){
    return spaces.filter((space) => !space);
}

restartBtn.addEventListener("click", restart);

function restart(){

    spaces.fill(null);

    boxes.forEach((box) => {
        box.innerText = "";
        box.style.backgroundColor = "";
});

    playerText.innerText = "JOGO DA VELHA"
}

startGame();