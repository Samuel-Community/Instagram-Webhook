# Instagram-Webhook

Send a notification when you post a new instragram on discord

## Installation

Clone the **Project** or download it.

Then open a terminal in the project folder.

Do an **npm install** to install the dependencies.

Change the name of the file **example_config.js** to **config.js**

And complete the following information. Put the information in the **' '**

    webhook: 'Link webkoook',
    sessionID: 'Session cookie',
    user: 'Instagram account username'

How to get the sessionID go to instagram.com , and login.

Press **CTRL + SHIFT + I**.

Go to the tab **Application** / **Storage** the name may change depending on your browser.

Search for **sessionid** next to the one with the **value**, copy it, and paste it into the sessionID.

![sessionID](https://sharemedia.tutorapide.xyz/c7nifVrx.png)

Once all this is done. Make node **index.js** a request will be made every 20 seconds.

To keep the program running in the background on your server you can use **pm2** if you have it. **pm2 start index.js --name "Webhook-Intagram "**.
You can choose any name you want.

##### Contact

Discord: *𝓢amuel#7455*

![Discord Banner 2](https://discordapp.com/api/guilds/753294055554809956/widget.png?style=banner2)

Made with 💖 by [TutoRapide](https://discord.gg/YM9XTZP)