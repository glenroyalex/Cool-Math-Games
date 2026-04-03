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
