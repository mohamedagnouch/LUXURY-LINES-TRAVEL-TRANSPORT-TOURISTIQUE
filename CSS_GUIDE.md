# Guide d'utilisation du CSS organisé

## 📋 Table des matières
1. [Variables CSS](#variables-css)
2. [Classes utilitaires](#classes-utilitaires)
3. [Composants](#composants)
4. [Exemples d'utilisation](#exemples-dutilisation)

---

## 🎨 Variables CSS

### Couleurs principales
```css
--color-primary: #ca8a04;        /* Jaune principal */
--color-primary-dark: #a16207;   /* Jaune foncé */
--color-primary-light: #eab308;  /* Jaune clair */
```

### Couleurs de texte
```css
--text-primary: #111827;         /* Texte principal */
--text-secondary: #4b5563;       /* Texte secondaire */
--text-muted: #6b7280;           /* Texte atténué */
```

### Utilisation
```html
<div style="color: var(--color-primary)">Texte en jaune</div>
```

---

## 🛠️ Classes utilitaires

### Conteneurs
```html
<!-- Conteneur avec padding responsive -->
<div class="container-custom">
  Contenu centré avec padding adaptatif
</div>
```

### Sections
```html
<!-- Section avec padding vertical -->
<section class="section-padding">
  Contenu de la section
</section>
```

### Titres de section
```html
<!-- Titre de section responsive -->
<h2 class="section-title">
  Titre de la section
</h2>

<!-- Séparateur décoratif -->
<div class="title-divider"></div>
```

---

## 🎯 Composants

### Cartes (Cards)
```html
<div class="card">
  <div class="card-icon">
    <svg><!-- Icône SVG --></svg>
  </div>
  <h3>Titre de la carte</h3>
  <p>Description de la carte</p>
</div>
```

**Effet**: Hover avec élévation et changement de bordure

### Boutons
```html
<!-- Bouton principal -->
<button class="btn btn-primary">
  Réserver maintenant
</button>

<!-- Bouton secondaire -->
<button class="btn btn-secondary">
  En savoir plus
</button>

<!-- Bouton WhatsApp -->
<a href="..." class="btn btn-whatsapp">
  Contacter sur WhatsApp
</a>
```

### Grilles
```html
<!-- Grille responsive (1 col mobile, 2 tablet, 3 desktop) -->
<div class="grid-features">
  <div class="card">Feature 1</div>
  <div class="card">Feature 2</div>
  <div class="card">Feature 3</div>
</div>
```

### Images
```html
<!-- Image avec bordure arrondie et ombre -->
<div class="image-rounded">
  <img src="..." alt="..." />
</div>
```

### Cartes d'excursion
```html
<div class="excursion-card">
  <div class="excursion-image">
    <img src="..." alt="..." />
  </div>
  <h3>Nom de l'excursion</h3>
  <p>Description</p>
  <a href="..." class="btn btn-primary">Réserver</a>
</div>
```

---

## 📝 Exemples d'utilisation

### Exemple 1: Section avec titre et cartes
```html
<section class="section-padding">
  <div class="container-custom">
    <h2 class="section-title">Nos Services</h2>
    <div class="title-divider"></div>
    
    <div class="grid-features">
      <div class="card">
        <div class="card-icon">
          <svg><!-- Icône --></svg>
        </div>
        <h3>Service 1</h3>
        <p>Description du service</p>
      </div>
      
      <div class="card">
        <div class="card-icon">
          <svg><!-- Icône --></svg>
        </div>
        <h3>Service 2</h3>
        <p>Description du service</p>
      </div>
      
      <div class="card">
        <div class="card-icon">
          <svg><!-- Icône --></svg>
        </div>
        <h3>Service 3</h3>
        <p>Description du service</p>
      </div>
    </div>
  </div>
</section>
```

### Exemple 2: Hero Section
```html
<section class="relative h-[70vh] min-h-[500px] overflow-hidden">
  <div class="absolute inset-0">
    <img src="..." alt="..." class="object-cover w-full h-full" />
    <div class="hero-overlay absolute inset-0"></div>
  </div>
  
  <div class="relative z-10 h-full flex items-center">
    <div class="container-custom">
      <h1 class="hero-title">
        Transport Touristique de Luxe
      </h1>
      <p class="text-lg text-white/95 mb-8">
        Voyagez confortablement au Maroc
      </p>
      <div class="flex gap-4">
        <a href="..." class="btn btn-primary">Réserver</a>
        <a href="..." class="btn btn-secondary">En savoir plus</a>
      </div>
    </div>
  </div>
</section>
```

### Exemple 3: Navigation avec dropdown
```html
<nav class="bg-black text-white">
  <div class="container-custom">
    <div class="flex items-center justify-between">
      <a href="/" class="nav-link">Accueil</a>
      
      <div class="dropdown relative">
        <a href="#" class="nav-link flex items-center gap-1">
          Excursions
          <svg><!-- Icône flèche --></svg>
        </a>
        
        <div class="dropdown-menu">
          <a href="/excursion-1" class="dropdown-item">Excursion 1</a>
          <a href="/excursion-2" class="dropdown-item">Excursion 2</a>
          <a href="/excursion-3" class="dropdown-item">Excursion 3</a>
        </div>
      </div>
    </div>
  </div>
</nav>
```

---

## 🎨 Personnalisation

### Modifier les couleurs principales
Éditez les variables CSS dans `globals.css`:

```css
:root {
  --color-primary: #votre-couleur;
  --color-primary-dark: #votre-couleur-foncée;
  --color-primary-light: #votre-couleur-claire;
}
```

### Modifier les transitions
```css
:root {
  --transition-fast: 150ms;
  --transition-base: 200ms;
  --transition-slow: 300ms;
}
```

---

## ✅ Avantages de cette organisation

1. **Maintenabilité**: Classes réutilisables au lieu de répéter les styles
2. **Cohérence**: Design uniforme sur tout le site
3. **Performance**: Moins de CSS dupliqué
4. **Flexibilité**: Facile à personnaliser via les variables CSS
5. **Responsive**: Breakpoints intégrés dans les classes
6. **Accessibilité**: Styles de focus et transitions optimisés

---

## 📱 Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1023px
- **Desktop**: ≥ 1024px

Les classes comme `.section-title`, `.hero-title`, et `.grid-features` s'adaptent automatiquement à ces breakpoints.
