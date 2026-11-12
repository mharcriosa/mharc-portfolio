# deploy.ps1 — commit source, rebuild static export, publish to GitHub Pages.
# Usage:  .\deploy.ps1  or  .\deploy.ps1 "my commit message"
param([string]$msg = "update")

# 1. Commit + push source changes to master
git add -A
git diff --cached --quiet
if ($LASTEXITCODE -ne 0) {
  git commit -m $msg --quiet
  git push origin master
  Write-Host "master pushed" -ForegroundColor Green
} else {
  Write-Host "no source changes" -ForegroundColor DarkGray
}

# 2. Rebuild static export (wipes out/ — including its .git, re-init below)
$env:STATIC_EXPORT = "1"
node .\node_modules\next\dist\bin\next build

# 3. Push out/ contents to gh-pages
if (-not (Test-Path out\.git)) { git -C out init -q }
git -C out add -A
git -C out diff --cached --quiet
if ($LASTEXITCODE -ne 0) { git -C out commit -m "deploy" --quiet }
git -C out branch -M gh-pages
git -C out remote remove origin 2>$null
git -C out remote add origin https://github.com/mharcriosa/mharc-portfolio.git
git -C out push -f origin gh-pages
Write-Host "deployed -> https://mharcriosa.github.io/mharc-portfolio/" -ForegroundColor Green
