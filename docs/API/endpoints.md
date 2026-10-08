# 🛠️ System API Endpoints Matrix

This document defines the core internal communication layer for Infinite-Number-Idle. All actions process via the main logic loop.

---

## 🕹️ Gameplay Action Endpoints

### 1. Execute Click
* **Endpoint:** `POST /api/click`
* **Description:** Triggers when the player presses +1, +2, x2, or any unlocked multiplication buttons.
* **Payload:**
  ```json
  {
    "button_type": "string", // e.g., "plus_1", "x2", "pow_1.05"
    "current_value": "InfiniNum"
  }
  ```
* **Processing:** Runs the selected formula from `button_points.js` and immediately executes `Math.floor()` to prevent floating-point anomalies.

---

## 🌌 Prestige & Progression Endpoints

### 2. Evaluate Prestige Status
* **Endpoint:** `POST /api/prestige/evaluate`
* **Description:** Constantly checks if the current score has hit the soft-reset barrier or if absolute game victory conditions are met.
* **Logic Rules:**
  - If score reaches `1.79e308`: Instantly triggers a forced prestige, adding Prestige Points to `prestige_points.py` and resetting the score to 0.
  - If `prestige_points` >= `10.0`: The UI permanently reveals the Prestige Tab.
  - If `prestige_points` reaches `1.79e308`: Overrides the entire loop and executes the `triggerAbsoluteVictory()` animation matrix.

---

## 💾 Storage & Ranglista Endpoints

### 3. Fetch Leaderboard Data
* **Endpoint:** `GET /api/leaderboard/show`
* **Description:** Queries the database (`game_save.db`) to present the player ranking matrix sorted by the highest achievements.
* **Database Action:** Executes the compiled SQL schema:
  ```sql
  SELECT * FROM global_leaderboard ORDER BY max_prestige_points DESC;
  ```
