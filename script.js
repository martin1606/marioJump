const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const game = document.querySelector(".game");
const resetb = document.querySelector("#reset");
const body = document.body; 
const buttonB = document.querySelector('#buttons');
const startB = document.querySelector('#start');
const resetB = document.querySelector('#reset');
const title = document.querySelector('.title');


if (window.matchMedia("(max-width: 800px)").matches){
    game.style.height = '85vh';
}

function reset(){
    location.reload(initiate());
}

function initiate(){
    buttonB.style.display = 'none';
    if (window.matchMedia("(max-width: 800px)").matches){
        pipe.style.animation = `pipe-animation 1.5s infinite linear`;
    } else{
        pipe.style.animation = `pipe-animation 1.7s infinite linear`;
    }
    pipe.style.animationDelay = '1s';
    
    const jump = () => {
        mario.classList.add("mario-jump");
        
        setTimeout(() => {
            mario.classList.remove("mario-jump");
        }, 740);
        return jump;
    };
    

    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
            
    if (pipePosition < 10 && pipePosition > 0){
        let counter = 0;
        counter += parseInt(1);  
        console.log((counter)); 
    }   

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70)
            {
                pipe.style.animation = "none";
                pipe.style.left = `${pipePosition}px`;

                mario.style.animation = 'mario-die 2s';

                mario.src = "./img/mario-game-over.png";
                if (window.matchMedia("(max-width: 800px)").matches){
                    mario.style.width = "45px";
                }
                else{
                    mario.style.width = "75px";
                }
                mario.style.marginLeft = "50px";
            
                clearInterval(loopGame); 
                
                startB.style.display = 'none';
                buttonB.style.display = 'grid';
                title.textContent = 'GAME OVER';

    }}, 10);
            
    document.addEventListener("keydown", jump);
    document.addEventListener("click", jump);
};
