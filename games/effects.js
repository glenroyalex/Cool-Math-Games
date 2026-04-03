/* SOUND SYSTEM */
function playSound(type){
    let audio;

    if(type=="click") audio = new Audio("../sounds/click.mp3");
    if(type=="level") audio = new Audio("../sounds/level.mp3");
    if(type=="death") audio = new Audio("../sounds/death.mp3");

    if(audio) audio.play();
}

/* SCREEN SHAKE */
function shake(){
    document.body.classList.add("shake");
    setTimeout(()=>document.body.classList.remove("shake
