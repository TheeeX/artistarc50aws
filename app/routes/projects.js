//var User = require('./models/user');

module.exports = function(router, passport){
	
	//localhost:3000/auth/
	router.get('/', function(req, res){
		res.end('index.ejs');
	});
    
    router.post('/', function(req, res){
		req.end('hulala');
	});

	router.get('/login', function(req, res){
		res.render('login.ejs', { message: req.flash('loginMessage') });
	});

	router.post('/login', passport.authenticate('local-login', {
		successRedirect: '/home',
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

};