# flexplayer

[![Open in Visual Studio Code](https://open.vscode.dev/badges/open-in-vscode.svg)](https://open.vscode.dev/koneko/flexplayer)
flexplayer is an app that you can use to watch .mp4 videos (only tested on that) and scroll through your file system

## setup

## to setup the player you have to change some values and install dependencies

```s
npm i
```

after installing dependencies you have to go into `script.js` and into `.env` and change values \\
**.env**

```
PORT=(YOUR-PORT)
```

**script.js**

```js
var hardPath = "C:/PATH/TO/YOUR/FOLDER/WITH/MP4S";
var port = "set this to be the same port as the one you did for .env";
```

---

after doing all of that type `npm start` into the command line and navigate to your port of choice on your server to see the gui
