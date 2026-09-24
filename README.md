# RAM

Calculateur de RAM simple et fonctionnel, développé avec Next.js.

## Présentation

Cette application permet de calculer le nombre de gigaoctets de RAM qu'un utilisateur peut obtenir en fonction d'un montant donné et d'un prix unitaire de la RAM.

Le calcul actuel est basé sur un prix fixe de 11,12 € par Go :

- montant saisi par l'utilisateur
- division par le prix de référence
- affichage du résultat en Go

## Fonctionnement

L'application contient une seule page principale dans [app/page.tsx](app/page.tsx) :

- un champ de saisie pour entrer un montant en euros
- un prix de référence affiché dans le code
- un calcul automatique du nombre de Go de RAM obtenus

Exemple :

- montant saisi : 50 €
- prix RAM : 11,12 € / Go
- résultat : environ 4,49 Go

## Stack technique

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS

## Prérequis

Avant de lancer le projet, assurez-vous d'avoir installé :

- Node.js 20+
- npm

## Installation

```bash
npm install
```

## Démarrage

```bash
npm run dev
```

Ensuite, ouvrez votre navigateur à l'adresse suivante :

http://localhost:3000

## Scripts disponibles

```bash
npm run dev     # démarre le serveur de développement
npm run build   # construit l'application pour la production
npm run start   # lance le projet compilé
npm run lint    # vérifie le code avec ESLint
```

## Structure du projet

```bash
.
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── README.md
├── next-env.d.ts
└── .gitignore
```

## Fichiers clés

- [app/page.tsx](app/page.tsx) : logique principale de l'application et calcul du prix
- [app/layout.tsx](app/layout.tsx) : mise en page racine et métadonnées du site
- [app/globals.css](app/globals.css) : styles globaux et thème

## Personnalisation

Pour modifier le prix de référence de la RAM, il faut ajuster la valeur dans [app/page.tsx](app/page.tsx) :

```ts
const [prixRAM, setPrixRAM] = useState<string>("11.12");
```

Vous pouvez aussi modifier le texte d'interface, les classes CSS, ou la mise en page selon les besoins du projet.

## Déploiement

Le projet peut être déployé facilement sur Vercel ou sur tout environnement compatible avec Node.js et Next.js.

## Licence

Aucune licence spécifique n'a été ajoutée pour le moment. Si vous souhaitez publier ce projet, il est recommandé d'ajouter une licence adaptée à votre usage.

## L'IA dans le Projet
L'IA m'a aidé à écrire uniquement ce README.md
