const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

var timeRandom = setInterval(() => {
    console.log(timeRandom);
    timeRandom = Math.floor((Math.random()* 2) + 1);
    pipe.style.animation = `pipe-animation ${timeRandom}s infinite linear`;
}, 2000);


const jump = () => {
    mario.classList.add("mario-jump");
    
    setTimeout(() => {
        mario.classList.remove("mario-jump");
    }, 500);
};




    

const loopGame = setInterval(() => {

    if (window.matchMedia("(min-width: 800px)")){
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
        


        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'mario-die 2s';

        mario.src = "./img/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";
    
        clearInterval(loopGame);
        
        }}
    if (window.matchMedia("(max-width: 800px)")){
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "")
        

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'mario-die 2s';

        mario.src = "./img/mario-game-over.png";
        mario.style.width = "33px";
        mario.style.marginLeft = "50px";
            
        
        clearInterval(loopGame);
        
    }
}}, 10);

document.addEventListener("keydown", jump);