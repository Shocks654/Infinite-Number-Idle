// ============================================================================
// 🕹️ GAME STATE & UI RENDERER (INFININUM ENGINE INTEGRATION)
// ============================================================================

let gameState = {
    number: 0,
    prestigePoints: 0,
    isPrestigeUnlocked: false
};

// Update and refresh everything on the screen
function updateUI() {
    const numberElement = document.getElementById("main-number");
    numberElement.innerText = gameState.number;

    // Milestone Unlock Logic for Buttons
    if (gameState.number >= 1000) {
        document.getElementById("btn-x5").classList.remove("hidden");
    }
    if (gameState.number >= 1e9) {
        document.getElementById("btn-x10").classList.remove("hidden");
    }
    if (gameState.number >= 1e100) {
        document.getElementById("btn-pow105").classList.remove("hidden");
    }
    if (gameState.number >= 1e105) {
        document.getElementById("btn-pow15").classList.remove("hidden");
    }
    if (gameState.number >= 1e120) {
        document.getElementById("btn-pow3").classList.remove("hidden");
    }
    if (gameState.number >= 2e308) {
        document.getElementById("btn-pow10").classList.remove("hidden");
    }

    // Forced Prestige Trigger Check at 1.79e308
    if (gameState.number >= 1.79e308) {
        triggerPrestige();
    }

    // Dynamic Visibility Logic for Prestige Tab (Locked until 10 PP reached)
    if (gameState.prestigePoints >= 10 || gameState.isPrestigeUnlocked) {
        gameState.isPrestigeUnlocked = true; // Permanent lock-in
        document.getElementById("prestige-tab").classList.remove("hidden");
        document.getElementById("pp-counter").innerText = gameState.prestigePoints;
    }
}

// Handle all button clicking matrices
function handleButtonClick(action) {
    if (action === 'plus_1') {
        gameState.number = (gameState.number === 0) ? 1 : gameState.number + 1;
    } else if (action === 'plus_2') {
        gameState.number = (gameState.number === 0) ? 2 : gameState.number + 2;
    } else if (action === 'x2') {
        gameState.number = (gameState.number === 0) ? 2 : gameState.number * 2;
    } else if (action === 'x3') {
        gameState.number = (gameState.number === 0) ? 3 : gameState.number * 3;
    } else if (action === 'x5') {
        gameState.number *= 5;
    } else if (action === 'x10') {
        gameState.number *= 10;
    } else if (action === 'pow_1.05') {
        gameState.number = Math.pow(gameState.number, 1.05);
    } else if (action === 'pow_1.5') {
        gameState.number = Math.pow(gameState.number, 1.5);
    } else if (action === 'pow_3') {
        gameState.number = Math.pow(gameState.number, 3);
    } else if (action === 'pow_10') {
        gameState.number = Math.pow(gameState.number, 10);
    }

    // Always apply float floor kerekítés
    gameState.number = Math.floor(gameState.number);
    updateUI();
}

// Forced or manual soft-reset execution
function triggerPrestige() {
    gameState.prestigePoints += 1; // Gain PP points
    gameState.number = 0; // Wipe progress
    updateUI();
}

// Initial engine fire-up
updateUI();
