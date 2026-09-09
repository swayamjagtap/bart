@echo off
title B.A.R.T. Website Launcher
echo.
echo  =============================================
echo   B.A.R.T. -- Biomimetic Autonomous Robotics
echo  =============================================
echo.
echo  Building and starting the website preview server...
echo  Browser will open automatically at http://localhost:4173
echo.
cd /d "%~dp0"
start "" "http://localhost:4173"
call npm run start
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo [ERROR] Failed to start website preview server.
    echo Trying fallback dev server...
    call npm run dev -- --open
)
pause
