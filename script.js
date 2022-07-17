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
const bowser2 = document.querySelector('.bowser2');
const fireBall = document.querySelector('.fireBall');
const hammer = document.querySelector('.hammer');
const mountain = document.querySelector('.mountain');
const marioPrincess = document.querySelector('.marioPrincess');
const castle = document.querySelector('.castle');
const end = document.querySelector('.end');
const texto = document.querySelector('.texto');
const gameOvera = document.querySelector('#audioGO');
const endA = document.querySelector('#end');

var counter = 0;
const points = document.querySelector('#points');

if (window.matchMedia("(max-width: 800px)").matches){
    game.style.height = '85vh';
}

function reset(){
    location.reload(initiate());
}

texto.style.display = 'none';
points.style.display = 'none';

function pre (){
    title.style.display = 'none';
    startB.style.display = 'none';
    resetB.style.display = 'none';
    texto.style.display = 'flex';
    setTimeout(() => {
        initiate();
        texto.style.display = 'none';
        buttonB.style.display = 'none';
        startB.style.display = '';
        resetB.style.display = '';
        title.style.display = 'flex';
    }, 2000);
}



function initiate(){
    points.style.display = 'flex';
    points.style.display = 'flex'

    mountain.classList.add('mountains');
    
    
    const audio = document.querySelector('#audio');
    
    audio.play();
    
    
    function timePipe ()  {
    if (window.matchMedia("(max-width: 800px)").matches){     
        pipe.style.animation = `pipe-animation 2s infinite linear`;        
    } else{    
        pipe.style.animation = `pipe-animation 2.3s infinite linear`;
    }};
    timePipe();
    pipe.style.animationDelay = '1s'
    
       
     
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
        }, 910);
        return jump;
    };

    const jump2 = () => {       
        mario.classList.add("mario-jump2");
        bulletDies(bulletStart); 
        setTimeout(() => {           
            audioBullet.play();        
        }, 10);       
        setTimeout(() => {
            mario.classList.remove("mario-jump2");
        }, 910);
        return jump2;
    };

    function bulletDies(callback){
        setTimeout(() => {
            callback();
        }, 2000);
        bullet.classList.remove('bulletNormal');
        bullet.classList.add('bulletDie');
    }
    function bulletStart (){
        bullet.classList.remove('bulletDie');
        bullet.classList.add('bulletNormal');
    }
        function stopPipe(callback){
            setTimeout(() => {
                callback();
            }, 5000);
            pipe.style.animation = "none";  
        }
        function startPipe (){
            if (gameOvera.duration > 0 && !gameOvera.paused){
                console.log('si');
            } else {
                timePipe();
            }
        }
    bowser.addEventListener('animationstart', () => {
        stopPipe(startPipe);
    });

    bowser2.addEventListener('animationstart', () => {
        stopPipe(startPipe);
    });
    fireBall.addEventListener('animationend', () => {
        setTimeout(() => {
            bowser2.classList.remove("bowser2Fire");
        }, 2500);
    });

    //FIREBALL
    fireBall.style.animationDelay = '2.3s';

        
    const loopGame = setInterval(() => {
        const pipePosition = pipe.offsetLeft;
        const bulletPosition = bullet.offsetLeft;
        const hammerPosition = hammer.offsetLeft;
        const fireBallPosition = fireBall.offsetLeft;
        const marioPosition = window
            .getComputedStyle(mario)
            .bottom.replace("px", "");
        
        
        
        if(counter >= 100){
            pipe.style.animation = 'none';
            clearInterval(loopGame);
            castle.classList.add('castleCome');
            mario.classList.add('marioFinish');
            bullet.addEventListener('animationiteration', () => {
                bullet.style.animation = 'none';
            });
            console.log('finish');
            mario.style.animationDelay = '12s';
            castle.style.animationDelay = '2s';
            end.classList.add('endAppear');
            end.style.animationDelay = '15s';
            setTimeout(() => {
                marioPrincess.classList.add('marioPrincessEnd');
                marioPrincess.style.animationDelay = '2s';
                mario.style.display = 'none';
                castle.style.display = 'none';
            }, 17000);
            setTimeout(() => {
                startB.style.display = 'none';
                buttonB.style.display = 'grid';
                title.textContent = 'YOU WIN!!';
                audio.pause();
                endA.play();
            }, 19000);
        }
         
        if (counter >= 35){
            bullet.classList.add('bulletNormal');
            hammer.style.animationDelay = '1.6s'; 
            

            if (marioPosition > 130 && bulletPosition <= 80 && bulletPosition >= 50){
                jump2();    
            } else if (marioPosition < 130 && bulletPosition <= 80 && bulletPosition >= 50) {
                document.addEventListener("keydown", jump);
                document.addEventListener("click", jump);
            }        
        }


        if (counter >= 25 && counter <= 29){
            bowser2.classList.add("bowser2Fire");
            fireBall.classList.add("fireBallDown");
        }

        if (counter >= 50 && counter <= 54){
            bowser2.classList.add("bowser2Fire");
            fireBall.classList.remove("fireBallDown");
            fireBall.classList.add("fireBallUp");
        }

        if (counter >= 75 && counter <= 79){
            bowser.classList.add("bowserA");
            hammer.classList.add("hammerR");
        }

        

        if (pipePosition <= 80 && pipePosition > 0 && marioPosition < 70 || 
            bulletPosition <= 80 && bulletPosition > 0 && marioPosition >= 80 && marioPosition <= 100 ||
            hammerPosition <= 80 && hammerPosition > 0 && marioPosition < 40 ||
            fireBallPosition <= 80 && fireBallPosition > 0 && marioPosition < 40
            )
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



