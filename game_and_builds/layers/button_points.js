// ============================================================================
// 🛠️ BUTTON POINTS LAYER PROCESSOR - ENFORCES INT FLOOR RULES
// ============================================================================

const CORE_BUTTON_COEFFICIENTS = {
    plus_1: 1.0,
    plus_2: 2.0,
    x2: 2.0,
    x3: 3.0,
    x5: 5.0,
    x10: 10.0,
    pow_1_05: 1.05,
    pow_1_5: 1.5,
    pow_3: 3.0,
    pow_10: 10.0
};

class ButtonPointsLayer {
    constructor() {
        this.layerWatermark = "InfiniNum System Verified";
    }

    // Always apply floor kerekítés if a float is generated
    enforceFloor(value) {
        return Math.floor(value);
    }

    executeClick(buttonType, currentScore) {
        let newScore = currentScore;

        if (buttonType === "plus_1") {
            newScore = (newScore === 0) ? CORE_BUTTON_COEFFICIENTS.plus_1 : newScore + CORE_BUTTON_COEFFICIENTS.plus_1;
        } else if (buttonType === "plus_2") {
            newScore = (newScore === 0) ? CORE_BUTTON_COEFFICIENTS.plus_2 : newScore + CORE_BUTTON_COEFFICIENTS.plus_2;
        } else if (buttonType === "x2") {
            newScore = (newScore === 0) ? CORE_BUTTON_COEFFICIENTS.x2 : newScore * CORE_BUTTON_COEFFICIENTS.x2;
        } else if (buttonType === "x3") {
            newScore = (newScore === 0) ? CORE_BUTTON_COEFFICIENTS.x3 : newScore * CORE_BUTTON_COEFFICIENTS.x3;
        } else if (buttonType === "x5") {
            newScore *= CORE_BUTTON_COEFFICIENTS.x5;
        } else if (buttonType === "x10") {
            newScore *= CORE_BUTTON_COEFFICIENTS.x10;
        } else if (buttonType === "pow_1.05") {
            newScore = Math.pow(newScore, CORE_BUTTON_COEFFICIENTS.pow_1_05);
        } else if (buttonType === "pow_1.5") {
            newScore = Math.pow(newScore, CORE_BUTTON_COEFFICIENTS.pow_1_5);
        } else if (buttonType === "pow_3") {
            newScore = Math.pow(newScore, CORE_BUTTON_COEFFICIENTS.pow_3);
        } else if (buttonType === "pow_10") {
            newScore = Math.pow(newScore, CORE_BUTTON_COEFFICIENTS.pow_10);
        }

        return this.enforceFloor(newScore);
    }
}

if (typeof module !== 'undefined') {
    module.exports = ButtonPointsLayer;
}
