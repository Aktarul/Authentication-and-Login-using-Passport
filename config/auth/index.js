module.exports = {

    'facebookAuth' : {
        'clientID'      : 'your-secret-clientID-here', //provide your app client-id
        'clientSecret'  : 'your-client-secret-here',  //provide your app client-secret
        'callbackURL'   : 'http://localhost:8000/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'       : 'your-consumer-key-here',   //provide your consumer-Key
        'consumerSecret'    : 'your-client-secret-here', //provide your consumer-Secret
        'callbackURL'       : 'http://localhost:8000/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'      : 'your-secret-clientID-here', //provide your app client-id
        'clientSecret'  : 'your-client-secret-here',  //provide your app client-secret
        'callbackURL'   : 'http://localhost:8000/auth/google/callback'
    }

};