# DH — Performance & Health Assessment (landing)

Refonte de la landing page en **React 19 + Vite 7 + Tailwind CSS v4**, en conservant
l'identité visuelle DH (rouge / or / sombre, Anton + Manrope) et en améliorant l'UX/UI,
le responsive et l'accessibilité.

## Lancer en local

```bash
npm install
npm run dev      # serveur de dev (http://localhost:5173)
npm run build    # build de production dans /dist
npm run preview  # prévisualiser le build
```

## Structure

```
src/
  main.jsx              point d'entrée React
  index.css            thème Tailwind v4 (@theme) + tokens de marque + reveal
  App.jsx              assemblage des sections
  data/content.js      contenu éditable (avis, FAQ, features, includes)
  lib/useReveal.js     hook IntersectionObserver (révélation au scroll)
  components/
    ui.jsx             Container, Button, Reveal, SectionHeading, MediaPlaceholder
    Icon.jsx           set d'icônes SVG
    Logo.jsx           wordmark DH (texte — remplacer par le vrai logo si dispo)
    TopBar / Hero / Strip / Problem / Differentiators / Process /
    Testimonials / Results / Value / Faq / LeadMagnet / FinalCta /
    Booking / Footer / MobileCta / ExitIntentModal
    LeadForm.jsx       formulaire de capture réutilisable
```

## À brancher (TODO)

- **Booking** (`components/Booking.jsx`) : remplacer le bloc en pointillés par ton embed
  GoHighLevel / Calendly.
- **Formulaires lead** (`components/LeadForm.jsx`) : remplacer le `console.log` par ton
  webhook / API GoHighLevel. Chaque formulaire porte un `magnet`
  (`scorecard` | `guide` | `scorecard-exit`) pour l'attribution.
- **Médias** : les `MediaPlaceholder` (photos / vidéos) indiquent le format attendu —
  remplacer par les vrais assets.
- **Logo** : `components/Logo.jsx` utilise un wordmark texte ; remplacer par `logo-dh2-white.png`
  si tu veux l'image.

## Ce qui a été amélioré côté UX/UI

- Typographie fluide (`clamp`) et grilles responsives revues (breakpoints intermédiaires
  ajoutés pour tablette).
- Révélations au scroll (IntersectionObserver), respectant `prefers-reduced-motion`.
- Barre supérieure réactive au scroll (ombre + fond au défilement).
- FAQ en accordéon animé (hauteur fluide) au lieu de `<details>` brut.
- Accessibilité : focus visibles au clavier, modale exit-intent avec `role="dialog"`,
  `aria-modal`, fermeture par Échap et focus géré, `aria-expanded` sur la FAQ.
- Micro-interactions (hover cartes, CTA) et états de formulaire propres.
```
# LP-DanHunter
