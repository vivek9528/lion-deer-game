score = 0;
touch = true;

audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        deer = document.querySelector('.deer');
        deer.classList.add('animatedeer');
        setTimeout(() => {
            deer.classList.remove('animatedeer')
        }, 700);
    }
    if (e.keyCode == 39) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = deerX + 112 + "px";
    }
    if (e.keyCode == 37) {
        deer = document.querySelector('.deer');
        deerX = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
        deer.style.left = (deerX - 112) + "px";
    }
}

setInterval(() => {
    deer = document.querySelector('.deer');
    gameOver = document.querySelector('.gameOver');
    lion = document.querySelector('.lion');

    dx = parseInt(window.getComputedStyle(deer, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(deer, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(lion, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(lion, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        lion.classList.remove('lion')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && touch) {
        score += 1;
        updatescore(score);
        touch = false;
        setTimeout(() => {
            touch = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(lion, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            lion.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updatescore(score) {
    scorecount.innerHTML = "Your Score: " + score
}