# Intelligence Artificielle pour le Web

Ce projet est une application web qui utilise l'API OpenAI pour générer des horoscopes basés sur la date de naissance et un thème donné. L'application est construite avec Node.js et Express pour le backend, et utilise des technologies web standards pour le frontend.


## Démonstration
https://youtu.be/zDBcbEUF3CI

## Structure du Projet

- **api/** : Contient le serveur backend écrit en Node.js avec Express.
  - `server.mjs` : Fichier principal du serveur qui gère les requêtes API pour générer des horoscopes.
  
- **assets/images/** : Contient des images utilisées dans l'application, notamment des images des signes du zodiaque.

- **index.html** : Page principale de l'application web.

- **script.js** : Script JavaScript pour le frontend.

- **style.css** : Feuille de style pour le frontend.

- **package.json** : Fichier de configuration pour npm, listant les dépendances du projet.

## Prérequis

- Node.js 
- npm 

## Installation

1. Clonez le dépôt sur votre machine locale :

   ```bash
   git clone <URL_DU_DEPOT>
   ```

2. Accédez au répertoire du projet :

   ```bash
   cd m1-rattrapages-loti-didier/01-Intelligence-Artificielle-pour-le-web
   ```

3. Installez les dépendances :

   ```bash
   npm install
   ```

4. Créez un fichier `.env` à la racine du projet et ajoutez votre clé API OpenAI :

   ```
   OPENAI_API_KEY=ta_clé_api_ici
   ```

## Démarrage du Serveur

Pour démarrer le serveur, exécutez la commande suivante :

```bash
node api/server.mjs
```

Le serveur sera accessible à l'adresse `http://localhost:3000`.

## Utilisation

- Accédez à `index.html` via un navigateur pour interagir avec l'application.
- L'application envoie des requêtes à l'API OpenAI pour générer des horoscopes basés sur les entrées utilisateur.

## Dépendances

- **express** : Framework web pour Node.js.
- **dotenv** : Charge les variables d'environnement depuis un fichier `.env`.
- **cors** : Middleware pour activer CORS.
- **node-fetch** : Module pour effectuer des requêtes HTTP.
- **openai** : Client officiel pour l'API OpenAI.
- **path** : Module pour manipuler les chemins de fichiers et de répertoires.
- **url** : Module pour l'analyse et la manipulation des URL.


## Remarques

- Assurez-vous que votre clé API OpenAI est valide et active.
- Vérifiez que toutes les dépendances sont correctement installées.