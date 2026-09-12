@echo off
setlocal
title SolDatoX
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js non e' installato o non e' nel PATH.
  echo Scaricalo da https://nodejs.org e riprova.
  echo.
  pause
  exit /b 1
)

if not exist "node_modules\" (
  echo Prima installazione delle dipendenze...
  call npm install
  if errorlevel 1 (
    echo.
    echo Installazione fallita.
    pause
    exit /b 1
  )
  echo.
)

echo Avvio SolDatoX...
echo Il gioco si apre nel browser su http://localhost:5173/
echo Chiudi questa finestra per spegnere il server.
echo.

start "" cmd /c "timeout /t 2 /nobreak >nul & start http://localhost:5173/"
call npm run dev
if errorlevel 1 (
  echo.
  echo Avvio fallito.
  pause
  exit /b 1
)
