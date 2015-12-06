var Troupe = require('../models/troupe');
var Project = require('../models/project');
var Posts = require('../models/posts');
var User = require('../models/user');
var Notfstore = require('../models/notfstore');
var Notify = require('../models/notify');
var Addrsbook = require('../models/addrsbook');

module.exports = function(router){
    
    /*------------------------------------------------------
    ------------------------ TROUPE ------------------------
    ------------------------------------------------------*/
    router.post('/troupe', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Troupe();
        troupe.name = req.body.troupename;
        troupe.username = req.body.username;
        troupe.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        troupe.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/troupe', function(req, res){
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data)         {
            res.json(data);
        });
    });
    
    router.delete('/troupe', function(req, res){
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/troupe/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/troupe/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/troupe/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            troupe.name = req.body.troupename;
            troupe.username = req.body.username;
            troupe.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------ PROJECTS ----------------------
    ------------------------------------------------------*/
    router.post('/project', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var project = new Project();
        project.name = req.body.projectname;
        project.username = req.body.username;
        project.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        project.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/project', function(req, res){
        Project.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/project', function(req, res){
        Project.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/project/:id', function(req, res){
        Project.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/project/:id', function(req, res){
        Project.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/project/:id', function(req, res){
        Project.findOne({_id: req.params.id}, function(err, data){
            var project = data;
            project.name = req.body.projectname;
            project.username = req.body.username;
            project.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            project.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- POSTS ------------------------
    ------------------------------------------------------*/
    router.post('/posts', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var posts = new Posts();
        posts.body = req.body.postBody;
        posts.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        posts.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/posts', function(req, res){
        Posts.find({}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/posts', function(req, res){
        Posts.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/posts/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        })
    })
    
    router.delete('/posts/:id', function(req, res){
        Posts.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/posts/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            var posts = data;
            posts.body = req.body.postBody;
            posts.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            posts.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------- USER TROUPE Var --------------------
    ------------------------------------------------------*/
    router.post('/user/troupe', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Troupe();
        troupe.name = req.body.troupename;
        troupe.username = req.body.username;
        troupe.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        troupe.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/user/troupe', function(req, res){
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/user/troupe', function(req, res){
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/troupe/:id', function(req, res){
        console.log('data from server! - req.params.id');
            console.log(req.params.id);
        Troupe.findOne({'username': req.params.id}, function(err, data){
            res.json(data);
            
            if(isAdmin(req.user.local.username,data)){
                console.log('Admin!');
            }else
                console.log('Not Admin!');
        })
    })
    
    router.delete('/user/troupe/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/user/troupe/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            troupe.name = req.body.troupename;
            troupe.username = req.body.username;
            troupe.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- USER -------------------------
    -------------------------------------------------------*/
    router.get('/user', function(req, res){
        User.findOne({'local.username': req.user.local.username}, function(err, data){
            res.json(data);
        });
    });
    
    router.delete('/user', function(req, res){
        User.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/:id', function(req, res){
        User.findOne({'local.username': req.params.id}, function(err, data){
            res.json(data);
            
            if(isAdmin(req.user.local.username,data)){
                console.log('Admin!');
            }else
                console.log('Not Admin!');
        })
    })
    
    router.delete('/user/:id', function(req, res){
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/user/:id', function(req, res){
        console.log('yo ba');
        User.findOne({'local.username': req.params.id}, function(err, data){
            
            var user = data;
            if(req.body.fname){
                user.fname = req.body.fname;
            }
            if(req.body.username){
                user.local.username = req.body.username;
            }
            if(req.body.email){
                user.email = req.body.email;
            }
            if(req.body.password){
                user.local.password = user.generateHash(req.body.password);
            }
            if(req.body.dob){
                user.meta.dob = req.body.dob;
            }
            if(req.body.about){
                user.about = req.body.about;
            }
            if(req.body.website){
                user.meta.website = req.body.website;
            }
            if(req.body.mobile){
                user.mobile = req.body.mobile;
            }
            if(req.body.gender){
                user.gender = req.body.gender;
            }
            if(req.body.location){
                user.location = req.body.location;
            }
            if(req.body.tags){
                user.tags.push((req.body.tags).split(";"));
            }
            
            user.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------- USER ADDBOOK Var ----------addbook---------
    ------------------------------------------------------*/
    router.post('/user/addbook', function(req, res){
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Addrsbook();
        addrsbook.name = req.body.troupename;
        addrsbook.username = req.body.username;
        addrsbook.local.author_username = req.user.local.username;
        /*if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }*/
        
        addrsbook.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    router.get('/user/addbook', function(req, res){
        Addrsbook.findOne({'local.author_username': req.user.local.username}, function(err, data){/*
            var addrsbook = new Addrsbook();
            addrsbook.local.author_username = req.user.local.username;
            addrsbook.save(function(err){
                if(err)
                    throw err;
            });*/
            res.json(data);
        });
    });
    
    router.delete('/user/addbook', function(req, res){
        Addrsbook.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });
    });
    
    router.get('/user/addbook/:id', function(req, res){
        //console.log('data from server! - req.params.id');
        //    console.log(req.params.id);
        Addrsbook.findOne({'local.author_username': req.params.id}, function(err, data){
            res.json(data);
            console.log('data from server!');
            console.log(data);
        });
    });
    
    router.delete('/user/addbook/:id', function(req, res){
        Addrsbook.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        })
    })
    
    router.post('/user/addbook/:id', function(req, res){
        Addrsbook.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            addrsbook.name = req.body.troupename;
            addrsbook.username = req.body.username;
            addrsbook.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            addrsbook.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- LIKES ------------------------
    ------------------------------------------------------*/
     router.post('/likes/:id', function(req, res){
        Posts.findOne({_id: req.params.id}, function(err, data){
            var posts = data;
            posts.meta.likes.push(req.user.local.username);
            //posts.local.author_username = req.user.local.username;
            /*if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }*/
            
            posts.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    });
    
    /*------------------------------------------------------
    ------------------------- SEACRH ------------------------
    ------------------------------------------------------*/
    
     router.post('/search/:target/:id', function(req, res){
        console.log('#server.js -- Searching( ' + req.params.id + ' )' );
         var chow = req.params.target.toString().trim();
         console.log(chow);
        if(chow === 'troupe'){
            console.log('yes');
            Troupe.find({'username': new RegExp(req.params.id)}, function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        }
        if(chow === 'user'){
            console.log('yes');
            User.find({'local.username': new RegExp(req.params.id)}, function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        }
    });
    router.post('/search/', function(req, res){
        var data = {"result": "typing..." };
            res.json(JSON.stringify(data));
    });
    
    /*------------------------------------------------------
    ------------------------- USER ------------------------
    ------------------------------------------------------*/
     router.post('/artist/', function(req, res){
        User.findOne({_id: req.user.id}, function(err, data){
            if(err)
                throw err;
            res.json(data);
        });
    });
    
    /*------------------------------------------------------
    --------------------- NOTIFICATIONS --------------------
    ------------------------------------------------------*/
     router.post('/notify/:type/:sid/:tid/:notf', function(req, res){
         
        console.log('api called!');
         
        Notfstore.findOne({'local.author_username': req.user.local.username}, function(err, data){
            
            var notfstore = data;
            var notfbody = '';
            
            if(!data){
                console.log('new user notf!');
                notfstore = new Notfstore();
                notfstore.local.author_username = req.user.local.username;
            }
            
            if(req.params.type=='posted'){
                notfbody = ' added a new post'; 
            } 
            if(req.params.type=='tagpost'){
                notfbody = ' tagged you in a post'; 
            }
            if(req.params.type=='likes'){
                notfbody = ' your post'; 
            }
            if(req.params.type=='commented'){
                notfbody = ' commented on the post'; 
            }
            if(req.params.type=='following'){
                notfbody = ' started following you'; 
            }
            if(req.params.type=='artrep'){
                notfbody = ' added you a reputation'; 
            }
            if(req.params.type=='other'){
                notfbody = req.params.notf; 
            }
            /*
            notfstore.notifications = [ req.params.sid, notfbody,' ', ' ', Date.now ];
            */
            notfstore.notifications.push({'subject': req.params.sid,body: notfbody});
            notfstore.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
        });
    });
};

function isAdmin(username, Object) {
	if(Object.local.author_username==username){
		return true;
	}if(Object.local.username==username){
		return true;
	}
    else
        return false;
}