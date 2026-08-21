@echo off
setlocal

set "PROJECT_DIR=%~dp0"
set "NODE_EXE=C:\Users\BIG_DESK\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "DOCUSAURUS_CLI=%~dp0node_modules\@docusaurus\core\bin\docusaurus.mjs"
set "PID_FILE=%TEMP%\lura-world-doc-riskycoin-preview.pid"
set "PREVIEW_URL=http://127.0.0.1:3000/lura-world-doc/"

if not exist "%NODE_EXE%" (
  echo [ERROR] Node.js was not found:
  echo %NODE_EXE%
  pause
  exit /b 1
)

if not exist "%DOCUSAURUS_CLI%" (
  echo [ERROR] Docusaurus was not found. Check node_modules.
  pause
  exit /b 1
)

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$pidPath=$env:PID_FILE;" ^
  "if (Test-Path -LiteralPath $pidPath) {" ^
  "  $oldPid=[int](Get-Content -LiteralPath $pidPath -Raw);" ^
  "  if (Get-Process -Id $oldPid -ErrorAction SilentlyContinue) { Start-Process $env:PREVIEW_URL; exit 0 };" ^
  "  Remove-Item -LiteralPath $pidPath -Force" ^
  "};" ^
  "$proc=Start-Process -FilePath $env:NODE_EXE -ArgumentList @($env:DOCUSAURUS_CLI,'start','--host','127.0.0.1','--port','3000','--no-open') -WorkingDirectory $env:PROJECT_DIR -WindowStyle Minimized -PassThru;" ^
  "Set-Content -LiteralPath $pidPath -Value $proc.Id -Encoding ascii;" ^
  "$deadline=(Get-Date).AddSeconds(30); $ready=$false;" ^
  "do { Start-Sleep -Milliseconds 500; try { $response=Invoke-WebRequest -Uri $env:PREVIEW_URL -UseBasicParsing -TimeoutSec 2; $ready=($response.StatusCode -eq 200) } catch {} } while (-not $ready -and -not $proc.HasExited -and (Get-Date) -lt $deadline);" ^
  "if (-not $ready) { if (-not $proc.HasExited) { Stop-Process -Id $proc.Id -Force }; Remove-Item -LiteralPath $pidPath -Force -ErrorAction SilentlyContinue; throw 'Preview server did not start within 30 seconds.' };" ^
  "Start-Process $env:PREVIEW_URL"

if errorlevel 1 (
  echo [ERROR] Failed to start the RiskyCoin preview.
  pause
  exit /b 1
)

echo RiskyCoin live preview started:
echo %PREVIEW_URL%
exit /b 0
