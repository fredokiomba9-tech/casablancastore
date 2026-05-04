# Casablanca Officiel — Créas publicitaires prêtes à utiliser

Toutes les créas sont en français, conformes aux best practices 2026 (post-iOS, post-Performance Max). Format prêt à copier-coller dans Meta Ads Manager, Google Ads ou TikTok Ads.

---

## 1. Meta Ads (Facebook + Instagram)

### Stratégie de structure

```
Compte Meta Ads
└─ Campagne 1 — TOFU "Acquisition large" (Conversion → Achats)
   ├─ Set 1 — Audience large (intérêts mode/luxe, FR, 25-45)
   ├─ Set 2 — Lookalike 1% Acheteurs (à activer dès 50 conversions)
   └─ Set 3 — Lookalike 1% Visiteurs site
└─ Campagne 2 — MOFU "Catalogue dynamique" (DPA, Conversion)
   └─ Audience : Visiteurs / AddToCart 14j (rétention)
└─ Campagne 3 — BOFU "Abandon panier" (Conversion)
   └─ Audience : InitiateCheckout 7j sans achat
```

Budget recommandé : **30 €/jour total** (10 € TOFU large + 10 € MOFU catalogue + 10 € BOFU retargeting). Augmenter de 20 % par semaine sur les sets gagnants.

---

### A. Créas TOFU — Acquisition large

#### Visuel 1 — Vidéo verticale 15s "Unboxing"
**Brief tournage**
- Mains qui ouvrent une boîte Casablanca Paris (cardboard signature)
- Sortir le sachet protecteur, déplier la chemise crème
- Plan détail : monogramme brodé, étiquette, hangtag
- Plan large : la chemise sur cintre, dans une lumière dorée
- Musique : jazz lounge ou bossa-nova feutrée
- Pas de voix, juste sons d'ambiance (papier de soie, déballage)

**Texte principal (Primary text)**
```
Officiel. Authentique. Expédié de France en 24h.
La chemise en soie monogramme Casablanca Paris, livrée dans son
écrin signature avec certificat d'authenticité.

Découvrez la collection homme — Paiement sécurisé.
```

**Headline (titre)** : `La chemise Casablanca, livrée chez vous`
**Description** : `Revendeur officiel · Livraison France offerte`
**CTA** : `Acheter`
**Lien** : `casablancaofficiel.fr/collections/homme.html`

---

#### Visuel 2 — Carrousel 5 cartes "5 looks"
**Carte 1** — Image lookbook chemise crème + pantalon plissé
**Texte de carte** : `LE BRUNCH DOMINICAL — Chemise crème, pantalon plissé. 970 €`

**Carte 2** — Image polo Tennis Club marine + short blanc
**Texte** : `TENNIS-CLUB — Polo Tennis Club, short blanc. 320 €`

**Carte 3** — Image chemise + pantalon noir + loafers
**Texte** : `LA SOIRÉE D'ÉTÉ — Chemise crème, pantalon noir. 1 190 €`

**Carte 4** — Image maillot + chemise ouverte plage
**Texte** : `LA PLAGE — Chemise crème, maillot bleu Riviera. 940 €`

**Carte 5** — Image costume lin + chemise crème
**Texte** : `LE MARIAGE — Chemise crème, costume lin. À partir de 650 €`

**Texte principal**
```
5 façons de porter la chemise Casablanca, du brunch au mariage.
Pièces officielles, expédiées de France.

Trouvez la vôtre →
```

**Headline** : `5 looks · 1 chemise iconique`
**CTA** : `Voir la collection`
**Lien** : `casablancaofficiel.fr/blog/comment-porter-chemise-casablanca.html`

---

#### Visuel 3 — Image statique "Avant/Après" port de la pièce
**Brief**
- Split screen : à gauche, chemise sur cintre ; à droite, chemise portée par modèle au bord d'une piscine
- Overlay texte : `650 €`
- Logo Casablanca Officiel en bas à droite, discret

**Texte principal**
```
La chemise en soie monogramme Casablanca Paris.
Pièce signature, 100% soie de mûrier, brodée à la main.

Authentifiée, expédiée de France sous 24h.
650 €.
```

**Headline** : `100% authentique · 100% soie`
**CTA** : `Acheter`

---

#### Visuel 4 — Vidéo verticale 9s "GRWM" (Get Ready With Me)
**Brief**
- Influenceur 25-35 ans, style propre, en peignoir
- Plan 1 (2s) : sort la chemise crème de l'armoire
- Plan 2 (2s) : enfile la chemise face miroir
- Plan 3 (2s) : ferme deux boutons, ajuste les manches
- Plan 4 (3s) : se retourne, regarde caméra, hoche la tête
- Texte intégré image-par-image : "POV: tu réessayes ta première Casa"
- Musique : trending audio TikTok mood luxe

**Texte principal**
```
Tu hésitais à investir dans LA chemise. Tu hésites plus.
Casablanca Paris, expédié de France, 24h.

Ta première Casa t'attend →
```

**Headline** : `Ta première Casablanca`
**CTA** : `Acheter`

---

#### Visuel 5 — Témoignage client (UGC)
**Brief**
- Vrai client filme à la première personne
- "J'ai reçu ma commande hier de chez @casablancaofficiel, je l'ai ouverte ce matin avant d'aller au boulot. Voilà ce que ça donne."
- Montre packaging, hangtag, étiquette, puis le porte
- 30s max
- Pas de filtre, lumière naturelle

**Texte principal**
```
"Service ultra rapide, packaging soigné, qualité au rendez-vous.
J'avais peur des contrefaçons en commandant en ligne, ici aucun doute."
— Antoine M., Paris ★★★★★

Ils sont 47 à avoir laissé un avis vérifié.
```

**Headline** : `47 avis 5 étoiles vérifiés`
**CTA** : `Voir les avis`

---

### B. Créas MOFU — Catalogue dynamique (DPA)

Pas de créa manuelle. Configuration auto via Meta Catalog Manager :
- Source : flux Shopify (auto-syncé via app Facebook & Instagram)
- Audience : visiteurs site 14 jours sans achat
- Format : carrousel produits dynamique

**Texte global du catalogue**
```
Vous avez aimé. Toujours en stock.
Livraison France offerte (sans minimum).
Paiement sécurisé.
```

**Headline** : `{{product.name}}` (auto)
**Description** : `À partir de {{product.price}} · Livraison France`

---

### C. Créas BOFU — Abandon panier

#### Visuel — Image produit + texte urgence

**Brief**
- Photo du produit le plus cher du panier sur fond crème
- Overlay : "VOTRE PIÈCE VOUS ATTEND"
- Petit timer visuel (sablier, pas de countdown alarmiste)

**Texte principal**
```
Votre {{product}} est encore dans votre panier.
Stock limité — la couleur {{color}} part vite.

Pour finaliser, code MERCI10 → -10 % ce soir uniquement.
```

**Headline** : `Code -10% expire ce soir`
**CTA** : `Finaliser mon panier`

---

### D. Headlines testables (rotation Meta DCO)

À copier dans le champ "Headlines" en mode dynamique (5 headlines) :

```
1. Casablanca Paris officiel · 24h
2. La chemise iconique, expédiée de France
3. 100% authentique · Revendeur officiel
4. Livraison France offerte
5. 47 avis 5 étoiles · 0 contrefaçon
6. Ta première Casablanca
8. Stock limité · Drop SS26
9. Tennis-club, plage, soirée
10. Le luxe à la française
```

---

## 2. Google Ads

### Performance Max — Asset Group "Homme"

#### Headlines (15 max, 30 caractères chacun)

```
1. Casablanca Paris Officiel
2. Chemises Soie · 650 €
3. Polos Tennis Club Authentiques
4. Livraison France
5. Revendeur Officiel France
6. Casablanca Homme · Crème
7. Polos Casablanca Marine
8. Mailles Casablanca Sauge
9. Authenticité Garantie
10. Paiement Sécurisé
11. Retours 30 Jours Offerts
12. Sneakers Atlantis Court
13. Veste Soie Terracotta
14. Beach Club 2026
15. Tennis Club · Iconique
```

#### Long Headlines (5 max, 90 caractères)

```
1. Casablanca Paris pour Homme · Revendeur Officiel France · Expédition sous 48h Offerte
2. Chemises en Soie, Polos Tennis Club, Mailles · Casablanca Authentique · Expédié de France
3. Toute la Collection Homme Casablanca Paris · Authentifié · Livraison gratuite sans minimum
4. Casablanca Officiel · Revendeur Officiel · 47 Avis 5 Étoiles · Authenticité Garantie
5. Pièces Officielles Casablanca Paris · Boîte d'Origine · Hangtag · Certificat Inclus
```

#### Descriptions (5 max, 90 caractères)

```
1. Toute la collection homme Casablanca Paris en stock. Expédition France offerte sans minimum.
2. Authenticité garantie. Boîte d'origine, hangtag, certificat. 47 avis 5 étoiles vérifiés.
3. Paiement sécurisé. Retours 14 jours offerts. Service client français.
4. Chemises soie, polos Tennis Club, mailles, ensembles. Drop SS26 disponible maintenant.
5. Revendeur officiel agréé. Pièces neuves, jamais portées, achetées directement à la maison.
```

#### Sitelinks à activer

```
- Tout l'homme → /collections/homme
- Nouveautés → /collections/nouveautes
- Chemises → /collections/chemises
- Polos → /collections/polos
- Best-sellers → /collections/best-sellers
- Authenticité → /pages/authenticite
- Livraison → /pages/livraison
```

#### Callouts (extraits)

```
- Livraison France offerte (sans minimum)
- Authenticité 100% garantie
- Retours 14 jours gratuits
- Revendeur officiel agréé
- Service client 6j/7
- Boîte d'origine + certificat
- Made in Italy
```

---

### Search — Campagne "Marque" (priorité absolue, ROAS 6-10×)

**Mots-clés (mode "exact" entre crochets)**

```
[casablanca paris]
[casablanca paris homme]
[casablanca chemise]
[casablanca polo]
[casablanca chemise soie]
[casablanca tennis club]
[chemise casablanca paris]
[polo casablanca paris]
[casablanca paris boutique]
[casablanca paris france]
[casablanca paris officiel]
[casablanca paris en ligne]
[acheter casablanca paris]
[casablanca paris vetement]
[casablanca paris homme prix]
```

**Annonce textuelle responsive**

Headlines :
```
1. Casablanca Paris Officiel
2. Revendeur Officiel France
3. Livraison France Offerte
4. Chemises Soie · Polos · Maille
5. Authenticité 100% Garantie
6. Paiement 3× Sans Frais
7. Drop SS26 Disponible
8. Casablanca Officiel Paris
```

Descriptions :
```
1. Toute la collection homme Casablanca Paris officielle. Authentifié, expédié de France · expédition sous 48h.
2. 47 avis 5 étoiles vérifiés. Boîte d'origine + hangtag + certificat. Retours 14 jours.
```

URL d'affichage : `casablancaofficiel.fr/casablanca-paris-officiel`

---

### Search — Campagne "Concurrents" (test, à activer en mois 2)

**Mots-clés** (en modificateur large pour découverte)

```
"+aimé +leon +dore +alternative"
"+wales +bonner +chemise"
"+streetwear +luxe +français"
"+chemise +soie +luxe +homme"
"+polo +luxe +brodé"
"+casablanca +paris +alternative"
```

⚠️ Surveiller le CPC qui peut grimper à 3-5 €. Ne tenir que si conversion > 0,5 %.

---

### Shopping (auto via Performance Max)

Configuration via **Google Merchant Center**, lié à Shopify (app **Google & YouTube**, gratuite).

Champs de flux à compléter dans Shopify :
- `Google Shopping / Gender` → `Male` (déjà dans le CSV)
- `Google Shopping / Age Group` → `Adult` (déjà dans le CSV)
- `Google Shopping / Condition` → `new` (déjà dans le CSV)
- Catégorie produit Google → automatique via le CSV
- Prix → auto-syncé depuis Shopify

---

## 3. TikTok Ads (à activer après stabilisation Meta + Google)

### Stratégie

Budget 20 €/jour sur 1 seule campagne **Conversion** (objectif Achat).
Audience : large, FR, 18-35 ans, intérêts "Luxury fashion", "Streetwear", "Fashion brands".

### Créa #1 — POV "Tu déballes ta première Casablanca"

**Brief**
- Format 9:16, 15s
- Plan main qui sort la boîte du carton de livraison
- Plan rapide ouverture de la boîte (sons authentiques)
- Plan détail hangtag, broderie monogramme
- Plan se mettre la chemise face miroir
- Texte à l'écran (typo simple, blanche) :
  - "POV: tu te lances enfin" (0-2s)
  - "Casablanca Paris officiel" (2-4s)
  - "Boîte d'origine" (4-6s)
  - "Hangtag + certificat" (6-8s)
  - "Service français en 24h" (8-10s)
  - "À ton tour →" (10-15s, avec lien dans bio)
- Audio : trend bossa-nova ou jazz lounge (vérifier disponibilité commerciale)

**Description**
```
La chemise iconique Casablanca Paris, livrée de France en 24h.
Authentique. Expédiée par un revendeur officiel français.

Lien en bio · paiement sécurisé 🌴
```

---

### Créa #2 — Hook "Avant que les contrefaçons arrivent"

**Brief**
- Texte à l'écran direct :
  - "AVANT que les contrefaçons arrivent" (0-2s)
  - "voilà comment reconnaître une vraie Casablanca" (2-4s)
- Plan détail : tag intérieur, qualité du tissu, finition broderie, hangtag avec QR code
- "Scanné ce QR → confirmation directe Casablanca Paris"
- Final : "Plus simple : passer par un revendeur officiel"
- CTA : "Casablanca Officiel · lien en bio"

**Description**
```
Comment reconnaître une vraie Casablanca Paris ?
1. Le hangtag a un QR code
2. La broderie est nette
3. La boîte est cardboard signature
4. OU : passer par un revendeur officiel comme nous 😉

Lien en bio.
```

---

### Créa #3 — Lookbook 30s "5 looks SS26"

**Brief**
- Format 9:16, 30s
- 5 plans de 5s chacun, transitions rapides
- Chaque plan = un look complet (les 5 décrits dans l'article blog)
- Légende dans chaque plan : "Brunch", "Tennis", "Soirée", "Plage", "Mariage"
- Audio : track énergique mais classy (Daft Punk-style)
- Texte final : "Toute la collection · Casablanca Officiel"

---

## 4. Pinterest Ads (à activer en M3-M4)

Pinterest convertit très bien en mode/luxe (panier moyen élevé). Format **Standard Pin** + **Idea Pin** (vidéo).

### Pins idée à créer (mood board)

```
1. "Comment porter une chemise Casablanca · 5 looks"
   → Pin vidéo 4 plans (brunch, tennis, soirée, plage)
   → Lien vers article blog

2. "Guide des tailles Casablanca · ne plus se tromper"
   → Pin infographie tableau tailles
   → Lien vers blog/guide-tailles-casablanca

3. "Le pyjama soie Casablanca · 1100 €"
   → Pin produit haute qualité
   → Lien vers fiche produit

4. "Wishlist Casablanca SS26"
   → Pin carrousel des best-sellers
   → Lien vers /collections/best-sellers

5. "Mariage en bord de mer · Casablanca"
   → Pin lookbook mariage
   → Lien vers /collections/tailoring
```

---

## 5. Canevas de production des visuels

Pour produire les créas vous-même (recommandé en early stage) :

### Outils gratuits ou peu chers
- **Canva Pro** (12 €/mois) — templates Meta + TikTok pré-faits
- **CapCut** (gratuit) — montage vidéo TikTok-style
- **Photopea** (gratuit) — alternatif Photoshop
- **Pexels / Unsplash** — banque d'images stock pour les fonds

### Outils freelances
- **Fiverr / Malt** — UGC créateurs FR à 50-150 € la vidéo
- **TikTok Creative Center** — banque de pubs gagnantes pour s'inspirer (gratuit)
- **Foreplay.co** — espionner les pubs des concurrents (29 $/mois)

### Brief type pour un freelance UGC

```
Brief — Vidéo UGC Casablanca Officiel
Format : 9:16, durée 15-30s
Style : authentique, peu produit, voix-off naturelle
Lieu : intérieur lumineux, café ou appartement parisien
Tenue : porter la chemise crème (envoyée en prêt)

Pitch : "J'ai commandé hier soir, j'ai reçu ce matin. Casablanca Paris,
le vrai. Voilà ce que ça donne."

Plans à inclure (obligatoire) :
- Ouverture du colis (2-3s)
- Détail hangtag/étiquette (1-2s)
- Plan miroir avec la chemise (3-5s)
- Plan caméra direct, message simple (5-10s)
- Plan final mains jointes / CTA "à vous d'essayer" (3-5s)

Livrables : 3 versions différentes (3 hooks, 3 voix-off)
Tarif cible : 100-150 €
```

---

## 6. Calendrier de lancement créa

| Semaine | Action |
|---|---|
| **S1** | Briefer 2 créateurs UGC sur Fiverr/Malt — 4 vidéos commandées |
| **S2** | Recevoir UGC + monter 5 visuels Canva (carrousels, statics) |
| **S3** | Lancer Meta TOFU avec les 9 créas TOFU (5 statics + 4 UGC) |
| **S4** | Activer Catalogue MOFU + retargeting BOFU |
| **S5** | Lancer Google Search Marque + Performance Max |
| **S6** | Pause des sets Meta < 1 % CTR, double sur les gagnants |
| **S7-8** | Lookalike 1% Acheteurs + nouvelles créas (rotation chaque semaine) |
| **M3** | Activer TikTok Ads + Pinterest test |

---

## 7. Suivi des créas (template Notion)

| Créa | Plateforme | Format | Date launch | CTR | CPM | CPA | ROAS | Status |
|---|---|---|---|---|---|---|---|---|
| Unboxing v1 | Meta | Vidéo 15s | S3 | 1.8% | 18 € | 24 € | 3.2× | ✅ Scale |
| 5 Looks Carrousel | Meta | Carrousel | S3 | 1.2% | 15 € | 32 € | 2.4× | 🟡 Iterate |
| GRWM TikTok | Meta | Vidéo 9s | S4 | 0.8% | 22 € | 65 € | 1.1× | ❌ Kill |

**Règles de décision rapides**
- **CTR < 0,8 %** : créa fatiguée, remplacer
- **CPA > 35 % du panier moyen** : pause set
- **ROAS > 3** : doubler le budget
- **Fréquence > 4** : nouvelle créa nécessaire

---

## 8. Calendrier publicitaire saisonnier

| Période | Angle | Créa à pousser |
|---|---|---|
| **Avril-mai** | Drop Printemps · "Première chemise" | Unboxing + 5 looks |
| **Juin-juillet** | Beach Club · "Vacances en Casablanca" | Lookbook plage + ensembles soie |
| **Août** | Solde / Mid-season | Best-sellers + code -15 % |
| **Septembre** | Rentrée tailoring | Pantalons + mailles |
| **Octobre-novembre** | Pré-Black Friday | UGC + retargeting agressif |
| **Black Friday (28/11)** | Promo unique -20 % | Statics urgence + countdown |
| **Décembre** | Cadeaux Noël · "Offrir Casablanca" | Carrousel "Pour lui" + carte cadeau |
| **Janvier** | Soldes officielles | Best-sellers solde |

---

Bon lancement.
