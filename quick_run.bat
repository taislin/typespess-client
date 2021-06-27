call npx tsc -p tsconfig.json
call node compile.js
xcopy "./client.js" "./../civ13-typespess/resources/" /y /i /f
cd..
cd civ13-typespess
call "./quick_launch.bat"
pause