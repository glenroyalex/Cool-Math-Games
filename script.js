function openGame(path) {
    window.location.href = path;
}

// Switch to notes
function showNotes() {
    document.getElementById("notesSection").style.display = "block";
    document.getElementById("gamesSection").style.display = "none";
}

// Switch to games
function showGames() {
    document.getElementById("notesSection").style.display = "none";
    document.getElementById("gamesSection").style.display = "block";
}

// Keyboard shortcuts
document.addEventListener("keydown", function(e) {
    if (e.key.toLowerCase() === "n") {
        showNotes();
    }
    if (e.key.toLowerCase() === "g") {
        showGames();
    }
});
