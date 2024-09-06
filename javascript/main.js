const gameboarddiv = document.querySelector(".game-board")

for (let i = 1; i <= 16; i++) 
    {
    let box = document.createElement("div")
    box.classList.add("box")
    gameboarddiv.appendChild(box);
    
    let pipe = document.createElement("img")
    pipe.classList.add("pipe")
    pipe.src = "assets/images/drain.png"
    box.appendChild(pipe);
}