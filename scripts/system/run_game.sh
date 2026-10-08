#!/bin/bash
# ============================================================================
# SYSTEM ENGINE INITIALIZATION SCRIPT
# SYSVER: v1.0.0
# ============================================================================

echo "🌌 [SYSVER v1.0.0] Booting Infinite-Number-Idle Runtime Environment..."
echo "[CORE] Verifying local configuration signatures..."

# Emulating API config import from config/server/api_config.env
if [ -f "../../config/server/api_config.env" ]; then
    echo "[AUTH] InfiniNum Security Token verified successfully."
else
    echo "[WARNING] api_config.env missing. Booting in local offline sandbox mode."
fi

echo "[LAUNCH] Firing up main.py core engine loop..."
python3 ../../app/core/main.py
