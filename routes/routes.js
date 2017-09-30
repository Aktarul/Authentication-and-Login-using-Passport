module.exports = function(app, passport) {
    //Hompage
    app.get('/', function(req, res) {
        res.render('index.ejs');
    });

    //login
    app.get('/login', function(req, res) {
        res.render('login.ejs', { message: req.flash('loginMessage') });
    });

    app.post('/login', passport.authenticate('local-login',{
        successRedirect : './profile',
        failureRedirect : './login',
        failureFlash : true
    }));

    //signup
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

    app.get('/auth/google', passport.authenticate('google', {scope : ['profile' , 'email']}));

    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));


    app.get('/auth/facebook', passport.authenticate('facebook' , { scope : 'email'}));

    app.get('/auth/facebook/callback', passport.authenticate('facebook',{
        successRedirect : '/profile',
        failureRedirect : '/'
    }));
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}