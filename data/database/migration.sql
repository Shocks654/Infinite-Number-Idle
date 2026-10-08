-- ============================================================================
-- 🛠️ DATABASE MIGRATION - REAL-TIME SAVE CHANNELS & LEADERBOARD SYSTEM
-- ============================================================================
-- NOTE: In-memory states process at 0.01s intervals.
-- Disk writing (INSERT/UPDATE) triggers every 60 seconds OR exactly on Prestige.

-- Core Player Progress Table (Stores InfiniNum data structures securely)
CREATE TABLE IF NOT EXISTS player_progress (
    profile_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    infininum_base REAL NOT NULL DEFAULT 0.0,
    infininum_exponent REAL NOT NULL DEFAULT 0.0,
    infininum_layer REAL NOT NULL DEFAULT 0.0,
    current_prestige_points REAL NOT NULL DEFAULT 0.0,
    total_prestige_count INTEGER NOT NULL DEFAULT 0,
    last_saved_timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Global Live Leaderboard Table (For high-score queries up to ee308 PP)
CREATE TABLE IF NOT EXISTS global_leaderboard (
    rank_id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL,
    max_prestige_points REAL NOT NULL DEFAULT 0.0,
    max_prestige_count INTEGER NOT NULL DEFAULT 0,
    FOREIGN KEY(username) REFERENCES player_progress(username)
);

-- ============================================================================
-- 💾 AUTO-SAVE INTERVAL & TRIGGER TRIGGERS (EXECUTION BLUEPRINT)
-- ============================================================================
-- Action 1: On every 60 seconds (1 minute interval elapsed):
--           UPDATE player_progress SET infininum_base = ?, last_saved_timestamp = CURRENT_TIMESTAMP WHERE username = ?;
--
-- Action 2: On Forced Prestige or Manual Prestige (Instant execution override):
--           UPDATE player_progress SET current_prestige_points = ?, total_prestige_count = ? WHERE username = ?;
--           INSERT OR REPLACE INTO global_leaderboard (username, max_prestige_points, max_prestige_count) VALUES (?, ?, ?);
