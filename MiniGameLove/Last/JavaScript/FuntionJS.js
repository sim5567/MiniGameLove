const music = new Audio('Asset/Sound/Music.mp3');

const displaytxl = document.getElementById("q1");
const h2 = document.getElementById("h2");

const endbtn = document.getElementById("endbtn");

document.getElementById("First").addEventListener("click", function() {
    const div = document.getElementById("fam");

    div.style.display = "none";
    div.remove();
    displaytxl.style.display = "block";
    StorySystem();

    music.play();
    music.volume = 0.5;
});

function StorySystem() {
    setTimeout(() => {
        h2.textContent = "ผมทำมาตั้งหลายสัปดาห์555";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "33%";
        } else {
            displaytxl.style.width = "20%";
        }
    }, 3000);
    setTimeout(() => {
        h2.textContent = "จะหมดเดือนอยุ่ละ";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "20%";
        } else {
            displaytxl.style.width = "15%";
        }
    }, 6000);
    setTimeout(() => {
        h2.textContent = "ก็อาจจะดูลวกๆนะพี่";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "23%";
        } else {
            displaytxl.style.width = "15%";
        }
    }, 9000);
    setTimeout(() => {
        h2.textContent = "แต่ผมทำเองทุกอันเลย";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "25%";
        } else {
            displaytxl.style.width = "15%";
        }
    }, 12000);
    setTimeout(() => {
        h2.textContent = "ก็คงมีแค่นี้แหละพี่";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "23%";
        } else {
            displaytxl.style.width = "15%";
        }
    }, 16000);
    setTimeout(() => {
        h2.textContent = "ทำยากเกินนน";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "20%";
        } else {
            displaytxl.style.width = "15%";
        }
    }, 18000);
    setTimeout(() => {
        endbtn.style.display = "block";
    }, 20000);
}

function TheEnd() {
    if (confirm("เป็นแฟนกันนะพี่")) {
        endbtn.style.display = "none";
        h2.textContent = "เย้ๆๆๆๆ เป็นไอ้จิ๋วของพี่ละนะะะ😝";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "40%";
        } else {
            displaytxl.style.width = "22%";
        }
    } else {
        endbtn.style.display = "none";
        h2.textContent = "มาบอกเหตุผลในIGเลยย😡";
        if (window.matchMedia("(max-width: 1200px)").matches) {
            displaytxl.style.width = "32%";
        } else {
            displaytxl.style.width = "20%";
        }
    }
}