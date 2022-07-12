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
    
    const math = () => {
        let mathInt = Math.floor(Math.random() * 3) + 0;
        let mathDec = Math.floor(Math.random() * 99) + 1;
        console.log(parseFloat(`${mathInt}.${mathDec}`));
    }

    if (window.matchMedia("(max-width: 800px)").matches){
        pipe.style.animation = `pipe-animation 1.5s infinite linear`;
        pipe.style.animationDelay = `${math}s` 
    } else{
        pipe.style.animation = `pipe-animation 1.7s infinite linear`;
    }
    
    
    const audioJump = document.querySelector('#audioJ');
    const audioBullet = document.querySelector('#audioB');
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

    const jump2 = () => {       
        mario.classList.add("mario-jump2");
        setTimeout(() => {           
            audioBullet.play();         
        }, 10);       
        setTimeout(() => {
            mario.classList.remove("mario-jump2");
        }, 740);
        return jump2;
    };
    

    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const bulletPosition = bullet.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
        
    if (counter >= 5){
        bullet.style.animation = `bullet-animation 3s infinite linear`;
        game.style.animation = `night 3s forwards`;
    }
    
    if (marioPosition > 130 && bulletPosition <= 80 && bulletPosition >= 50){
        jump2();      
    } else if (marioPosition < 130 && bulletPosition <= 80 && bulletPosition >= 50) {
        document.addEventListener("keydown", jump);
        document.addEventListener("click", jump);
    }

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70 || bulletPosition <= 80 && bulletPosition > 0 && marioPosition >= 80 && marioPosition <= 100)
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


pipe.addEventListener('animationiteration', function(){
    counter += 5;
    console.log(counter);
    points.textContent = `Pontos: ${counter}`;
})

