function openGame(path) {
    window.location.href = path;
}

document.addEventListener("keydown", function(e) {
    if (e.key === "1") {
        openGame("games/game1.html");
    }
    if (e.key === "2") {
        openGame("games/game2.html");
    }
});