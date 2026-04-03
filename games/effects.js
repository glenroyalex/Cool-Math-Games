/* 🔊 SOUND SYSTEM */
function playSound(type){
    let sounds = {
        click: new Audio("../sounds/click.mp3"),
        level: new Audio("../sounds/level.mp3"),
        death: new Audio("../sounds/death.mp3")
    };

    if(sounds[type]){
        sounds[type].currentTime = 0;
        sounds[type].play();
    }
}

/* 💥 SCREEN SHAKE */
function shake(){
    document.body.classList.add("shake");
    setTimeout(()=>{
        document.body.classList.remove("shake");
    }, 200);
}

/* ✨ XP PARTICLES */
function spawnXP(x, y){
    let p = document.createElement("div");
    p.className = "xp";

    p.style.left = x + "px";
    p.style.top = y + "px";
    p.innerText = "+XP";

    document.body.appendChild(p);

    setTimeout(()=>p.remove(), 800);
}
