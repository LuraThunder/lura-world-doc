@echo off
setlocal

set "NODE_EXE=C:\Users\BIG_DESK\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
set "PID_FILE=%TEMP%\lura-world-doc-riskycoin-preview.pid"

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command ^
  "$ErrorActionPreference='Stop';" ^
  "$pidPath=$env:PID_FILE;" ^
  "if (-not (Test-Path -LiteralPath $pidPath)) { Write-Host 'RiskyCoin preview is not running.'; exit 0 };" ^
  "$serverPid=[int](Get-Content -LiteralPath $pidPath -Raw);" ^
  "$process=Get-CimInstance Win32_Process -Filter ('ProcessId=' + $serverPid) -ErrorAction SilentlyContinue;" ^
  "if ($null -eq $process) { Remove-Item -LiteralPath $pidPath -Force; Write-Host 'RiskyCoin preview was already stopped.'; exit 0 };" ^
  "if ($process.ExecutablePath -ne $env:NODE_EXE -or $process.CommandLine -notmatch 'docusaurus\.mjs' -or $process.CommandLine -notmatch '\bstart\b') { throw ('PID ' + $serverPid + ' is not the expected Docusaurus live preview process. It was not stopped.') };" ^
  "Stop-Process -Id $serverPid -Force;" ^
  "Remove-Item -LiteralPath $pidPath -Force;" ^
  "Write-Host 'RiskyCoin preview stopped.'"

if errorlevel 1 (
  echo [ERROR] Failed to stop the RiskyCoin preview safely.
  pause
  exit /b 1
)

exit /b 0
