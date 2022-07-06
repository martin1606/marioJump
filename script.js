const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");
const bullet = document.querySelector(".bullet");
const game = document.querySelector(".game");
const resetb = document.querySelector("#reset");
const body = document.body; 
const buttonB = document.querySelector('#buttons');
const startB = document.querySelector('#start');
const resetB = document.querySelector('#reset');
const title = document.querySelector('.title');
var counter = 0;
const points = document.querySelector('#points');

if (window.matchMedia("(max-width: 800px)").matches){
    game.style.height = '85vh';
}

function reset(){
    location.reload(initiate());
}

points.style.display = 'none';

function initiate(){
    points.style.display = 'flex';
    buttonB.style.display = 'none';
    points.style.display = 'flex'
    
    const audio = document.querySelector('#audio');
    audio.play();
    

    if (window.matchMedia("(max-width: 800px)").matches){
        pipe.style.animation = `pipe-animation 1.5s infinite linear`;
    } else{
        pipe.style.animation = `pipe-animation 1.7s infinite linear`;
    }
    pipe.style.animationDelay = '1s';
    
    const audioJump = document.querySelector('#audioJ');
    audioJump.volume = 0.3;

    const jump = () => {
        
        mario.classList.add("mario-jump");
        setTimeout(() => {
            
            audioJump.play();
            
        }, 10);
        
        
        setTimeout(() => {
            mario.classList.remove("mario-jump");
        }, 740);
        return jump;
    };
    

    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const bulletPosition = bullet.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
       
           
    if (pipePosition < 15 && pipePosition > 0){
        counter ++;
        console.log(counter);
        
    }   
        points.textContent = `Pontos: ${counter}`
        
    if (counter >= 20){
        bullet.style.animation = `bullet-animation 3s infinite linear`;
        game.style.animation = `night 3s forwards`;
    }
    

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70 || bulletPosition <= 80 && bulletPosition > 0 && marioPosition > 150)
            {
                pipe.style.animation = "none";
                bullet.style.animation = "none";
                pipe.style.left = `${pipePosition}px`;
                bullet.style.left = `${bulletPosition}px`;

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
                
                audio.pause();
                const gameOvera = document.querySelector('#audioGO');
                gameOvera.play();
            
                startB.style.display = 'none';
                buttonB.style.display = 'grid';
                title.textContent = 'GAME OVER';
                 

                
                    

    }}, 10);
            
    document.addEventListener("keydown", jump);
    document.addEventListener("click", jump);
};
