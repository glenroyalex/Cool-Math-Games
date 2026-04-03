let xp = parseInt(localStorage.getItem("xp")) || 0;
let level = parseInt(localStorage.getItem("level")) || 1;

function addXP(amount){
    xp += amount;

    // level up system
    let needed = level * 50;

    if(xp >= needed){
        xp -= needed;
        level++;
        alert("🎉 Level Up! You are now Level " + level);
    }
localStorage.setItem("nextGame", name);
window.location.href = "loading.html";
}
    localStorage.setItem("xp", xp);
    localStorage.setItem("level", level);

    updateHUD();
}

function updateHUD(){
    document.getElementById("xpText").innerText = xp;
    document.getElementById("levelText").innerText = level;
}
let xp = localStorage.getItem("xp") || 0;
let level = Math.floor(xp / 100) + 1;
let streak = 0;

function updateUI(){
    document.getElementById("xpDisplay").innerText =
        `XP: ${xp} | Level: ${level}`;
}

updateUI();

/* GENERATE QUESTION */
let a = Math.floor(Math.random()*10);
let b = Math.floor(Math.random()*10);
let answer = a + b;

document.getElementById("question").innerText =
    `${a} + ${b} = ?`;

/* CHECK ANSWER */
function check(){
    let user = Number(document.getElementById("answer").value);

    if(user === answer){
        streak++;
        xp = Number(xp) + 10;

        document.getElementById("result").innerText =
            `✅ Correct! Streak: ${streak}`;

    } else {
        streak = 0;

        document.getElementById("result").innerText =
            `❌ Wrong! Answer: ${answer}`;
    }

    localStorage.setItem("xp", xp);
    level = Math.floor(xp / 100) + 1;

    updateUI();

    nextQuestion();
}

/* NEW QUESTION */
function nextQuestion(){
    a = Math.floor(Math.random()*20);
    b = Math.floor(Math.random()*20);
    answer = a + b;

    document.getElementById("question").innerText =
        `${a} + ${b} = ?`;

    document.getElementById("answer").value = "";
}
function checkLevel(){
    let xp = parseInt(localStorage.getItem("xp")) || 0;
    let level = parseInt(localStorage.getItem("level")) || 1;

    if(xp >= 100 && level === 1){
        level = 2;
        showLevelUp("Snake Unlocked 🐍");
    }

    if(xp >= 250 && level === 2){
        level = 3;
        showLevelUp("Dodge Unlocked 🏃");
    }

    localStorage.setItem("level", level);
}

function showLevelUp(text){
    let popup = document.createElement("div");
    popup.innerHTML = "🏆 LEVEL UP!<br>" + text;
    popup.style.position = "fixed";
    popup.style.top = "40%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%,-50%)";
    popup.style.background = "black";
    popup.style.border = "2px solid lime";
    popup.style.padding = "20px";
    popup.style.color = "lime";
    popup.style.fontSize = "20px";
    document.body.appendChild(popup);

    setTimeout(()=>popup.remove(),2000);
}
