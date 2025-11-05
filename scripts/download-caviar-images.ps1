# Скачивание уникальных изображений икры
# PowerShell скрипт для загрузки всех изображений согласно манифесту

$ErrorActionPreference = "Stop"

# Папки
$red = "public/img/caviar/red"
$blk = "public/img/caviar/black"

New-Item -Type Directory -Force -Path $red | Out-Null
New-Item -Type Directory -Force -Path $blk | Out-Null

Write-Host "Загрузка изображений красной икры..."

# RED - Загружаем как есть, потом конвертируем
try {
    Write-Host "  - hero.webp..."
    Invoke-WebRequest -Uri "https://unsplash.com/photos/_eyJJf8Bwrc/download?force=true" -OutFile "$red/hero-temp.jpg" -UseBasicParsing
    Write-Host "  - card-1.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/29143209/pexels-photo-29143209.jpeg?cs=srgb&fm=jpg" -OutFile "$red/card-1-temp.jpg" -UseBasicParsing
    Write-Host "  - card-2.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/16975184/pexels-photo-16975184.jpeg?cs=srgb&fm=jpg" -OutFile "$red/card-2-temp.jpg" -UseBasicParsing
    Write-Host "  - card-3.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/15913458/pexels-photo-15913458.jpeg?cs=srgb&fm=jpg" -OutFile "$red/card-3-temp.jpg" -UseBasicParsing
    Write-Host "  - recipe-1.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/20571453/pexels-photo-20571453.jpeg?cs=srgb&fm=jpg" -OutFile "$red/recipe-1-temp.jpg" -UseBasicParsing
} catch {
    Write-Host "Ошибка загрузки RED: $_" -ForegroundColor Red
}

Write-Host "Загрузка изображений чёрной икры..."

# BLACK
try {
    Write-Host "  - hero.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/8112399/pexels-photo-8112399.jpeg?cs=srgb&fm=jpg" -OutFile "$blk/hero-temp.jpg" -UseBasicParsing
    Write-Host "  - card-1.jpg..."
    Invoke-WebRequest -Uri "https://images.pexels.com/photos/8112404/pexels-photo-8112404.jpeg?cs=srgb&fm=jpg" -OutFile "$blk/card-1-temp.jpg" -UseBasicParsing
    Write-Host "  - card-2.webp (Unsplash)..."
    Invoke-WebRequest -Uri "https://unsplash.com/photos/yNI8fxTUUrs/download?force=true" -OutFile "$blk/card-2-temp.jpg" -UseBasicParsing
    Write-Host "  - card-3.webp (Unsplash)..."
    Invoke-WebRequest -Uri "https://unsplash.com/photos/mwFc2qcty_E/download?force=true" -OutFile "$blk/card-3-temp.jpg" -UseBasicParsing
    Write-Host "  - premium-1.webp (Unsplash)..."
    Invoke-WebRequest -Uri "https://unsplash.com/photos/BT6AXIbfIYo/download?force=true" -OutFile "$blk/premium-1-temp.jpg" -UseBasicParsing
} catch {
    Write-Host "Ошибка загрузки BLACK: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "Изображения загружены. Переименовываем во временные файлы..."
Write-Host "Для конвертации в WebP используйте ImageMagick или другой инструмент."
Write-Host ""
Write-Host "Временные файлы:"
$tempFiles = @(Get-ChildItem -Path "$red\*-temp.*" -ErrorAction SilentlyContinue) + @(Get-ChildItem -Path "$blk\*-temp.*" -ErrorAction SilentlyContinue)
if ($tempFiles.Count -gt 0) {
    $tempFiles | ForEach-Object { Write-Host "  $_" }
} else {
    Write-Host "  (временные файлы не найдены)"
}

