let plr = { x:1, y:1 };

let exitPos = { x: 0, y: 0 };
let fakeExitPos = { x: 0, y: 0 };

const size = { x:14, y:13 }
const player = document.getElementById("player");
const exit = document.getElementById("exit");
const fakeExit = document.getElementById("fakeExit");
const fakeExit1 = document.getElementById("fakeExit1");
const fakeExit2 = document.getElementById("fakeExit2");
const jumpscareIMG = document.getElementById("jumpscare");
const ExitIMG = document.getElementById("exiT")

const walldata = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,0,1,1,1,1,1,0,1,0,0,0,0,1],
    [1,0,1,1,1,1,1,0,1,0,1,1,1,1],
    [1,0,0,0,0,0,1,0,1,0,1,1,1,1],
    [1,1,1,1,1,0,1,0,1,0,1,1,1,1],
    [1,1,1,1,1,0,0,0,0,0,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,0,1,1,1,0,1,1,1,1],
    [1,0,0,0,0,0,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,0,1,1,1,1],
    [1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

function WallSystem() {
    const maze = document.getElementById("maze");
    maze.innerHTML = "";

    for (let y = 0; y < walldata.length; y++) {
        for (let x = 0; x < walldata[y].length; x++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");

            if (walldata[y][x] === 1) cell.classList.add("wall"); // กำแพง
            if (walldata[y][x] === 0) cell.classList.add("path"); // ทางเดิน

            maze.appendChild(cell);
        }
    }
}

function UpdateMovement() {
    player.style.transform = `translate(${plr.x * 42}px, ${plr.y * 42}px)`;
}

function RandomPosition() {
    let x, y;
    do {
        x = Math.floor(Math.random() * size.x);
        y = Math.floor(Math.random() * size.y);
    } while (
        walldata[y][x] !== 0 || // ต้องเป็น path
        (x === plr.x && y === plr.y) || // ห้ามอยู่ที่ตำแหน่ง player
        (x === plr.x - 1 && y === plr.y) || 
        (x === plr.x + 1 && y === plr.y) ||
        (x === plr.x && y === plr.y - 1) ||
        (x === plr.x && y === plr.y + 1) || // ห้ามอยู่ใกล้ๆ player
        y === plr.y + 1 || y === plr.y + 2 || y === plr.y + 3 || y === plr.y + 4 // ห้ามอยู่ด้านล่าง 3 บล็อกของ player
    );

    return { x, y };
}

function RandomExit() {
    exitPos = RandomPosition();
    exit.style.transform = `translate(${exitPos.x * 42}px, ${exitPos.y * 42}px)`;
}

function RandomfakeExit() {
    const fakeExitPositions = [];

    for (let i = 0; i < 3; i++) {
        let newPos = RandomPosition(); // เรียกใช้ RandomPosition เพื่อสุ่มตำแหน่ง

        fakeExitPositions.push(newPos);
    }

    fakeExit.style.transform = `translate(${fakeExitPositions[0].x * 42}px, ${fakeExitPositions[0].y * 42}px)`;
    fakeExit1.style.transform = `translate(${fakeExitPositions[1].x * 42}px, ${fakeExitPositions[1].y * 42}px)`;
    fakeExit2.style.transform = `translate(${fakeExitPositions[2].x * 42}px, ${fakeExitPositions[2].y * 42}px)`;
}

function CheckCollision() {
    let playerRect = player.getBoundingClientRect();
    let exitRect = exit.getBoundingClientRect();
    let fakeExitRect = fakeExit.getBoundingClientRect();
    let fakeExitRect2 = fakeExit1.getBoundingClientRect();
    let fakeExitRect1 = fakeExit2.getBoundingClientRect();

    let FakeExitSFXrandom = Math.floor(Math.random() * 2);

    const ExitSFX = new Audio('Asset/Sound/SuccessSFX.mp3');
    const FakeExitSFX1 = new Audio('Asset/Sound/FakeExitSFX.mp3')
    const FakeExitSFX2 = new Audio('Asset/Sound/FakeExitSFX2.mp3')

 
    // ตรวจสอบการชนกับ Exit
    if (
        playerRect.left === exitRect.left &&
        playerRect.top === exitRect.top
    ) {
        ExitIMG.style.display = "block";
        ExitSFX.play();
        ExitSFX.volume = 0.5;
    }

    // ตรวจสอบการชนกับ FakeExit แต่ละตัว
    if (
        playerRect.left === fakeExitRect.left &&
        playerRect.top === fakeExitRect.top
    ) {
        jumpscareIMG.style.display = "block";
        
        if (FakeExitSFXrandom === 1) {
            FakeExitSFX1.play();
        } else {
            FakeExitSFX2.play();
        }
    }

    if (
        playerRect.left === fakeExitRect1.left &&
        playerRect.top === fakeExitRect1.top
    ) {
        jumpscareIMG.style.display = "block";

        if (FakeExitSFXrandom === 1) {
            FakeExitSFX1.play();
        } else {
            FakeExitSFX2.play();
        }
    }

    if (
        playerRect.left === fakeExitRect2.left &&
        playerRect.top === fakeExitRect2.top
    ) {
        jumpscareIMG.style.display = "block";
    
        if (FakeExitSFXrandom === 1) {
            FakeExitSFX1.play();
        } else {
            FakeExitSFX2.play();
        }
    }
}


function MovementSystem(dx, dy) {
    let nx = plr.x + dx, ny = plr.y + dy;
    if (walldata[ny][nx] !== 1) {
        plr = { x: nx, y: ny };
        WallSystem();
        UpdateMovement();
        CheckCollision();
    }
};

document.addEventListener("keydown", e => {
    if (e.key === "ArrowUp") MovementSystem(0,-1);
    if (e.key === "ArrowDown") MovementSystem(0,1);
    if (e.key === "ArrowLeft") MovementSystem(-1,0);
    if (e.key === "ArrowRight") MovementSystem(1,0);
});

WallSystem();

UpdateMovement();
RandomExit();
RandomfakeExit();