# Casablanca Store — Flows Klaviyo prêts à mettre en place

5 flows e-mail essentiels pour récupérer les paniers abandonnés, fidéliser les acheteurs et réactiver les inactifs. **ROI moyen attendu : 25-35 % du chiffre d'affaires e-commerce** vient de l'e-mail.

Tous les e-mails sont rédigés en français, avec sujets, prévisualisations, corps, CTA. Copier-coller dans Klaviyo (Flows → Build your own flow → e-mail → mode HTML ou Drag-and-drop).

---

## Configuration générale

### Identité d'expéditeur
- **Nom** : `Casablanca Store`
- **E-mail** : `hello@casablancastore.fr` (ou `bonjour@`)
- **Adresse postale** (mention légale obligatoire) : `Casablanca Store SAS — 14 rue de la Paix, 75002 Paris`
- **Ton de voix** : éditorial, élégant, direct. Tutoiement OU vouvoiement (à choisir, rester cohérent). Recommandation : **vouvoiement** pour un univers luxe.

### Design template
- Fond : crème `#f4ede3`
- Couleur texte : `#1f1b16`
- Accent / liens : `#c26849` (terracotta)
- Police titres : Playfair Display (web-safe fallback : Georgia)
- Police corps : Inter (fallback : Helvetica, Arial)
- Logo : "Casablanca Store" en typo serif + sous-titre "Revendeur officiel"
- Tous les e-mails se terminent par : footer avec lien désinscription, mention légale, liens sociaux

---

## Flow #1 — Welcome Series (3 e-mails sur 7 jours)

**Trigger** : Inscription newsletter ou création de compte (sans achat)
**Objectif** : Convertir l'inscrit en premier acheteur · ROI ciblé : 15-25 € par contact

---

### E-mail 1/3 — Immédiat (T+0h)

**Sujet** : `Bienvenue chez nous · -10 % à l'intérieur 🌴`
**Preview** : `Votre code et un mot pour commencer.`

**Corps**
```
Bonjour {{ first_name|default:"" }},

Bienvenue chez Casablanca Store.

Vous venez de rejoindre une liste très privée — celle de nos clients
qui reçoivent les drops avant tout le monde et profitent d'attentions
qu'on ne fait pas ailleurs.

Pour démarrer, nous vous offrons -10 % sur votre première commande.

[ MERCI10 ]
Code valable 14 jours, à utiliser au panier sur tout le site.

→ Découvrir la collection homme

Quelques mots sur nous, en deux phrases.
Casablanca Store est le revendeur officiel français de la maison
Casablanca Paris pour Homme. Nos pièces partent de France en 24h,
dans leur boîte d'origine, avec hangtag et certificat d'authenticité.

À très vite,
L'équipe Casablanca Store

PS — Notre service client répond en moins de 4h.
Une question, un conseil de taille ? Écrivez-nous, on adore.
```

**CTA principal** : `Découvrir la collection`
**Lien** : `https://casablancastore.fr/collections/homme.html`

---

### E-mail 2/3 — J+2

**Sujet** : `5 façons de porter LA chemise Casablanca`
**Preview** : `Du brunch au mariage, on a fait le test.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

La chemise en soie monogramme, c'est LA pièce signature
Casablanca Paris. Encore faut-il savoir la marier.

On a passé un week-end à tester 5 looks différents — du brunch
dominical au mariage en bord de mer. Voici nos préférés :

1. Le brunch — chemise crème + pantalon plissé
2. Le tennis-club — chemise + short blanc + sneakers
3. La soirée — chemise + pantalon noir + loafers
4. La plage — chemise ouverte + maillot soie
5. Le mariage — chemise crème + costume lin

→ Lire l'article complet (avec photos)

Vous hésitez sur la couleur ?
Crème pour la polyvalence, sauge pour l'originalité, terracotta
pour les amateurs des codes Casa.

→ Voir les 4 coloris disponibles

À demain,
Casablanca Store
```

**CTA principal** : `Lire l'article complet`
**Lien** : `https://casablancastore.fr/blog/comment-porter-chemise-casablanca.html`

---

### E-mail 3/3 — J+7

**Sujet** : `Dernier jour pour profiter du -10 %`
**Preview** : `Votre code MERCI10 expire ce soir à minuit.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

Petite alerte avant disparition.

Votre code -10 % de bienvenue (MERCI10) expire ce soir à minuit.
C'est notre dernière relance, promis.

Quelques pièces à voir avant que ça parte :

• Chemise en soie monogramme — Crème · 650 € (–10 % = 585 €)
• Polo Tennis Club — Marine · 320 € (–10 % = 288 €)
• Polo maille Vague — Sauge · 495 € (édition limitée, stock < 5)

→ Profiter du code

Si vous n'achetez pas aujourd'hui, ce n'est pas grave : on continuera
à vous envoyer nos articles et nos drops. Mais ce serait dommage de
laisser passer 65 € sur une chemise iconique.

À ce soir ?
Casablanca Store

PS — Conseil de taille avant de commander ? On répond sous 4h.
```

**CTA principal** : `Utiliser MERCI10`
**Lien** : `https://casablancastore.fr/collections/homme.html`

---

## Flow #2 — Abandon panier (3 e-mails sur 3 jours)

**Trigger** : Started Checkout sans Placed Order
**Objectif** : Récupérer 30-40 % des paniers abandonnés · ROI le plus élevé de tous les flows

---

### E-mail 1/3 — H+1

**Sujet** : `Vous avez oublié quelque chose 👀`
**Preview** : `Votre {{ event.checkout.product_name }} vous attend.`

**Corps**
```
Bonjour {{ first_name|default:"" }},

Vous avez laissé une pièce dans votre panier il y a une heure.

[Image produit]
{{ product.title }}
{{ product.variant }}
{{ product.price }}

→ Reprendre où j'en étais

Pas de souci, votre panier est conservé. Si vous avez eu un doute
sur la taille ou la couleur, on est là pour vous conseiller.
Répondez simplement à cet e-mail, on vous répond sous 4h.

L'équipe Casablanca Store
```

**CTA principal** : `Reprendre mon panier`
**Lien** : `{{ event.checkout.url }}` (lien dynamique Klaviyo)

---

### E-mail 2/3 — J+1

**Sujet** : `Votre {{ event.checkout.product_name }} est encore là`
**Preview** : `Stock limité — il reste {{ event.product.inventory }} en stock.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

Petite mise à jour sur votre panier.

[Image produit + miniature variantes]
{{ product.title }} — {{ product.color }}
{{ product.price }}

Quelques infos pour vous décider :

✓ Authenticité 100 % garantie · revendeur officiel
✓ Livraison France offerte (sans minimum)
✓ Paiement sécurisé
✓ Retours 14 jours offerts

Si la taille ou la couleur ne vous convainc pas, on a peut-être
mieux. Cliquez et regardez ce qu'il reste.

→ Reprendre mon panier

Casablanca Store

PS — Avis clients sur cette pièce :
"Service ultra rapide, packaging soigné, qualité au rendez-vous." — Antoine M. ★★★★★
```

**CTA principal** : `Voir mon panier`

---

### E-mail 3/3 — J+3

**Sujet** : `-10 % pour vous décider · expire ce soir`
**Preview** : `Votre code privé : VENEZ10`

**Corps**
```
{{ first_name|default:"Bonjour" }},

Dernière offre, et on vous laisse tranquille.

Votre {{ product.title }} est toujours en stock, mais pas pour
longtemps. Pour vous aider à passer le pas, voici un code privé :

[ VENEZ10 ]
–10 % sur votre commande, valable 24h sur tout votre panier.

→ Finaliser ma commande

Si ce n'est pas le moment, pas de souci. On garde votre panier
encore 7 jours, et on continuera à vous envoyer nos drops.

Bonne soirée,
Casablanca Store

PS — Une question de dernière minute ?
Répondez ici, on est là.
```

**CTA principal** : `Finaliser avec VENEZ10`

---

## Flow #3 — Post-achat (4 e-mails sur 60 jours)

**Trigger** : Placed Order
**Objectif** : Fidéliser, obtenir avis, déclencher rachat · LTV +25 %

---

### E-mail 1/4 — H+2 (confirmation enrichie)

**Sujet** : `Merci, {{ first_name }} · votre commande #{{ order_number }} est confirmée`
**Preview** : `On prépare votre colis. Voici à quoi vous attendre.`

**Corps**
```
{{ first_name }},

Merci pour votre confiance. Votre commande #{{ order_number }}
est validée et entre en préparation immédiate.

Récapitulatif :
{% for item in order.items %}
• {{ item.title }} — {{ item.variant }} · {{ item.price }}
{% endfor %}

Total : {{ order.total }}
Livraison : {{ order.shipping }}

→ Voir ma commande

À quoi vous attendre :

DEMAIN — Préparation et expédition (vous recevrez un e-mail
avec votre numéro de suivi).

J+1 OU J+2 — Livraison à votre porte (Colissimo Suivi).

DANS LE COLIS — La pièce dans son emballage signature, le hangtag,
le sachet protecteur, le certificat d'authenticité Casablanca Paris.

Une question avant la réception ? Répondez à cet e-mail.

À très vite,
L'équipe Casablanca Store

PS — Retours 14 jours offerts si la taille ou la couleur ne convient pas.
On l'a déjà dit, mais on préfère le redire. Aucun stress.
```

---

### E-mail 2/4 — J+3 après livraison

**Sujet** : `Votre colis est arrivé · une dernière chose`
**Preview** : `Comment avez-vous trouvé votre Casablanca ?`

**Corps**
```
{{ first_name }},

Votre {{ first_product.title }} devrait être arrivé.
On espère que vous l'aimez autant que nous.

Une faveur : votre avis compte beaucoup pour nous, et pour
les futurs clients qui hésitent comme vous il y a 5 jours.

Auriez-vous 90 secondes pour partager votre expérience ?

→ Laisser un avis

En remerciement, on vous envoie un code -5 % sur votre prochaine
commande dès que l'avis est publié.

Si quelque chose ne va pas (taille, qualité, doute sur l'authenticité),
on règle ça en priorité — répondez à cet e-mail.

Merci d'être avec nous,
Casablanca Store
```

**CTA principal** : `Laisser un avis`
**Lien** : Lien Judge.me ou Loox (selon app installée)

---

### E-mail 3/4 — J+15

**Sujet** : `Comment porter votre {{ first_product.title }}`
**Preview** : `4 looks pour la faire vivre, signés Casablanca Store.`

**Corps**
```
{{ first_name }},

Quinze jours après la livraison de votre {{ first_product.title }},
voici comment on l'aurait portée à votre place.

[4 mini-looks en visuel, format carrousel ou grille]
1. Le brunch — avec un pantalon plissé crème
2. La soirée — avec un pantalon noir et des loafers
3. Le tennis-club — avec un short blanc et des sneakers
4. La plage — ouverte sur un maillot bleu Riviera

→ Voir le guide complet (avec produits associés)

Et si vous voulez compléter votre vestiaire, voici nos suggestions
pour aller avec votre {{ first_product.title }} :

[3 produits recommandés]
- Pantalon plissé crème · 540 €
- Sneakers Atlantis Court · 580 €
- Short en soie L'Arche · 390 €

À bientôt,
Casablanca Store
```

---

### E-mail 4/4 — J+45

**Sujet** : `On pense à vous · -15 % sur votre 2ème commande`
**Preview** : `Code privé valable 7 jours.`

**Corps**
```
{{ first_name }},

Cela fait 45 jours que vous avez reçu votre {{ first_product.title }}.
On espère qu'elle vous accompagne bien.

Petit cadeau pour la suite : -15 % sur votre prochaine commande,
quel que soit le panier.

[ FIDELE15 ]
Valable 7 jours, sur tout le site.

Quelques pièces sorties depuis votre dernier achat :
{% for item in new_arrivals %}
• {{ item.title }} · {{ item.price }}
{% endfor %}

→ Voir les nouveautés

Merci d'être avec nous,
Casablanca Store

PS — La saison Beach Club 2026 est sortie. À jeter un œil 🌊
```

---

## Flow #4 — Anniversaire (1 e-mail)

**Trigger** : Date d'anniversaire (champ `birthday` dans le profil)
**Objectif** : Fidélisation, attention personnelle

---

### E-mail unique — J de l'anniversaire (matin)

**Sujet** : `🌴 Joyeux anniversaire, {{ first_name }}`
**Preview** : `Votre code privé pour vous faire plaisir.`

**Corps**
```
{{ first_name }},

Joyeux anniversaire de la part de toute l'équipe Casablanca Store.

Pour fêter ça à notre manière, voici un code -15 % à utiliser
sur tout le site, valable 14 jours.

[ ANNIVCASA15 ]

→ Vous faire plaisir

Toute l'équipe vous souhaite une excellente journée,
Casablanca Store

PS — Quelques idées qui pourraient vous plaire :
- La chemise en soie monogramme · pièce signature
- Le polo Tennis Club · le best-seller
- L'ensemble pyjama soie · iconique
```

---

## Flow #5 — Réactivation (3 e-mails sur 30 jours)

**Trigger** : 90 jours sans achat ET 60 jours sans ouverture e-mail
**Objectif** : Récupérer les inactifs avant qu'ils se désinscrivent · 5-10 % conversion

---

### E-mail 1/3 — Soft

**Sujet** : `Cela fait longtemps · une nouvelle saison vient de sortir`
**Preview** : `Voici ce qui a changé depuis votre dernière visite.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

Cela fait quelques mois qu'on s'est pas vus.
Voici ce qui a changé chez Casablanca Store.

[3 nouveaux best-sellers visuels]

NOUVELLE COLLECTION
La saison SS26 vient de sortir : Beach Club, Tennis Club,
Tailoring. Les pièces qu'on attend depuis l'été dernier.

→ Voir les nouveautés

NOUVEAU SERVICE
Livraison express Paris intra-muros par coursier privé,
pour les commandes > 1 500 €. Sur demande.

NOUVEAU JOURNAL
Notre blog s'est étoffé : guides de style, savoir-faire,
histoire de la maison. À lire avec un café.

→ Lire le journal

Au plaisir de vous revoir,
Casablanca Store
```

---

### E-mail 2/3 — J+10

**Sujet** : `-20 % rien que pour vous (notre maximum)`
**Preview** : `Code valable 7 jours, sur tout le site.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

On ne fait pas ça souvent. Mais pour vous, on fait une exception.

[ REVENEZ20 ]
–20 % sur tout le site, valable 7 jours.

C'est notre meilleure offre de l'année hors Black Friday.
Si quelque chose vous tente, c'est le moment.

→ Voir la collection

Casablanca Store

PS — Si vous ne voulez plus recevoir nos e-mails, on comprend.
Cliquez ici pour vous désinscrire en un clic.
```

---

### E-mail 3/3 — J+30 (dernière chance)

**Sujet** : `On va arrêter de vous écrire`
**Preview** : `Mais avant, une dernière question.`

**Corps**
```
{{ first_name|default:"Bonjour" }},

Soyons honnêtes : si vous n'ouvrez plus nos e-mails et que rien
ne vous tente, on préfère arrêter de vous déranger.

Avant de vous retirer de notre liste, une dernière question :

[Questionnaire 1 question]
Pourquoi vous ne nous suivez plus ?
- Trop d'e-mails (on peut réduire la fréquence)
- Pas le bon style (Casablanca, c'est pas votre univers)
- Pas le budget actuellement (compris)
- Autre raison (dites-nous)

Si vous voulez rester, juste un clic suffit.

→ Je reste

Sinon, vous serez automatiquement retiré dans 7 jours.
Pas de rancune, et merci pour le temps passé.

L'équipe Casablanca Store
```

---

## Configuration technique Klaviyo

### Étapes

1. **Installer Klaviyo** sur Shopify (gratuit jusqu'à 250 contacts, ensuite ~30-100 €/mois)
2. **Connecter le compte Shopify** (synchro auto contacts + commandes)
3. **Créer une "Sender"** (e-mail expéditeur vérifié + adresse postale)
4. **Importer le template visuel** (Settings → Templates → Brand) :
   - Couleurs : `#f4ede3` background, `#1f1b16` texte, `#c26849` accent
   - Logo : "Casablanca Store" en SVG ou PNG haute déf
   - Footer : adresse postale + désinscription + sociaux
5. **Créer chaque flow** (Flows → Create Flow → Build your own) :
   - Welcome → trigger "Subscribed to List"
   - Abandon panier → trigger "Started Checkout"
   - Post-achat → trigger "Placed Order"
   - Anniversaire → trigger "Date Property" (champ `Birthday`)
   - Réactivation → trigger custom segment (90 jours sans purchase + 60 sans open)
6. **Tester chaque e-mail** avant activation (envoyez-vous le flow à votre propre e-mail)
7. **Activer en mode "Live"** une fois validé

### Segmentation à créer en parallèle

```
- VIP (Lifetime spend > 2 000 €)
- Engaged (open dans les 30 derniers jours)
- At Risk (90 jours sans purchase, 1 achat dans l'historique)
- Lost (180 jours sans purchase ni open)
- Newsletter only (jamais acheté)
- 1 achat (acheteur unique, à pousser vers 2ème achat)
- 2+ achats (fidèle, pousser vers cross-sell)
```

### KPIs Klaviyo à surveiller hebdo

| Flow | Open rate cible | Click rate cible | Conversion cible | Revenu/contact |
|---|---|---|---|---|
| Welcome | > 50 % | > 8 % | > 5 % | 15-25 € |
| Abandon panier | > 40 % | > 10 % | > 15 % | 60-100 € |
| Post-achat | > 45 % | > 6 % | > 8 % | 20-40 € |
| Anniversaire | > 35 % | > 5 % | > 4 % | 10-20 € |
| Réactivation | > 20 % | > 3 % | > 2 % | 5-15 € |

---

## Calendrier de campagnes manuelles (1-2 par semaine, en plus des flows)

| Mois | Type de campagne | Sujet d'exemple |
|---|---|---|
| **Avril** | Drop SS26 | "La nouvelle collection SS26 est en ligne" |
| **Mai** | Guide de style | "5 looks pour le printemps" |
| **Juin** | Pré-vacances | "Votre wardrobe pour la Côte d'Azur" |
| **Juillet** | Beach Club | "L'ensemble pyjama soie · maintenant" |
| **Août** | Mid-season sale | "-20 % sur 30 pièces sélectionnées" |
| **Sept** | Tailoring | "Le pantalon plissé qu'il vous faut" |
| **Oct-Nov** | Pré-Black Friday | "Liste d'envies · save the date" |
| **Black Friday** | Promo | "-30 % pendant 48h · Casablanca Store" |
| **Décembre** | Cadeaux | "Offrir Casablanca · 5 idées par budget" |
| **Janvier** | Soldes | "Soldes officielles -50 %" |

---

Bon lancement.
