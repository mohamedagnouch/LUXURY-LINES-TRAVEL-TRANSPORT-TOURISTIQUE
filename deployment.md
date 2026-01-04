# Guide de Déploiement - Luxury Lines Travel

Ce document explique comment déployer votre site web Next.js en production.

## 1. Déploiement sur Vercel (Recommandé)

Vercel est la plateforme la plus simple pour déployer Next.js.

1. Poussez votre code sur un dépôt GitHub (ou GitLab/Bitbucket).
2. Connectez votre compte Vercel à votre dépôt.
3. Importez le projet.
4. **Configuration des Variables d'Environnement** :
   Dans l'onglet "Settings > Environment Variables", ajoutez les variables suivantes extraites de `.env.example` :
   - `NEXT_PUBLIC_SITE_URL` : `https://luxurylinestravel.com` (ou votre domaine final)
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` : `212708894866`
   - `NEXT_PUBLIC_PHONE_NUMBER` : `+212708894866`
   - `NEXT_PUBLIC_EMAIL` : `infos@luxurylinestravel.com`
5. Cliquez sur "Deploy".

## 2. Déploiement sur Netlify

1. Poussez votre code sur GitHub.
2. Créez un nouveau site sur Netlify à partir de GitHub.
3. Configurez les variables d'environnement dans "Site settings > Environment variables".
4. Netlify détectera automatiquement Next.js et utilisera le plugin Next.js.

## 3. Déploiement sur un Serveur Node.js (VPS / Docker)

Si vous utilisez votre propre serveur :

```bash
# Installation des dépendances
npm install

# Build du projet
npm run build

# Lancement du serveur de production
npm run start
```

Assurez-vous de créer un fichier `.env` sur le serveur avec les variables nécessaires.

## Optimisations de Production effectuées

- **Images** : Support AVIF/WebP activé, configuration CSP pour les SVG.
- **Sécurité** : Headers HSTS, XSS Protection, Frame Options et Referrer Policy configurés.
- **Performance** : Compression activée, `poweredByHeader` supprimé.
- **SEO** : Sitemap et Robots.txt déjà présents et vérifiés.

## Vérification Post-Déploiement

Une fois déployé, vérifiez :
1. Que toutes les pages chargent correctement.
2. Que les liens WhatsApp et Téléphone fonctionnent.
3. Que le formulaire de contact (si présent) fonctionne.
4. Les performances avec Google PageSpeed Insights.
