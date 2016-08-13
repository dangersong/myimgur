# MyImgur

Having fun with the Imgur API.

## Tech

* [AngularJS] - HTML enhanced sweetness for web apps!
* [Angular Material] - super cool UI framework for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework
* [jQuery] - included for lazy loading
* [nodemon] - automagic server restarts on change


## Installation

Register with Imgur for a client identifier here, [Imgur registration].

Set environment variable with an environment variable.

Open your terminal of choice and run these commands.

Within config/
```sh
$ touch env.js 
```

Within env.js
```sh
process.env['myImgur_clientId'] = 'Your Imgur clientID';
```

Within /
```sh
$ npm install
$ npm start
```

Point your browser to http://127.0.0.1:3000/

### Todos

 -  Revise search filter
 -  Add new feeds
 

License
----

MIT


   [git-repo-url]: <https://github.com/dangersong/myImgur.git> 
   [node.js]: <http://nodejs.org>
   [nodemon]: <http://nodemon.io/>
   [Angular Material]: <https://material.angularjs.org>
   [jQuery]: <http://jquery.com>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Imgur registration]: <https://api.imgur.com/oauth2/addclient>
  