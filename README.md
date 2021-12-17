# Frontend
> Application **frontend**, ci-dessous des informations sur la stack avec un lien vers des docs

- **[Angular](https://v12.angular.io/docs)** (12.x)
- **[Angular Material UI](https://v12.material.angular.io)** (12.x)

### Pré-requis
- Une version de **Node LTS** *(14 recommandé)*
- **Angular CLI** installé de manière globale : `npm install -g @angular/cli`

### Clonage du repository
- `git clone --single-branch --branch master https://github.com/AlfredNico/ingenosya-test-ANDRIANJATOVO-restaurant.git`


## Fonctionnalités

### Terminer
 - Ajouter et listes tous les stock disponible ou pas dans un resataurant selon so menu. L'utilisatuer peut filter aussi les stock disponibles ou non disponibles.
 - On peut ajouter le repas avec des éléments (ingrédients, emballage, couvert, serviette de table) selon le cahier de charge. L'utilisatuer peut valider le repa et passé en vante si les ingrédients sont tous complete.
 - Liste des vente pour que l'utilisateur pour 
 - Voire en détail la quantité d’éléments nécessaires pour fabriquer d'un repas, s'il y à un ingrédient pour ce repas.
 - Validation repas pour le mettre en que l'utilisatuer peut le commander. On peut aussi ajouter ou modifier le prix de ce repas selon le prix dans un resataurant.

### En cours
- liste des commande des client
- Benefice d'un restaurant

### Non terminer
- export PDF

# Backend 
### Prérequis
 * PHP v7.4.22
 * XAMPP ou WAMP serveur

***
### Démarrer un serveur de développement
```server:run
php -S localhost:8000 -t public
```

### liste commandes nécessaires pour la configuration base des données
```création base des données
bin/console d:d:c
```
### liste commandes nécessaires pour la configuration base des données
```création base des données
bin/console d:d:c
```
```Mettre à jour la base des données
bin/console d:s:u -f
```


