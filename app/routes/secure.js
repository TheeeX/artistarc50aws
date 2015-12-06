module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});

    router.get('/', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/edit', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/user/:userName', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/troupe', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/project', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/troupe/:userName', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/project/:userName', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/gallery', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/analytics', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/edit', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    router.get('/profile', function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	/*
	router.get('/*', function(req, res){
		res.redirect('/');
	})
	*/


}