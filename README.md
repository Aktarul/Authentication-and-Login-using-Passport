# Authentication and Logins #

#### This project contains login and registration of the following accounts ###
* Local account 
* Twitter 
* Google+ 
* Facebook

### Quick start
  1. Clone this repositry : `git clone https://github.com/Aktarul/Authentication-and-Login-using-Passport.git`
  2. Install dependencies : `npm install --save`
  3. go to file _config/database/index.js_ and put your **database url**
  4. put **clientID** and **clientSecret** in _config/auth/index.js_ 
  5. Run server : `node server.js`
  
### Project's top-level directory layout

    .
    ├── config                   # Configuration Files
    ├── models                   # Defined Models
    ├── routes                   # Every Routes
    ├── views                    # Client Side views
    ├── README.md
    ├── package.json             # Defined Dependencies
    └── server.js                # Server Starting File

### :point_right: Configuration Files
:label:**_../config/auth/index.js_** contains facebook, twitter and google apps informations. To provide the informations, at first you need to create apps in the following links. Within the apps you'll get `clientID` and `clientSecret`, put them in _../config/auth/index.js_ file.
 > To Create Facebook app : [Facebook for Developers](https://developers.facebook.com)
 >
 > To Create Google app : [Google for Developers](https://console.developers.google.com)
 >
 > To Create Twitter app : [Twitter Application Management](https://apps.twitter.com)

    .          //configuration structure
    ├── ...
    ├── config
    │   ├── auth
    │   │   └── index.js
    │   ├── database
    │   │   └── index.js
    │   └── passport
    │       └── index.js
    └── ...
:label:**_../config/database/index.js_** have the database URL. Just create the database and assign the URL. You can use different database services, such as mongodb cloud database service or local database service etc.

:label:**_../config/passport/index.js_** implements user `serialize`, `deserialize`; local `sign-in`, `sign-up`; `google`, `facebook`, `twitter` strategy.


### :point_right: Models
    .          //models structure
    ├── ...
    ├── models
    │   └── user
    │       └── index.js
    └── ...
.....
### :point_right: Routes
    .          //routes structure
    ├── ...
    ├── routes
    │   └── routes.js
    └── ...
.....
### :point_right: Views files
    .          //views structure
    ├── ...
    ├── views
    │   ├── connect-local.ejs
    │   ├── index.ejs
    │   ├── login.ejs
    │   ├── profile.ejs
    │   └── signup.ejs
    └── ...
.....
### :point_right: package.json
.....
### :point_right: server.js
.....

    
_This project has been created following [easy-node-authentication](https://scotch.io/tutorials/easy-node-authentication-setup-and-local) article._
