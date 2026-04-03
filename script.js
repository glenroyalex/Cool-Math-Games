function showScreen(screen) {

    document.querySelectorAll(".screen").forEach(s => {
        s.classList.remove("active");
    });

    if (screen === "home") {
        document.getElementById("homeScreen").classList.add("active");
    }

    if (screen === "notes") {
        document.getElementById("notesScreen").classList.add("active");
    }

    if (screen === "games") {
        document.getElementById("gamesScreen").classList.add("active");
    }

    if (screen === "scores") {
        document.getElementById("scoresScreen").classList.add("active");
        loadScores();
    }
}

function openGame(path) {
    window.location.href = path;
}

/* 🏆 SCORE SYSTEM */
function saveScore(name, value) {
    localStorage.setItem(name, value);
}

function getScore(name) {
    return localStorage.getItem(name) || 0;
}

function loadScores() {
    document.getElementById("clickerScore").innerText =
        getScore("clickerScore");
}

function resetScores() {
    localStorage.clear();
    loadScores();
}
