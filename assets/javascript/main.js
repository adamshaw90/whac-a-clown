
// Query DOM elements
function queryDomElements() {
    return {
        gameboarddiv: document.querySelector(".game-board"),
        score: document.querySelector(".score"),
        time: document.querySelector(".time"),
        startbutton: document.querySelector(".startbutton"),
        modal: document.querySelector(".modal"),
        highscore: document.querySelector(".highscore"),
        lastscore: document.querySelector(".lastscore"),
        modal2: document.querySelector(".modal2"),
        playagain: document.querySelector(".playagain"),
        home: document.querySelector(".home"),
        scared: document.querySelector(".scared"),
    };
}

// Variables
let timeleft;
let pscore = 0;
let maxscore = 0;
const { gameboarddiv, score, time, startbutton, modal, highscore, lastscore, modal2, playagain, home, scared } = queryDomElements();

// Create the game board
function createGameBoard() {
    for (let i = 1; i <= 16; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        gameboarddiv.appendChild(box);

        let pipe = document.createElement("img");
        pipe.classList.add("pipe");
        pipe.src = "assets/images/red-wave.webp";
        pipe.alt = "Water Element";
        box.appendChild(pipe);

        let clown = document.createElement("img");
        clown.classList.add("clown");
        clown.src = "assets/images/clown.webp";
        clown.setAttribute("name", "clown");
        clown.alt = "Clown Image";
        box.appendChild(clown);
    }
}

// Flash the screen when a clown is clicked
function handleClownClick(e) {
    if (e.target.name === "clown") {
        flashScreen();
        pscore++;
        updateScore();
    }
}

// Flash effect
function flashScreen() {
    setTimeout(() => {
        document.body.classList.toggle("flash");
    }, 100);
    document.body.classList.toggle("flash");
}

// Update score display
function updateScore() {
    score.textContent = pscore;
}

// Start the game
function startGame() {
    modal.classList.add("modalclose");
    resetGame();
    runTimer();
}

// Reset game variables
function resetGame() {
    timeleft = 60;
    pscore = 0;
    updateScore();
    updateTime();
}

// Run game timer
function runTimer() {
    let timer = setInterval(() => {
        if (timeleft === 0) {
            endGame(timer);
        } else {
            timeleft--;
            updateTime();
            activateRandomClown();
        }
    }, 900);
}

// Update time display
function updateTime() {
    time.textContent = timeleft < 10 ? "0" + timeleft : timeleft;
}

// End the game
function endGame(timer) {
    clearInterval(timer);
    modal2.classList.add("reveal");
    lastscore.textContent = pscore;
    if (pscore > maxscore) {
        maxscore = pscore;
    }
    highscore.textContent = maxscore;
}

// Activate a random clown animation
function activateRandomClown() {
    const face = document.querySelectorAll(".clown");
    let chooseface = Math.floor(Math.random() * face.length);
    let selectedClown = face[chooseface];
    
    selectedClown.style.pointerEvents = "all";
    selectedClown.style.animation = "faceup 2s ease";

    selectedClown.addEventListener("animationend", () => {
        selectedClown.style.pointerEvents = "all";
        selectedClown.style.animation = "facedown 0.5s ease";
        selectedClown.addEventListener("animationend", () => {
            selectedClown.style.pointerEvents = "none";
        });
    });
}

// Play again functionality
function playAgain() {
    modal2.classList.remove("reveal");
    resetGame();
    runTimer();
}

// Home button functionality
function goHome() {
    modal.classList.remove("modalclose");
    modal2.classList.remove("reveal");
}

// Scared button functionality
function scaredFunction() {
    modal.classList.remove("modalclose");

}

// Event Listeners
window.addEventListener("click", handleClownClick);
startbutton.addEventListener("click", startGame);
playagain.addEventListener("click", playAgain);
home.addEventListener("click", goHome);
scared.addEventListener("click", scaredFunction);

// Initialize game
createGameBoard();
