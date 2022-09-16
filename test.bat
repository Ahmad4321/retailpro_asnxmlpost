:loop
  cd D:\Taar\Cortex\cortex	
  Start msedge.exe http://localhost:9001/postasn
  cd D:\Taar\Cortex\cortex\dist
  timeout 60
  taskkill /IM msedge.exe /T /F
goto loop
