# API — Express.js

## Structure

```
api/
├── index.js        # Point d'entrée : configure et démarre le serveur Express
├── api.js          # Routeur principal, monte les sous-routes sous /api
├── routes/         # Couche HTTP — reçoit les requêtes, appelle les services
│   └── article.js
└── services/       # Logique métier — traitement des données
    └── article.js
```

## Architecture

```
Requête HTTP
    │
    ▼
index.js  (Express, CORS, JSON parsing)
    │
    ▼
api.js  (/api)
    │
    ▼
routes/*.js  (GET /api/articles, POST /api/articles, ...)
    │
    ▼
services/*.js  (logique métier, accès aux données)
```

## Routes disponibles

| Méthode | Route           | Description              |
|---------|-----------------|--------------------------|
| GET     | /               | Health check             |
| GET     | /api            | Info API                 |
| GET     | /api/articles   | Liste tous les articles  |
| POST    | /api/articles   | Crée un nouvel article   |

## Lancer l'API

```bash
yarn start   # Node avec --watch (redémarre automatiquement)
```

## Ajouter une ressource

1. Créer `services/maRessource.js` avec la logique métier
2. Créer `routes/maRessource.js` avec les routes HTTP
3. Monter la route dans `api.js`
