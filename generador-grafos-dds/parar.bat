@echo off
setlocal
cd /d "%~dp0"
set "PIDFILE=%~dp0.server.pid"

if not exist "%PIDFILE%" (
  echo No hay servidor registrado para detener.
  exit /b 0
)

set /p PID=<"%PIDFILE%"
if "%PID%"=="" (
  del "%PIDFILE%" > nul 2>&1
  echo Archivo de PID vacio eliminado.
  exit /b 0
)

taskkill /PID %PID% /F > nul 2>&1
if errorlevel 1 (
  echo No se pudo detener el proceso o ya estaba cerrado.
) else (
  echo Servidor detenido.
)

del "%PIDFILE%" > nul 2>&1
endlocal
