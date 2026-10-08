// ============================================================================
// 🕹️ GAME STATE & UI RENDERER WITH GD-STYLE ENDGAME TRIGGERS
// ============================================================================

let gameState = {
    number: 0,
    prestigePoints: 0,
    isPrestigeUnlocked: false,
    gameEnded: false
};

const ENDGAME_PP_LIMIT = 1.79e308;

function updateUI() {
    if (gameState.gameEnded) return;

    const numberElement = document.getElementById("main-number");
    numberElement.innerText = gameState.number;

    // Check for the absolute game end at 1.79e308 Prestige Points
    if (gameState.prestigePoints >= ENDGAME_PP_LIMIT) {
        triggerAbsoluteVictory();
        return;
    }

    // Milestone Unlock Matrix for active buttons
    if (gameState.number >= 1000) document.getElementById("btn-x5").classList.remove("hidden");
    if (gameState.number >= 1e9) document.getElementById("btn-x10").classList.remove("hidden");
    if (gameState.number >= 1e100) document.getElementById("btn-pow105").classList.remove("hidden");
    if (gameState.number >= 1e105) document.getElementById("btn-pow15").classList.remove("hidden");
    if (gameState.number >= 1e120) document.getElementById("btn-pow3").classList.remove("hidden");
    if (gameState.number >= 2e308) document.getElementById("btn-pow10").classList.remove("hidden");

    // Forced Prestige Trigger Check at 1.79e308 score
    if (gameState.number >= 1.79e308) {
        triggerPrestige();
    }

    // Dynamic Visibility Logic for Prestige Tab (Locked until 10 PP)
    if (gameState.prestigePoints >= 10 || gameState.isPrestigeUnlocked) {
        gameState.isPrestigeUnlocked = true;
        document.getElementById("prestige-tab").classList.remove("hidden");
        document.getElementById("pp-counter").innerText = gameState.prestigePoints;
    }
}

function handleButtonClick(action) {
    if (gameState.gameEnded) return;

    if (action === 'plus_1') gameState.number = (gameState.number === 0) ? 1 : gameState.number + 1;
    else if (action === 'plus_2') gameState.number = (gameState.number === 0) ? 2 : gameState.number + 2;
    else if (action === 'x2') gameState.number = (gameState.number === 0) ? 2 : gameState.number * 2;
    else if (action === 'x3') gameState.number = (gameState.number === 0) ? 3 : gameState.number * 3;
    else if (action === 'x5') gameState.number *= 5;
    else if (action === 'x10') gameState.number *= 10;
    else if (action === 'pow_1.05') gameState.number = Math.pow(gameState.number, 1.05);
    else if (action === 'pow_1.5') gameState.number = Math.pow(gameState.number, 1.5);
    else if (action === 'pow_3') gameState.number = Math.pow(gameState.number, 3);
    else if (action === 'pow_10') gameState.number = Math.pow(gameState.number, 10);

    gameState.number = Math.floor(gameState.number);
    updateUI();
}

function triggerPrestige() {
    // Standard prestige progression adds PP
    gameState.prestigePoints += 10; // Boosting PP output to reach milestones faster
    gameState.number = 0; 
    updateUI();
}

// GD Style Absolute End Game Trigger Execution
function triggerAbsoluteVictory() {
    gameState.gameEnded = true;
    
    // Hide the gameplay panel entirely
    document.getElementById("game-container").classList.add("hidden");
    
    // Drop down the victory screen from the top
    const victoryScreen = document.getElementById("victory-screen");
    victoryScreen.classList.remove("hidden");
    victoryScreen.classList.add("slide-down");
}

updateUI();

