# Casablanca Officiel — Stratégie Snapchat Ads 2026

Plan complet pour lancer **Snapchat Ads** sur `casablancaofficiel.fr`. Snapchat est sous-utilisé par la concurrence luxe française, ce qui rend les CPM 30-40 % moins chers qu'Instagram tout en touchant le **cœur de cible Gen Z + Millennial** (16-34 ans).

---

## 1. Pourquoi Snapchat pour Casablanca

- **Audience** : 21 millions d'utilisateurs actifs en France, dont 75 % ont 13-34 ans
- **Engagement** : taux d'engagement moyen 2,5× supérieur à Meta sur la mode/luxe
- **CPM moyen mode** : **3-6 €** (vs 8-12 € sur Meta) — coût par mille impressions
- **Format** : 100 % vertical 9:16 — natif mobile, parfait pour le contenu Casablanca (déjà très visuel)
- **Intent shopping** : 60 % des utilisateurs Snapchat utilisent l'app pour découvrir des marques de mode
- **Ad-blocking** quasi-inexistant sur l'app vs web

---

## 2. Architecture des campagnes

```
Snapchat Ads Manager
├── 🟢 Awareness — Découverte de marque
│   └── Format : Snap Ads vidéo 9:16, 5-15 sec
│   └── Audience : 18-35 ans, France, intérêts mode/luxe
├── 🟢 Conversions — Achats site
│   └── Format : Snap Ads + Story Ads + Collection Ads
│   └── Audience : Lookalike Acheteurs (à activer dès 200 conversions)
├── 🟡 Catalogue dynamique
│   └── Format : Dynamic Product Ads (DPA) via flux Shopify
│   └── Audience : Visiteurs site sans achat
└── 🟠 AR Lens (test, à activer mois 3)
    └── Format : Sponsored Lens — try-on chemise/cap virtuels
    └── Audience : 18-30 ans, Île-de-France + grandes villes
```

### Budget recommandé

| Campagne | Budget jour | Budget mois |
|---|---|---|
| Awareness | 10 € | 300 € |
| Conversions | 15 € | 450 € |
| Catalogue dynamique | 5 € | 150 € |
| **TOTAL** | **30 €/jour** | **900 €/mois** |

⚠️ **Minimum recommandé Snapchat** : 5 €/jour par campagne. En dessous, l'algo n'a pas assez de signal.

---

## 3. Setup technique (CRUCIAL)

### Snap Pixel sur Shopify

1. Aller sur [ads.snapchat.com](https://ads.snapchat.com) → créer un compte Business Manager
2. **Events Manager** → créer un Snap Pixel → récupérer l'ID (format `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)
3. Sur Shopify : installer l'app gratuite **Snapchat Ads** → connecter le pixel
4. Activer les **événements clés** :
   - `PAGE_VIEW` (toutes pages)
   - `VIEW_CONTENT` (fiches produits)
   - `ADD_CART` (ajout panier)
   - `START_CHECKOUT` (début checkout)
   - `PURCHASE` (achat — valeur dynamique)
   - `SIGN_UP` (newsletter / création compte)
5. **Conversion API (CAPI)** : activer pour tracking serveur post-iOS 14 (essentiel)
6. **Test events** : utiliser l'extension Chrome **Snap Pixel Helper** pour vérifier les firings

### Catalogue produits

1. Snap Ads Manager → **Catalogues** → nouveau catalogue
2. **Source** : flux Shopify auto via app (champ `https://casablancaofficiel.fr/products.atom` ou XML)
3. **Mapping des champs** :
   - `id` → SKU produit
   - `title` → Nom complet (max 150 char)
   - `description` → Body description (déjà en français)
   - `image_link` → Image principale CDN
   - `price` → Prix EUR
   - `availability` → in stock
   - `brand` → Casablanca Paris

---

## 4. Awareness — Snap Ads vidéo

**Objectif** : générer de la notoriété + atterrissage page → entrée dans le tunnel.

### Format technique

- **Ratio** : 9:16 (vertical, plein écran)
- **Résolution** : 1080×1920 minimum
- **Durée** : 3-15 secondes (5-7s optimal)
- **Audio** : 60-70 % des Snaps consommés son ON — captioner OBLIGATOIRE
- **Hook visuel** : capter en 1-2 secondes (hand-on-product, mouvement, transition rapide)
- **CTA** : swipe-up vers `/collections/homme.html`

### 5 créas Awareness à produire

#### Créa #1 — « Unboxing Casablanca »
**Brief** :
- Plan 1 (1s) : main qui ouvre une boîte cardboard signature Casablanca
- Plan 2 (2s) : sortir la chemise crème Tennis Club Icon, papier de soie qui craque
- Plan 3 (1s) : détail broderie monogramme « Casa »
- Plan 4 (2s) : modèle l'enfile face miroir, tournoie
- Plan 5 (1s) : logo Casablanca Officiel + URL casablancaofficiel.fr
- Audio : trend audio Snapchat (jazz lounge ou bossa)
- Sous-titres : "Casablanca Paris officiel · Expédié de France 48h"

#### Créa #2 — « POV Tu Reçois Ton Drop »
**Brief** :
- POV main qui reçoit un colis Casablanca chez soi
- Texte image : "POV : tu attends ce drop depuis 3 mois"
- Ouverture, sortie de la pièce, tu te change
- Final : tu te regardes au miroir, satisfaction
- 8s total

#### Créa #3 — « 5 Looks Tennis Club »
**Brief** :
- 5 plans rapides (1s chacun), même modèle, 5 looks différents avec une chemise Tennis Club Icon :
  1. Brunch / pantalon plissé
  2. Tennis-club / short blanc
  3. Soirée / pantalon noir
  4. Plage / maillot
  5. Mariage / costume lin
- Texte image : "1 chemise. 5 façons de la porter."
- CTA : "Découvrir →"

#### Créa #4 — « UGC Témoignage »
**Brief** :
- Vrai client (UGC créateur Snapchat 18-25 ans) filme à la première personne
- "J'ai trouvé THE store pour Casablanca Paris en France. Genre vraiment authentique."
- Montre le packaging, hangtag, QR code authentification
- Termine en se montrant porter la pièce
- 12s

#### Créa #5 — « 6 Tailles, Toutes Disponibles »
**Brief** :
- Texte plein écran : "Tu fais du XS ? Du XXL ?"
- Plan rapide 6 mannequins de tailles différentes portant la même chemise
- "On a TOUTES les tailles XS → XXL"
- "Casablanca Officiel · Revendeur officiel"
- Voix-off : "Casablanca, en taille XS à XXL"
- 10s

### Audiences Awareness

- **Démographie** : 18-35 ans, France métropolitaine
- **Genre** : tous (60 % H / 40 % F)
- **Intérêts** : Mode masculine, Streetwear, Mode haut de gamme, Sport (tennis)
- **Comportements** : Acheteurs en ligne fréquents, Engagés mode
- **Audiences custom** : Visiteurs site (via pixel) — exclure pour Awareness

---

## 5. Conversions — Snap Ads + Story Ads

**Objectif** : retargeter les visiteurs site + lookalike acheteurs pour conversion directe.

### Format Story Ads

- 3-20 plans verticaux qui s'enchaînent
- Idéal pour storytelling produit (cf. Tennis Club Icon avec 5 plans)
- CTA swipe-up à chaque plan

### 3 créas Conversion à produire

#### Créa #1 — « Code MERCI10 -10% »
**Brief** :
- Plan 1 : photo produit héro (Tennis Club Icon Silk Shirt)
- Plan 2 : texte plein écran "MERCI10" en gold
- Plan 3 : "—10 % sur ta première commande"
- CTA swipe-up : "Profiter du code → casablancaofficiel.fr"

#### Créa #2 — « Stock Limité »
**Brief** :
- 5-6 produits Casablanca en carrousel (Snap collection ad style)
- Overlay : "Stock limité · Édition signature"
- Compteur visuel "[N] pièces restantes"

#### Créa #3 — « Avis Clients »
**Brief** :
- 3-4 plans avec citations clients :
  - "Authentique, packaging soigné · Antoine M. ★★★★★"
  - "Service ultra rapide · Karim L. ★★★★★"
  - "47 avis vérifiés"
- Final : "Casablanca Officiel · Revendeur officiel"

### Audiences Conversion

| Audience | Type | Description |
|---|---|---|
| **Site Visitors 30j** | Custom | Visiteurs site sans achat (retargeting) |
| **Add to Cart 7j** | Custom | A ajouté panier sans achat |
| **Lookalike Acheteurs 1%** | Lookalike | Auto-créé après 200 achats trackés |
| **Lookalike Email List 1%** | Lookalike | Importé via Customer Match |

---

## 6. Catalogue dynamique (DPA)

**Objectif** : afficher automatiquement les produits visités sur Snapchat.

Pas de créa manuelle. Configuration auto :
1. Catalogue Shopify connecté (cf. setup §3)
2. Audience : Visiteurs fiche produit 14 jours sans achat
3. Format : carrousel dynamique (jusqu'à 10 produits)
4. Texte global : "Tu as vu. Toujours en stock."
5. CTA : swipe-up vers la fiche produit visitée

---

## 7. AR Lens (test mois 3)

**Objectif** : créer un Lens AR « try-on » qui permet d'essayer virtuellement une casquette Tennis Club Icon ou un t-shirt monogramme.

### Production

- **Plateforme** : Lens Studio (gratuit, Snap)
- **Coût Lens production** : 5 000-15 000 € pour un Lens custom (via studio comme [Wannaby](https://wanna.by) ou [DeepAR](https://deepar.ai))
- **Sponsorship CPM** : 6-12 € pour Snapchat-promoted Lens

### KPIs Lens

- **Plays** : nombre de fois que le Lens est utilisé
- **Shares** : utilisateurs qui partagent leur Snap avec le Lens
- **Average Play Time** : 12-15 secondes (très engageant)
- **Swipe-up rate** : 8-12 % (vs 1-2 % pour Snap Ads classiques)

⚠️ Ne pas lancer en mois 1 — investissement significatif. Tester d'abord les Snap Ads classiques.

---

## 8. KPIs à monitorer

### Hebdomadaire

| KPI | Cible mois 1 | Cible mois 3 |
|---|---|---|
| **Impressions** | 100 000 | 500 000 |
| **Reach** | 30 000 | 150 000 |
| **Swipe-up rate** | > 0,8 % | > 1,5 % |
| **CPM** | < 6 € | < 4 € |
| **CPC** | < 0,80 € | < 0,50 € |
| **Sessions site** | 800 | 7 000 |
| **Taux conversion** | 0,8 % | 1,5 % |
| **Achats** | 6 | 100 |
| **CPA** | < 50 € | < 30 € |
| **ROAS** | > 2× | > 4× |

⚠️ Snapchat a un **CPA initialement plus élevé** que Meta/Google car l'audience est en haut du funnel (découverte). À mesurer sur **incrementality** (ventes incrémentales).

---

## 9. Calendrier de lancement (8 semaines)

| Semaine | Action |
|---|---|
| **S1** | Setup compte Snap Ads + Pixel + catalogue · audit avec Snap Pixel Helper |
| **S2** | Lancer Awareness (Créas #1+#2) · 5 €/jour |
| **S3** | Vérifier reach/CPM · ajuster audiences · ajouter Créas #3+#4 |
| **S4** | Lancer Conversions (retargeting visiteurs) · 10 €/jour |
| **S5** | Activer Catalogue dynamique · scaling Awareness à 10 €/jour |
| **S6** | Audit CPA · pause sets non-performants · scaling sets gagnants |
| **S7** | Décision Lookalike (si > 200 conversions) · UGC Créa #5 |
| **S8** | Bilan complet · décision sur AR Lens (mois 3) |

---

## 10. Best practices Snapchat 2026

### Création vidéo

- ✅ **Hook 1-2 sec** : capture l'attention immédiatement
- ✅ **Sous-titres** toujours (60% son OFF malgré les stats)
- ✅ **Visuel personne réelle** vs packshot (engagement +50 %)
- ✅ **CTA in-video** : pointer vers le swipe-up
- ✅ **Format 9:16 plein cadre** : pas de letterbox/pillarbox
- ✅ **Audio trending** : utiliser les sons populaires Snapchat
- ❌ Éviter les vidéos > 15s sans accroche
- ❌ Pas de logo en plein écran début (l'utilisateur skip)

### Targeting

- ✅ Plus de 18 ans (vu que vente alcool/luxe encadrée)
- ✅ Geo-targeting : France grandes villes (Paris, Lyon, Marseille, Bordeaux, Nice)
- ✅ Custom audience : visiteurs site + email list Klaviyo
- ❌ Audience trop large (> 5 millions) au lancement

### Budget & enchères

- ✅ Auto-bidding au démarrage, puis bid cap après 1 semaine
- ✅ Budget cap quotidien : 30 € recommandé minimum
- ✅ Lifetime budget pour campagnes saisonnières
- ❌ Ne pas changer le budget de plus de 20 % par jour (reset learning phase)

---

## 11. Apps Shopify recommandées

| App | Usage | Prix |
|---|---|---|
| **Snapchat** (officielle) | Pixel + catalogue auto | Gratuit |
| **Stape Server-Side Tracking** | CAPI Snap + Meta + Google | 19 $/mois |
| **Trendsi / SourcingX** | Génération de UGC AI pour créas | 50 $/mois |
| **Vimeo Create** | Création vidéo verticale | Gratuit / 9 $ |

---

## 12. Synergies multi-plateformes

Snapchat fonctionne mieux quand :
- ✅ Branché en parallèle de **Meta Ads** (Facebook + Instagram) : trinity awareness
- ✅ Lien **Klaviyo** : retarget Snap visitors via email
- ✅ Combiné à **Google Ads Search** : Snap génère la demande, Google la convertit
- ✅ Cohérence créa avec Instagram Reels et TikTok (mêmes assets adaptés)

⚠️ **Ne pas dupliquer** les budgets — chaque plateforme a sa fonction. Snapchat = haut du funnel + jeunes. Google Search = bas du funnel + intent. Meta = milieu + scaling.

---

Bon lancement.
