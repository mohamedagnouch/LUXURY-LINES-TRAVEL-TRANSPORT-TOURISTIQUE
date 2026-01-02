# Script pour mettre à jour les pages restantes avec le composant Header
$pages = @(
    "c:/Users/admin/websiteapp/app/excursion-imlil-vallee-atlas/page.tsx",
    "c:/Users/admin/websiteapp/app/circuit-4-jours-desert-merzouga-fes/page.tsx",
    "c:/Users/admin/websiteapp/app/circuit-3-jours-marrakech-zagora/page.tsx"
)

foreach ($page in $pages) {
    Write-Host "Processing: $page"
    
    # Lire le contenu du fichier
    $content = Get-Content $page -Raw
    
    # Vérifier si le fichier contient déjà l'import Header
    if ($content -notmatch 'import Header from "@/components/Header"') {
        Write-Host "  - Adding Header import..."
        # Ajouter l'import Header après le premier import
        $content = $content -replace '(import Image from "next/image";)', '$1`nimport Header from "@/components/Header";'
    }
    
    # Remplacer le code d'en-tête personnalisé par <Header />
    if ($content -match '{\s*/\*\s*Top Contact Bar\s*\*/}') {
        Write-Host "  - Replacing custom header with Header component..."
        # Pattern pour trouver et remplacer tout le bloc d'en-tête
        $pattern = '(?s){\s*/\*\s*Top Contact Bar\s*\*/}.*?</nav>'
        $replacement = '<Header />'
        $content = $content -replace $pattern, $replacement
    }
    
    # Écrire le contenu modifié
    Set-Content -Path $page -Value $content -NoNewline
    Write-Host "  ✓ Done"
}

Write-Host "`nAll pages updated successfully!"
