Get-ChildItem -Path "src" -Recurse -Include "*.jsx","*.js" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    $fixed = $content -replace "'./assets/", "'/assets/" -replace '"./assets/', '"/assets/'
    Set-Content $_.FullName $fixed -NoNewline
    Write-Host "Reverted: $($_.Name)"
}
