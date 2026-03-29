@echo off
echo.
echo ====================================================
echo   Product Store - Next.js App Launcher
echo ====================================================
echo.

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed!
    echo Please download from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✓ Node.js is installed
echo.

echo Checking dependencies...
if not exist "node_modules" (
    echo Installing npm packages...
    call npm install
) else (
    echo ✓ Dependencies already installed
)
echo.

echo ====================================================
echo   Starting Development Server...
echo ====================================================
echo.
echo The application will open at: http://localhost:3000
echo Press Ctrl+C to stop the server
echo.

call npm run dev
