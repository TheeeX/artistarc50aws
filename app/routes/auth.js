//var User = require('./models/user');

module.exports = function(router, passport){
	
	//localhost:3000/auth/
	router.get('/', function(req, res){
		res.render('index.ejs');
	});

	router.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash: true
	}));

	router.get('/signup', function(req, res){
		res.render('signup.ejs', { message: req.flash('signupMessage') });
	});


	router.post('/signup', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	}));

	//localhost:3000/auth/facebook
	router.get('/facebook',
               passport.authenticate('facebook', {scope: ['email']}));

	router.get('/facebook/callback', 
               passport.authenticate('facebook', { successRedirect: '/',
	                                      failureRedirect: '/login' }));

	router.get('/google'  , 
               passport.authenticate('google', {scope: ['profile', 'email']}));

	router.get('/google/callback', 
               passport.authenticate('google', { successRedirect: '/',
	                                      failureRedirect: '/login' }));

	router.get('/connect/facebook', 
               passport.authorize('facebook', { scope: 'email' }));
	
	router.get('/connect/google', 
               passport.authorize('google', { scope: ['profile', 'email'] }));

	router.get('/connect/local', function(req, res){
		res.render('connect-local.ejs', { message: req.flash('signupMessage')});
	});

	router.post('/connect/local', passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/connect/local',
		failureFlash: true
	}));





	router.get('/unlink/facebook', function(req, res){
		var user = req.user;

		user.facebook.token = null;

		user.save(function(err){
			if(err)
				throw err;
			res.redirect('/profile');
		})
	});

	router.get('/unlink/local', function(req, res){
		var user = req.user;

		user.local.username = null;
		user.local.password = null;

		user.save(function(err){
			if(err)
				throw err;
			res.redirect('/profile');
		});

	});

	router.get('/unlink/google', function(req, res){
		var user = req.user;
		user.google.token = null;

		user.save(function(err){
			if(err)
				throw err;
			res.redirect('/profile');
		});
	});





	

	router.get('/logout', function(req, res){
		req.logout();
		res.redirect('/');
	})
};