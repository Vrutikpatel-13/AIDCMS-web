# Script to add Material Symbols library to all HTML files
$htmlFiles = Get-ChildItem -Path "d:\Designs of AIDMS & BMS\AIDCMS Web" -Filter "*.html" -Recurse

foreach ($file in $htmlFiles) {
    Write-Host "Processing: $($file.FullName)"
    
    $content = Get-Content $file.FullName -Raw
    
    # Check if Material Symbols link already exists
    if ($content -notmatch 'Material\+Symbols\+Outlined') {
        # Find the position after other font links
        $pattern = '(<link href="https://fonts\.googleapis\.com/css2\?family=Inter[^>]*>)'
        
        if ($content -match $pattern) {
            # Add Material Symbols link after the last Inter font link
            $newContent = $content -replace $pattern, "`$1`n    <link href=`"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined`" rel=`"stylesheet`" />"
            
            Set-Content $file.FullName $newContent -Encoding UTF8
            Write-Host "  Added Material Symbols link to $($file.Name)" -ForegroundColor Green
        } else {
            Write-Host "  No Inter font link found in $($file.Name)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "  Material Symbols already exists in $($file.Name)" -ForegroundColor Cyan
    }
}

Write-Host "Script completed!" -ForegroundColor Green
