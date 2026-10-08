import math

# ============================================================================
# 🛠️ CONFIGURATION - EASILY EDITABLE MILESTONES & REWARDS
# ============================================================================

# You can easily edit goals, values, and rewards here:
MILESTONES = {
    "1000": "Unlock x5 Button",
    "1e9": "Unlock x10 Button",
    "1e100": "Unlock ^1.05 Button (Googol Reward - Float Floor active)",
    "1e105": "Unlock ^1.5 Button",
    "1e120": "Unlock ^3 Special Button",
    "2e308": "Unlock OP Button (^10)",
    "e1000": "Unlock Auto-Clicker (10 clicks/sec)",
    "e5000": "Unlock 25% Crit Chance (+20% strength, no crits for auto)",
    "e50000": "Auto-Clicker can now click TWO different buttons",
    "ee33": "Unlock Super Crit (1% chance to turn x32768 into x5.92e+225)",
    "ee45": "Super-Exponential active! (^1000000 every 2 seconds)",
    "1e5000000": "Unlock Click-Back (Autoclicker clicks player button once)",
    "ee15": "Autoclicker clicks ALL buttons simultaneously"
}

PRESTIGE_LEVELS = {
    1: {"goal": "1.79e308", "desc": "First Forced Prestige. PP upgrades unlocked."},
    2: {"goal": "e10000", "desc": "Formula unlocked for subsequent prestiges."},
    3: {"goal": "ee6", "desc": "Keep autoclicker. All '^' buttons boosted to ^1.5"},
    4: {"goal": "ee7", "desc": "All '^' buttons are ^1.2 five times."},
    5: {"goal": "ee8", "desc": "Autoclicker speed buffed to 50 clicks/sec/button."},
    6: {"goal": "ee11", "desc": "100% Crits. Buttons boosted insanely (+1, x32768, etc.)"},
    7: {"goal": "ee21", "desc": "Autoclicker accelerates by x1.5 every single second."},
    8: {"goal": "ee40", "desc": "Auto-Prestige unlocked."},
    9: {"goal": "ee50", "desc": "World Breaker: ^1e6 applied EVERY 0.03 SECONDS."},
    10: {"goal": "ee99", "desc": "EVERY FUNCTION AND BUTTON IS ^2! Base CPS is 2500."},
    11: {"goal": "ee100", "desc": "Googolplex Layer. Formula 1e(308 + (x-11)*100) starts."}
}

# ============================================================================
# 🌌 INFININUM CORE EMULATION FOR PYTHON
# ============================================================================

class InfiniNum:
    def __init__(self, base=0.0, exponent=0.0, layer=0.0):
        self.base = float(base)
        self.exponent = float(exponent)
        self.layer = float(layer)

    def floor_check(self):
        # Always floor if the number becomes a float (not a full integer)
        self.base = math.floor(self.base)

# ============================================================================
# 🕹️ GAME STATE MANAGER
# ============================================================================

class GameState:
    def __init__(self):
        self.number = InfiniNum(0, 0, 0) # Starts at 0
        self.prestige_points = 0.0
        self.prestige_count = 0
        self.base_cps = 0
        self.crit_chance = 0.0
        
        # UI Visibility Flag (Hidden until 10 PP, then stays permanently)
        self.prestige_tab_visible = False

    def update_prestige_visibility(self):
        # Stays permanently visible once the player hits 10 PP
        if self.prestige_points >= 10.0:
            self.prestige_tab_visible = True

    # ---- ALL BUTTONS DEFINED ----

    def press_plus_one(self):
        if self.number.base == 0 and self.number.exponent == 0 and self.number.layer == 0:
            self.number.base = 1.0
        else:
            self.number.base += 1.0
        self.number.floor_check()

    def press_plus_two(self):
        if self.number.base == 0 and self.number.exponent == 0 and self.number.layer == 0:
            self.number.base = 2.0
        else:
            self.number.base += 2.0
        self.number.floor_check()

    def press_x2(self):
        if self.number.base == 0 and self.number.exponent == 0 and self.number.layer == 0:
            self.number.base = 2.0
        else:
            self.number.base *= 2.0
        self.number.floor_check()

    def press_x3(self):
        if self.number.base == 0 and self.number.exponent == 0 and self.number.layer == 0:
            self.number.base = 3.0
        else:
            self.number.base *= 3.0
        self.number.floor_check()

    def press_x5(self):
        self.number.base *= 5.0
        self.number.floor_check()

    def press_x10(self):
        self.number.base *= 10.0
        self.number.floor_check()

    # ---- EXPONENTIAL '^' BUTTONS ----

    def press_pow_1_05(self):
        self.number.base = math.pow(self.number.base, 1.05)
        self.number.floor_check()

    def press_pow_1_5(self):
        self.number.base = math.pow(self.number.base, 1.5)
        self.number.floor_check()

    def press_pow_3(self):
        self.number.base = math.pow(self.number.base, 3.0)
        self.number.floor_check()

    def press_pow_10(self):
        self.number.base = math.pow(self.number.base, 10.0)
        self.number.floor_check()

# ============================================================================
# 🚀 INITIALIZATION
# ============================================================================

if __name__ == "__main__":
    game = GameState()
    print("🌌 Infinite Number Idle Engine - Python Core Initialized successfully.")
