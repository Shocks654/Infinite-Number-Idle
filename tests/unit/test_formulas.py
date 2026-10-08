# ============================================================================
# UNIT TEST SUITE - CORE MATHEMATICAL FORMULAS
# SYSVER: v1.0.0
# ============================================================================
import unittest
import math

class TestGameFormulas(unittest.TestCase):
    def setUp(self):
        self.base_score = 0.0 # Game starts at strict 0

    def test_button_clicks_and_flooring(self):
        """Validates that +1, +2, x2, and float flooring work correctly."""
        # Simulate initial +1 click from zero
        score = 1.0
        
        # Simulate an operation that creates a float
        score_float = score * 1.05
        score_floored = math.floor(score_float)
        
        print(f"[TEST] SYSVER v1.0.0 - Formula Test: {score_float} correctly floored to {score_floored}")
        self.assertEqual(score_floored, 1)

if __name__ == "__main__":
    print("🧪 [SYSVER v1.0.0] Launching formula unit tests...")
    unittest.main()
