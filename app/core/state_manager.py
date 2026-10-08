import json
import os
from main import GameState, InfiniNum

# ============================================================================
# 🛠️ STATE MANAGER - HANDLES SAVING, LOADING AND TICK RATE
# ============================================================================

class StateManager:
    def __init__(self, game_state: GameState):
        self.game = game_state
        # Target save path inside your data directory
        self.save_path = os.path.join(os.path.dirname(__file__), '../../data/backups/player_stats.json')

    def save_game(self):
        """Serializes the current game state into a JSON format for persistence."""
        save_data = {
            "number": {
                "base": self.game.number.base,
                "exponent": self.game.number.exponent,
                "layer": self.game.number.layer
            },
            "prestige_points": self.game.prestige_points,
            "prestige_count": self.game.prestige_count,
            "base_cps": self.game.base_cps,
            "crit_chance": self.game.crit_chance,
            "prestige_tab_visible": self.game.prestige_tab_visible
        }
        
        try:
            os.makedirs(os.path.dirname(self.save_path), exist_ok=True)
            with open(self.save_path, 'w') as f:
                json.dump(save_data, f, indent=4)
            print("Game state successfully secured and saved.")
        except Exception as e:
            print(f"Error executing auto-save: {e}")

    def load_game(self):
        """Loads and parses the JSON file to restore the player's infinite progress."""
        if not os.path.exists(self.save_path):
            print("No active local save file detected. Starting fresh baseline.")
            return False

        try:
            with open(self.save_path, 'r') as f:
                save_data = json.load(f)
            
            # Restoring state from file data
            self.game.number = InfiniNum(
                save_data["number"]["base"],
                save_data["number"]["exponent"],
                save_data["number"]["layer"]
            )
            self.game.prestige_points = save_data["prestige_points"]
            self.game.prestige_count = save_data["prestige_count"]
            self.game.base_cps = save_data["base_cps"]
            self.game.crit_chance = save_data["crit_chance"]
            self.game.prestige_tab_visible = save_data["prestige_tab_visible"]
            print("Infinite growth progress restored successfully.")
            return True
        except Exception as e:
            print(f"Critical error loading save profile: {e}")
            return False

# ============================================================================
# 🚀 INITIALIZATION TEST
# ============================================================================

if __name__ == "__main__":
    test_game = GameState()
    manager = StateManager(test_game)
    
    # Trigger a dummy action and test serialization
    test_game.press_plus_one()
    manager.save_game()
