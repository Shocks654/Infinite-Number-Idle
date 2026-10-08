import math

# ============================================================================
# 🌌 PRESTIGE POINTS LAYER - HANDLES ALL 11 LEVELS AND ENDGAME TARGETS
# ============================================================================

PP_VISIBILITY_LIMIT = 10.0
FORCED_SCORE_LIMIT = 1.79e308
FINAL_GAME_END_PP = 1.79e308  # GD style end trigger when PP hits this ceiling

# Scaling tiers documented by the creator
PRESTIGE_GOALS = {
    1: "1.79e308",
    2: "e10000",
    3: "ee6",
    4: "ee7",
    5: "ee8",
    6: "ee11",
    7: "ee21",
    8: "ee40",
    9: "ee50",
    10: "ee99",
    11: "ee308"  # Updated to ee308 due to double 'e' progression matrix
}

class PrestigePointsLayer:
    def __init__(self):
        self.prestige_points = 0.0
        self.prestige_count = 0
        self.prestige_tab_permanently_visible = False
        self.number_realm_saved = False

    def evaluate_tab_visibility(self):
        """Prestige tab remains invisible until 10 PP is securely reached."""
        if self.prestige_points >= PP_VISIBILITY_LIMIT:
            self.prestige_tab_permanently_visible = True
        return self.prestige_tab_permanently_visible

    def check_score_for_forced_prestige(self, current_score):
        """Enforces a forced prestige reset if the score reaches 1.79e308."""
        if current_score >= FORCED_SCORE_LIMIT:
            self.prestige_count += 1
            # Standard PP gain multiplier allocation logic
            self.prestige_points += 10.0 
            return True
        return False

    def check_absolute_victory(self):
        """Triggers the GD style endgame overlay if PP hit maximum infinity limits."""
        if self.prestige_points >= FINAL_GAME_END_PP:
            self.number_realm_saved = True
            print("CRITICAL TRIGGER: You saved the number realm. Drop down the screen overlay.")
            return True
        return False

    def get_dynamic_formula_limit(self, current_level):
        """Implements the formula: 1e(308 + (x - 11) * 100) for prestige levels above 10."""
        if current_level >= 11:
            exponent = 308 + (current_level - 11) * 100
            return f"1e{exponent}"
        return PRESTIGE_GOALS.get(current_level, "0")

if __name__ == "__main__":
    layer = PrestigePointsLayer()
    print("Prestige Points system fully packed and compiled.")
