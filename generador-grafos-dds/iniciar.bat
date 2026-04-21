@echo off
setlocal
cd /d "%~dp0"
set "PORT=5178"
set "PIDFILE=%~dp0.server.pid"
set "PYTHON_CMD=python"

where python > nul 2>&1
if errorlevel 1 (
  where py > nul 2>&1
  if errorlevel 1 (
    echo No se encontro Python. Instala Python o abre index.html directamente.
    exit /b 1
  )
  set "PYTHON_CMD=py"
)

if exist "%PIDFILE%" (
  echo Ya existe un servidor registrado. Si no abre, ejecuta parar.bat y vuelve a intentar.
  start "" "http://127.0.0.1:%PORT%"
  exit /b 0
)

powershell -NoProfile -ExecutionPolicy Bypass -Command "$p = Start-Process '%PYTHON_CMD%' -ArgumentList '-m http.server %PORT% --bind 127.0.0.1' -WorkingDirectory '%~dp0' -WindowStyle Minimized -PassThru; Set-Content -Path '%PIDFILE%' -Value $p.Id"

timeout /t 1 /nobreak > nul
start "" "http://127.0.0.1:%PORT%"
echo Servidor iniciado en http://127.0.0.1:%PORT%
endlocal
