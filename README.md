# Casablanca Officiel — Guide de mise en ligne et de lancement

Bienvenue. Ce dossier contient un **prototype statique** complet (HTML/CSS/JS) du site casablancaofficiel.fr inspiré du thème **Prestige Shopify**, avec **570 produits Casablanca Paris officiels** consolidés depuis 15 fichiers CSV d'export Shopify.

---

## 1. Aperçu du projet

```
casablancaofficiel/                  (613 fichiers, ~15 MB)
├── index.html                    Homepage (4 bannières, 8 gammes, best-sellers, journal, engagements)
├── cart.html · checkout.html     Panier complet + tunnel de commande démo
├── collections/                  9 pages de gammes
│   ├── homme.html               (vue d'ensemble)
│   ├── t-shirts.html            (73 t-shirts)
│   ├── chemises.html            (82 chemises)
│   ├── polos.html               (23 polos)
│   ├── mailles.html             (50 pièces de maille)
│   ├── ensembles.html           (31 ensembles)
│   ├── pantalons.html           (74 pantalons & tailoring)
│   ├── maillots.html            (11 maillots de bain)
│   ├── survetements.html        (225 pcs après-sport, jersey, outerwear)
│   ├── accessoires.html         (55 accessoires)
│   ├── nouveautes.html          (sélection SS24/PS24)
│   └── best-sellers.html        (Tennis Club Icon)
├── products/                     570+ fiches produits HTML
├── blog/                         3 articles SEO + index
├── pages/                        10 pages institutionnelles (about, contact, CGV, RGPD…)
├── marketing/                    Créas pub Meta/Google + flows Klaviyo
├── assets/css · assets/js        Design system Prestige + JS panier/cookies
├── data/                         CSV bruts originaux
├── products.csv                  Master CSV format Shopify (5000+ lignes)
├── sitemap.xml                   570 URLs produits + collections + blog + pages
├── robots.txt
└── README.md                     (ce fichier)
```

### Visualiser le prototype

```bash
cd /Users/user/casablancaofficiel
python3 -m http.server 8080
# Ouvrir http://localhost:8080
```

---

## 2. Catalogue intégré

**570 produits Casablanca Paris** uniques, consolidés depuis 15 fichiers CSV (10 ans d'archives) avec **tailles XS→XXL garanties** sur les hauts/maille/sweats et **28-38** sur les pantalons numériques.

| Gamme | Produits | Tailles |
|---|---|---|
| T-shirts | 73 | XS-XXL |
| Chemises | 82 | XS-XXL |
| Polos | 23 | XS-XXL |
| Maille | 50 | XS-XXL |
| Ensembles | 31 | XS-XXL |
| Pantalons | 74 | XS-XXL ou 28-38 |
| Maillots | 11 | XS-XXL |
| Survêtements | 170 | XS-XXL |
| Accessoires | 55 | OS / natives |

**Pièces signature représentées** : Tennis Club Icon (silk shirt, t-shirt, sweat, cap), Souvenir, Studio De Musique, L'Arche, Spirit Lake, Souvenirs De Vacances, Casa Sport, Sport Grid, Tennis Horizon, Beach Club, Soleil Levant, Joyaux D'Afrique, Afro Cubism, Playful Eagle, Striped Towelling, Rib Effect, Scuba Crochet, et bien d'autres.

---

## 3. Migration vers Shopify

### Étape 1 — Compte Shopify + thème Prestige

1. Créer un compte Shopify Basic (39 €/mois)
2. Theme Store → acheter et installer **Prestige** (380 $)
3. Configurer aux couleurs du prototype :
   - Background `#efefef` · Encre `#1c1b1b` · Accent doré `#d79930`
   - Heading font : **Eczar** · Text font : **Nunito Sans**
   - Heading uppercase : ON · Heading size : small

### Étape 2 — Import du catalogue

Boutique → **Produits → Importer** → glisser `products.csv`. Shopify créera automatiquement :
- 570 produits
- Toutes les variantes (taille × couleur) — environ 5000+ variantes
- Images CDN officielles Casablanca (déjà liées via URL)
- Métadonnées SEO

### Étape 3 — Collections automatiques

Créez des collections **smart** basées sur les tags/types :

| Collection | Condition |
|---|---|
| Homme | tag contient `homme` |
| T-shirts | type = `T-SHIRTS - UNISEX` |
| Chemises | type contient `SHIRTS` |
| Maille | type = `KNITWEAR` |
| Pantalons | type contient `TROUSERS` ou `TAILORING` |
| Maillots | type = `SWIMWEAR` |
| Accessoires | type = `ACCESSORIES` |
| Survêtements | type contient `APRES SPORT` ou `OUTERWEAR` ou `JERSEY` |
| Best-sellers | tag contient `tennis-club-icon` |
| Nouveautés | tag contient `SS24` ou `PS24` |

### Étape 4 — Stratégie ads

Voir `marketing/ads-creatives.md` pour briefs Meta/Google/TikTok et `marketing/klaviyo-flows.md` pour les 5 flows e-mail essentiels (welcome, abandon panier, post-achat, anniversaire, réactivation).

---

## 4. Fonctionnalités du prototype

- ✅ Design system Prestige (Eczar + Nunito Sans, palette neutre + accent doré)
- ✅ 4 bannières homepage (hero, Beach Club, Studio De Musique, Tennis Club Icon, Made in Italy)
- ✅ Header sticky avec menu mobile
- ✅ Drawer panier localStorage (add/inc/dec/rm)
- ✅ Page panier complète avec code promo (MERCI10, VENEZ10, FIDELE15, ANNIVCASA15, REVENEZ20)
- ✅ Tunnel checkout 4 étapes avec récap démo
- ✅ Bandeau cookies RGPD (consent management)
- ✅ Schema.org Product/BreadcrumbList/Article sur toutes les pages
- ✅ Pagination implicite (collections affichent jusqu'à 178 produits)
- ✅ Filtres (taille, couleur, prix) sur la collection Homme
- ✅ Cards produits avec swatches couleurs + résumé tailles
- ✅ Sticky CTA mobile sur fiches produits
- ✅ Reveal animations (Intersection Observer)
- ✅ Sitemap.xml complet pour SEO
- ✅ Authenticité, livraison, retours détaillés
- ✅ Blog SEO (3 articles : 5 looks, guide tailles, histoire de la marque)

---

## 5. À compléter avant production

- [ ] Faire **valider les CGV / mentions légales / RGPD** par un juriste
- [ ] Vérifier le **contrat de revendeur** (autorisation du nom de domaine, prix planchers)
- [ ] **Photos produits** — actuellement les URLs CDN Shopify de Casablanca ; à confirmer avec votre B2B
- [ ] **Setup Shopify Payments** + PayPal
- [ ] **Tracking** : Meta Pixel + GA4 + Google Ads (consent gating prêt dans le bandeau cookies)
- [ ] **Klaviyo** : importer les 5 flows depuis `marketing/klaviyo-flows.md`
- [ ] **Domaine** : connecter casablancaofficiel.fr aux DNS Shopify

---

## 6. Vérification

```bash
# Compter les fichiers
find . -type f -name "*.html" | wc -l
# → ~600 fichiers HTML

# Vérifier 0 référence Unsplash
grep -rn "images.unsplash.com" --include="*.html"
# → 0 résultat

# Vérifier les images Casablanca
grep -ro "cdn.shopify.com" --include="*.html" | wc -l
# → 1500+ références

# Lancer le serveur de dev
python3 -m http.server 8080
```

---

Bon lancement.
