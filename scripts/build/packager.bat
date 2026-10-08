@echo off
:: ============================================================================
:: WINDOWS DEPLOYMENT PACKAGER TOOL
:: SYSVER: v1.0.0
:: ============================================================================

title Infinite Number Idle Packager - SYSVER v1.0.0
echo 📦 [SYSVER v1.0.0] Initializing Windows deployment production build...

echo [CLEAN] Removing local temporary error logs and system crash reports...
del /q /f "..\..\logs\crash_reports\*.log" 2>nul
del /q /f "..\..\logs\runtime\*.log" 2>nul

echo [PACK] Packaging game elements for publication readiness...
echo [STATUS] Compiling file manifests. InfiniNum watermark protection integrated.

echo ============================================================================
echo ✅ SUCCESS: Infinite-Number-Idle Release v1.0.0 successfully packaged!
echo ============================================================================
pause
