# TOUR FELICI SRL - Script creazione struttura progetto
# Versione senza emoji per compatibilita PowerShell

$projectName = "tour-felici"
$rootPath = Join-Path (Get-Location) $projectName

Write-Host "Creazione progetto Tour Felici..." -ForegroundColor Cyan
Write-Host "Percorso: $rootPath" -ForegroundColor Gray
Write-Host ""

# Crea cartella root
if (-not (Test-Path $rootPath)) {
    New-Item -ItemType Directory -Path $rootPath -Force | Out-Null
    Write-Host "[OK] Cartella root creata" -ForegroundColor Green
}

# Funzione per creare cartelle
function CreateFolder($path) {
    $fullPath = Join-Path $rootPath $path
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "  [DIR] $path" -ForegroundColor DarkGray
    }
}

# Funzione per creare file vuoti
function CreateFile($path) {
    $fullPath = Join-Path $rootPath $path
    $folder = Split-Path $fullPath -Parent
    if (-not (Test-Path $folder)) {
        New-Item -ItemType Directory -Path $folder -Force | Out-Null
    }
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType File -Path $fullPath -Force | Out-Null
        Write-Host "  [FILE] $path" -ForegroundColor DarkGray
    }
}

Write-Host ""
Write-Host "Creazione cartelle..." -ForegroundColor Cyan

# Cartelle root
CreateFolder ".github/workflows"
CreateFolder "docs"
CreateFolder "public/images/hero"
CreateFolder "public/images/guide"
CreateFolder "public/images/natura"
CreateFolder "public/images/borghi"
CreateFolder "public/tracks"

# Cartelle src/app
CreateFolder "src/app/guide/[slug]"
CreateFolder "src/app/natura"
CreateFolder "src/app/storia"
CreateFolder "src/app/agricoltura"
CreateFolder "src/app/sport"
CreateFolder "src/app/cultura"
CreateFolder "src/app/ripopolamento"
CreateFolder "src/app/newsletter"
CreateFolder "src/app/api/v1/auth/[...nextauth]"
CreateFolder "src/app/api/v1/itinerari/[slug]"
CreateFolder "src/app/api/v1/guide"
CreateFolder "src/app/api/v1/booking"
CreateFolder "src/app/api/v1/newsletter"
CreateFolder "src/app/api/v1/produttori"

# Cartelle src/components
CreateFolder "src/components/layout"
CreateFolder "src/components/guide"
CreateFolder "src/components/newsletter"
CreateFolder "src/components/shared"

# Cartelle src/lib
CreateFolder "src/lib/validators"

# Cartelle src/types
CreateFolder "src/types"

Write-Host ""
Write-Host "Creazione file di configurazione..." -ForegroundColor Cyan

# File di configurazione
CreateFile ".env.local"
CreateFile ".env.example"
CreateFile ".gitignore"
CreateFile "package.json"
CreateFile "next.config.mjs"
CreateFile "tailwind.config.ts"
CreateFile "tsconfig.json"
CreateFile "postcss.config.mjs"
CreateFile "README.md"

Write-Host ""
Write-Host "Creazione file GitHub Actions..." -ForegroundColor Cyan
CreateFile ".github/workflows/ci.yml"

Write-Host ""
Write-Host "Creazione file documentazione..." -ForegroundColor Cyan
CreateFile "docs/database-schema.sql"
CreateFile "docs/api-reference.md"

Write-Host ""
Write-Host "Creazione file public..." -ForegroundColor Cyan
CreateFile "public/images/hero/.gitkeep"
CreateFile "public/images/guide/.gitkeep"
CreateFile "public/images/natura/.gitkeep"
CreateFile "public/images/borghi/.gitkeep"
CreateFile "public/tracks/.gitkeep"

Write-Host ""
Write-Host "Creazione file src/app..." -ForegroundColor Cyan

# File app root
CreateFile "src/app/layout.tsx"
CreateFile "src/app/page.tsx"
CreateFile "src/app/globals.css"
CreateFile "src/app/not-found.tsx"
CreateFile "src/app/error.tsx"

# Pagine sezioni
CreateFile "src/app/guide/page.tsx"
CreateFile "src/app/guide/[slug]/page.tsx"
CreateFile "src/app/natura/page.tsx"
CreateFile "src/app/storia/page.tsx"
CreateFile "src/app/agricoltura/page.tsx"
CreateFile "src/app/sport/page.tsx"
CreateFile "src/app/cultura/page.tsx"
CreateFile "src/app/ripopolamento/page.tsx"
CreateFile "src/app/newsletter/page.tsx"

Write-Host ""
Write-Host "Creazione file API routes..." -ForegroundColor Cyan

# API routes
CreateFile "src/app/api/v1/auth/[...nextauth]/route.ts"
CreateFile "src/app/api/v1/itinerari/route.ts"
CreateFile "src/app/api/v1/itinerari/[slug]/route.ts"
CreateFile "src/app/api/v1/guide/route.ts"
CreateFile "src/app/api/v1/booking/route.ts"
CreateFile "src/app/api/v1/newsletter/route.ts"
CreateFile "src/app/api/v1/produttori/route.ts"

Write-Host ""
Write-Host "Creazione file components..." -ForegroundColor Cyan

# Layout components
CreateFile "src/components/layout/Header.tsx"
CreateFile "src/components/layout/Footer.tsx"
CreateFile "src/components/layout/MobileMenu.tsx"

# Guide components
CreateFile "src/components/guide/GuideHero.tsx"
CreateFile "src/components/guide/ExperienceCard.tsx"
CreateFile "src/components/guide/ExperienceGrid.tsx"
CreateFile "src/components/guide/BookingForm.tsx"
CreateFile "src/components/guide/GuideProfile.tsx"

# Newsletter component
CreateFile "src/components/newsletter/NewsletterForm.tsx"

# Shared components
CreateFile "src/components/shared/SectionTitle.tsx"
CreateFile "src/components/shared/PillarCard.tsx"
CreateFile "src/components/shared/Placeholder.tsx"
CreateFile "src/components/shared/Badge.tsx"
CreateFile "src/components/shared/Button.tsx"
CreateFile "src/components/shared/Container.tsx"

Write-Host ""
Write-Host "Creazione file lib..." -ForegroundColor Cyan

# Lib files
CreateFile "src/lib/db.ts"
CreateFile "src/lib/auth.ts"
CreateFile "src/lib/utils.ts"

# Validators
CreateFile "src/lib/validators/booking.ts"
CreateFile "src/lib/validators/newsletter.ts"

Write-Host ""
Write-Host "Creazione file types..." -ForegroundColor Cyan
CreateFile "src/types/domain.ts"

Write-Host ""
Write-Host "============================================" -ForegroundColor Green
Write-Host "Struttura progetto creata con successo!" -ForegroundColor Green
Write-Host "============================================" -ForegroundColor Green
Write-Host ""
Write-Host "Prossimi passi:" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Entra nella cartella:" -ForegroundColor White
Write-Host "   cd tour-felici" -ForegroundColor Yellow
Write-Host ""
Write-Host "2. Inizializza Next.js:" -ForegroundColor White
Write-Host "   npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Installa dipendenze:" -ForegroundColor White
Write-Host "   npm install pg next-auth zod bcryptjs clsx tailwind-merge lucide-react" -ForegroundColor Yellow
Write-Host "   npm install -D @types/pg @types/bcryptjs" -ForegroundColor Yellow
Write-Host ""
Write-Host "4. Apri in VS Code:" -ForegroundColor White
Write-Host "   code ." -ForegroundColor Yellow
Write-Host ""
Write-Host "5. Popola i file con il contenuto dalla conversazione" -ForegroundColor White
Write-Host ""
Write-Host "6. Configura .env.local" -ForegroundColor White
Write-Host ""
Write-Host "7. Avvia il server:" -ForegroundColor White
Write-Host "   npm run dev" -ForegroundColor Yellow
Write-Host ""