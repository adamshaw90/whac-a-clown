const gameboarddiv = document.querySelector(".game-board")
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startbutton = document.querySelector("'.modal button");
const modal = document.querySelector(".modal");
const highscore = document.querySelector(".highscore");
const gameover = document.querySelector(".display h2");


for (let i = 1; i <= 16; i++) 
    {
    let box = document.createElement("div")
    box.classList.add("box")
    gameboarddiv.appendChild(box);
    
    let pipe = document.createElement("img")
    pipe.classList.add("pipe")
    pipe.src = "assets/images/red-wave.png";
    box.appendChild(pipe);

    let clown = document.createElement("img")
    clown.classList.add("clown")
    clown.src = "assets/images/clown.png";
    clown.setAttribute("name", "clown");
    box.appendChild(clown);
}