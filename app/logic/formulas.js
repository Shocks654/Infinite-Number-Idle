// ============================================================================
// 🛠️ CONFIGURATION - EASILY EDITABLE FORMULAS & MULTIPLIERS
// ============================================================================

const BASE_MULTIPLIERS = {
    plus_one: 1.0,
    plus_two: 2.0,
    multiply_two: 2.0,
    multiply_three: 3.0
};

// ============================================================================
// 🌌 CORE INFININUM MATHEMATICAL FORMULAS
// ============================================================================

class FormulaManager {
    constructor() {
        this.baseValue = 0.0;
        this.exponent = 0.0;
        this.layer = 0.0;
    }

    // Always floor numbers if they become non-integers (floats)
    applyFloorCheck(value) {
        return Math.floor(value);
    }

    calculatePlusOne() {
        if (this.baseValue === 0 && this.exponent === 0) {
            this.baseValue = BASE_MULTIPLIERS.plus_one;
        } else {
            this.baseValue += BASE_MULTIPLIERS.plus_one;
        }
        this.baseValue = this.applyFloorCheck(this.baseValue);
        return this.baseValue;
    }

    calculatePlusTwo() {
        if (this.baseValue === 0 && this.exponent === 0) {
            this.baseValue = BASE_MULTIPLIERS.plus_two;
        } else {
            this.baseValue += BASE_MULTIPLIERS.plus_two;
        }
        this.baseValue = this.applyFloorCheck(this.baseValue);
        return this.baseValue;
    }

    calculateX2() {
        if (this.baseValue === 0 && this.exponent === 0) {
            this.baseValue = BASE_MULTIPLIERS.multiply_two;
        } else {
            this.baseValue *= BASE_MULTIPLIERS.multiply_two;
        }
        this.baseValue = this.applyFloorCheck(this.baseValue);
        return this.baseValue;
    }
}

// Exporting logic for system use
if (typeof module !== 'undefined') {
    module.exports = FormulaManager;
}
