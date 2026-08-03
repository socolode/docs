@echo off
chcp 65001 >nul
cd /d d:\socolode-docs

:retry_add
del /f /q ".git\index.lock" 2>nul
git add -A
if errorlevel 1 (
  timeout /t 1 /nobreak >nul
  goto retry_add
)
echo === git add done ===

git commit -m "feat: 萤火虫T1快速上手新增链接电脑文章，完善开箱与基本操作

- 新增链接电脑与U盘功能说明文章（中英文）
- 完善unboxing-basics：新增简介、进入退出App示意图、充电与电量显示说明
- 同步中英文quick-start顺序：1开箱 2链接电脑 3安装第一个效果
- 新增语雀图片5张：进入退出App、充电、电量、链接电脑、U盘
- 侧栏翻译：Creative Projects→创意玩法，导航栏标签中文优化"
if errorlevel 1 (
  timeout /t 1 /nobreak >nul
  del /f /q ".git\index.lock" 2>nul
  goto retry_add
)
echo === git commit done ===

:retry_push
del /f /q ".git\index.lock" 2>nul
git push
if errorlevel 1 (
  timeout /t 2 /nobreak >nul
  goto retry_push
)
echo === git push done ===
echo.
echo ALL DONE
