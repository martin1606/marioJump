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
const bowser = document.querySelector('.bowser');
const hammer = document.querySelector('.hammer');
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
    
    
    function timePipe ()  {
    if (window.matchMedia("(max-width: 800px)").matches){     
        pipe.style.animation = `pipe-animation 2s infinite linear`;        
    } else{    
        pipe.style.animation = `pipe-animation 2.3s infinite linear`;
    }};
    timePipe();
       
     
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

    const bulletDies = () => { 
            
        setTimeout(() => {
            bullet.classList.remove("bulletDie");
        }, 800);
        return bulletDies;
    };
    
    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const bulletPosition = bullet.offsetLeft;
        const hammerPosition = hammer.offsetLeft;
        const marioPosition = +window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
        
    if (counter >= 20){
        bullet.classList.add("bulletNormal");
        
        hammer.style.animationDelay = '1.6s';       
        if (marioPosition > 130 && bulletPosition <= 80 && bulletPosition >= 50){
            jump2(); 
            bulletDies();     
        } else if (marioPosition < 130 && bulletPosition <= 80 && bulletPosition >= 50) {
            document.addEventListener("keydown", jump);
            document.addEventListener("click", jump);
        }
        
    }

    if (counter >= 40){
        bowser.classList.add("bowserA");
        hammer.classList.add("hammerR");
    }
    
    

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70 || 
            bulletPosition <= 80 && bulletPosition > 0 && marioPosition >= 80 && marioPosition <= 100 ||
            hammerPosition <= 80 && hammerPosition > 0 && marioPosition < 40)
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

const math = () => {
    let mathInt = Math.floor(Math.random() * 5) + 0;
    let mathDec = Math.floor(Math.random() * 5) + 1;
    var number = parseFloat(`${mathInt}.${mathDec}`);
    return number;
};

pipe.addEventListener('animationiteration', function(){
    counter += 5;
    console.log(counter);
    points.textContent = `Pontos: ${counter}`;
    console.log(math());
})



