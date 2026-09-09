$js = Get-Content "dist\assets\index-VHwoE0KU.js" -Raw
$found = [regex]::Matches($js, '[./]{0,3}assets/[^\x22\x27\s,`]+')
$found | Select-Object -First 20 -ExpandProperty Value
