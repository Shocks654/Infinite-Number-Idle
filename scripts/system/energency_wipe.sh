#!/bin/bash
# ============================================================================
# EMERGENCY DATA PURGE AND FACTORY RESET TOOL
# SYSVER: v1.0.0
# ============================================================================

echo "⚠️ [SYSVER v1.0.0] CRITICAL OVERRIDE: Emergency Wipe Triggered!"
echo "[WIPE] Purging local player stats profile and active saves..."

# Deleting save checkpoints safely
rm -f "../../data/backups/player_stats.json"
rm -f "../../data/database/game_save.db"

echo "✅ [SUCCESS] Storage clean. System reset to baseline fresh 0 status."
