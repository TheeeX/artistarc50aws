module.exports = function(router, passport){

	router.use(function(req, res, next){
		if(req.isAuthenticated()){
			return next();
		}
		res.redirect('/auth');
	});

	router.get('/', function(req, res){
		res.render('home.ejs', { Tname: req.user.username });
	});


    router.get('/test', function(req, res){
		res.render('test.ejs', { user: req.user });
	});
    
	router.get('/profile', function(req, res){
		res.render('profile.ejs', { user: req.user });
	});

	
	//localhost:3000/home
	router.get('/home', function(req, res){
		res.render('home.ejs', { Tname: req.user.username });
	});
    //localhost:3000/Ahome
	router.get('/ahome', function(req, res){
		res.render('ahome.ejs', { Tname: req.user.username });
	});

	router.get('/projects', function(req, res){
		res.render('project.ejs');
	});

	router.get('/troupes', function(req, res){
		res.render('troupe.ejs');
	});


	/*
	router.get('/*', function(req, res){
		res.redirect('/profile');
	})
	*/


}