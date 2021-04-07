# Instagram-Webhook
Envois une notification lors d'une nouvelle publication instragram sur discord

## Installation

Clonez le **Projet** ou télécharger le.

Ouvrez ensuite un terminal dans le dossier du projet.

Faite un **npm install** pour installer les dépendances.

Changer le nom du fichier **exempleconfig.js** en **config.js**

Et compléter les informartions suivantes. Mettre les informations dans les **' '**

    webhook: 'Lien du webhook discord',
    sessionID: 'Cookie de la session',
    user: 'Pseudo du compte instagram'

Comment avoir le sessionID rendez-vous sur instagram.com , et connectez-vous.

Puis faite **CTRL + SHIFT + I**.

Rendez-vous dans l'onglet **Application** / **Stockage** le nom peut changer selons votre navigateur.

Chercher **sessionid** à coter de celui se trouve une **valeur**, copier celui-çi , et collez dans le sessionID.

![sessionID](https://sharemedia.tutorapide.xyz/c7nifVrx.png)

Une fois que tout ceçi est fait. Faite node **index.js** une requette serra faites toutes les 20 secondes.

Pour garder le programe lancer un arriere plan sur votre vous pouvez utiliser **pm2** si vous l'avez. **pm2 start index.js --name "Webhook-Intagram"**.
Vous pouvez choisir le nom que vous souhaitez.

##### Contact

Discord: *𝓢amuel#7455*

![Discord Banner 2](https://discordapp.com/api/guilds/753294055554809956/widget.png?style=banner2)

Fait avec 💖 par [TutoRapide](https://discord.gg/YM9XTZP)