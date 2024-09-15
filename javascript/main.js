const gameboarddiv = document.querySelector(".game-board");
const score = document.querySelector(".score");
const time = document.querySelector(".time");
const startbutton = document.querySelector(".startbutton");
const modal = document.querySelector(".modal");
const highscore = document.querySelector(".highscore");
const lastscore = document.querySelector(".lastscore");
const modal2 = document.querySelector(".modal2");
const playagain = document.querySelector(".playagain");
const home = document.querySelector(".home");
const scared = document.querySelector(".scared");


let timeleft;
let pscore = 0;
let maxscore = 0;

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

window.addEventListener("click", (e) => {
    if (e.target.name === "clown") {
        setTimeout(() => {
            document.body.classList.toggle("flash");
        }, 100);
        document.body.classList.toggle("flash");
        pscore = pscore + 1;
        score.textContent = pscore;
    }
});

startbutton.addEventListener("click",()=>{
    modal.classList.add("modalclose");
    timeleft = 05
    pscore = 0
    score.textContent = pscore
    time.textContent = timeleft

    let timer = setInterval(() => {
        time.textContent = timeleft;

        if (timeleft === 0) {
            modal2.classList.add("reveal")
            lastscore.textContent = pscore;

            if (pscore > maxscore) {
                maxscore = pscore
                highscore.textContent = maxscore;
            }

            else {
                highscore.textContent = maxscore;
            }

            clearInterval(timer);
        }

        else {timeleft--;
        time.textContent = timeleft < 10 ? "0" + timeleft : timeleft;
        const face = document.querySelectorAll(".clown")

        let chooseface = Math.floor(Math.random()*face.length);
        face[chooseface].style.pointerEvents = "all"
        face[chooseface].style.animation = "faceup 2s ease"
        face[chooseface].addEventListener("animationend", () => {
            face[chooseface].style.pointerEvents = "all"
            face[chooseface].style.animation = "facedown 0.5s ease"
            face[chooseface].addEventListener ("animationend", () => {
                face[chooseface].style.pointerEvents = "none";
            });
    })
}
    }, 1000);
});

playagain.addEventListener("click",()=>{
    modal2.classList.remove("reveal");
    timeleft = 05
    pscore = 0
    score.textContent = pscore
    time.textContent = timeleft

    let timer = setInterval(() => {
        time.textContent = timeleft;

        if (timeleft === 0) {
            modal2.classList.add("reveal")
            lastscore.textContent = pscore;

            if (pscore > maxscore) {
                maxscore = pscore
                highscore.textContent = maxscore;
            }

            else {
                highscore.textContent = maxscore;
            }

            clearInterval(timer);
        }

        else {timeleft--;
        time.textContent = timeleft < 10 ? "0" + timeleft : timeleft;
        const face = document.querySelectorAll(".clown")

        let chooseface = Math.floor(Math.random()*face.length);
        face[chooseface].style.pointerEvents = "all"
        face[chooseface].style.animation = "faceup 2s ease"
        face[chooseface].addEventListener("animationend", () => {
            face[chooseface].style.pointerEvents = "all"
            face[chooseface].style.animation = "facedown 0.5s ease"
            face[chooseface].addEventListener ("animationend", () => {
                face[chooseface].style.pointerEvents = "none";
            });
    })
}
    }, 1000);
});

home.addEventListener("click",()=>{
    modal.classList.remove("modalclose");
    modal2.classList.remove("reveal");
});

scared.addEventListener("click",()=>{
    modal.classList.remove("modalclose");
});