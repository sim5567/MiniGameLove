let music = new Audio('Asset/Sound/bgmusic.mp3');

function FirstButton() {
    let div = document.getElementById("fam");
    let maindiv = document.getElementById("nc1");
    div.style.display = "none";
    div.remove();
    maindiv.style.display = "flex"

    if (music.paused) {
        music.play();
        music.volume = 0.5;
    }

    setInterval(updatetime, 1000);
}

function MutedMusic() {
    var img = document.getElementById("speaker");

    if (img.src.includes("Asset/Img/speaker.png")) {
        img.src = "Asset/Img/muted.png";
        music.pause();
    } else {
        img.src = "Asset/Img/speaker.png";
        music.play();
    }
}

let min = 0;
let sec = 0;

function updatetime() {
    sec++;
    
    if (sec === 60) {
        sec = 0;
        min++;
    }

    if (min === 60) {
        min = 0;
    }

    const display = document.getElementById('time');
    display.textContent = `${pad(min)}:${pad(sec)}`;
}

function pad(num) {
    return num < 10 ? '0' + num : num;
}