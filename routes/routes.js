module.exports = function(app, passport) {
    //Hompage
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    //local-login
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login',{
        successRedirect : './profile',
        failureRedirect : './login',
        failureFlash : true
    }));

    //local-signup
    app.get('/signup', function(req, res) {
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : './signup',
        failureFlash : true
    }));

    //profile
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user
        });
    });

    //logout
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
    //google authentication
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile' , 'email']}));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    //facebook authentication
    app.get('/auth/facebook', passport.authenticate('facebook' , { scope : 'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook',{
        successRedirect : '/profile',
        failureRedirect : '/'
    }));
    //twitter authentication
    app.get('/auth/twitter', passport.authenticate('twitter'));

    app.get('/auth/twitter/callback', passport.authenticate('twitter', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));


    //local authorization
    app.get('/connect/local', function(req, res) {
        res.render('connect-local.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect : '/profile',
        failureRedirect : '/connect/local',
        failureFlash : true
    }));


    //google authorization
    app.get('/connect/google', passport.authorize('google', { scope : ['profile', 'email'] }));

    app.get('/connect/google/callback', passport.authorize('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    //facebook authorization
    app.get('/connect/facebook', passport.authorize('facebook', { scope : 'email' }));

    app.get('/connect/facebook/callback', passport.authorize('facebook', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    // twitter authorization
    app.get('/connect/twitter', passport.authorize('twitter', { scope : 'email' }));

    app.get('/connect/twitter/callback', passport.authorize('twitter', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

    // unlink local
    app.get('/unlink/local', function(req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // unlink google
    app.get('/unlink/google', function(req, res) {
        var user = req.user;
        user.google.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // unlink facebook
    app.get('/unlink/facebook', function(req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });

    // unlink twitter
    app.get('/unlink/twitter', function(req, res) {
        var user = req.user;
        user.twitter.token = undefined;
        user.save(function(err) {
            res.redirect('/profile');
        });
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/');
}