@echo off
title B.A.R.T. Website
echo.
echo  =============================================
echo   B.A.R.T. -- Biomimetic Autonomous Robotics
echo  =============================================
echo.
echo  Building and starting the website...
echo  Browser will open automatically at http://localhost:4173
echo.
cd /d "%~dp0"
npm run start
pause
