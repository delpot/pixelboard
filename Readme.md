# 2025 MBDS project PixelBoard

Skeleton monorepo pour le projet MBDS 2025. Il contient deux packages :

- `packages/client` — frontend React + Vite
- `packages/api` — backend Express.js

## Première configuration

Avant de commencer, éditez le fichier `package.json` à la racine :

- `name` : remplacez `xxxx` par les initiales des membres du groupe
- `repository` : renseignez l'URL de votre dépôt Git

## Installation

Dans le répertoire racine du projet :

```bash
yarn
```

## Lancer le projet

### Les deux en même temps (recommandé)

```bash
yarn start
```

### Séparément (dans deux terminaux distincts)

```bash
yarn start:client   # Lance le serveur de développement React (Vite)
yarn start:api      # Lance le serveur Express
```

| Service | URL par défaut       |
| ------- | --------------------- |
| Client  | http://localhost:5173 |
| API     | http://localhost:8000 |

## Structure du projet

```
packages/
├── client/    
│   └── src/
│       ├── main.jsx
│       └── App.jsx
└── api/           # Express 4
    ├── index.js       # Point d'entrée, configure le serveur
    ├── api.js         # Routeur principal (/api)
    ├── routes/        # Définition des routes HTTP
    └── services/      # Logique métier
```

## Ajouter une dépendance

```bash
# Dépendance de production dans le client
yarn workspace client add <package>

# Dépendance de production dans l'api
yarn workspace api add <package>

# Dépendance de développement
yarn workspace client add -D <package>
```

## Linter

```bash
yarn lint   # Vérifie client et api
```
