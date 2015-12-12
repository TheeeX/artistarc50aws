var Troupe = require('../models/troupe');

module.exports = function(router){
    
    
    /*------------------------------------------------------
    ------------------------ TROUPE ------------------------
    ------------------------------------------------------*/
    router.post('/user/upload', function(req, res){
        
        
        /*
        console.log(req.body);
        console.log(req.user.local.username);
        var troupe = new Troupe();
        troupe.name = req.body.troupename;
        troupe.username = req.body.username;
        troupe.local.author_username = req.user.local.username;
        if(req.body.address) {
            troupe.address.street = req.body.address.street;
            troupe.address.city = req.body.address.city;
            troupe.address.state = req.body.address.state;
            troupe.address.zip = req.body.address.zip;
        }
        
        troupe.save(function(err, data){
            if(err)
                throw err;
            res.json(data);
        });*/
    });
    
    router.get('/troupe', function(req, res){/*
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data)         {
            res.json(data);
        });*/
    });
    
    router.delete('/troupe', function(req, res){/*
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });*/
    });
    
    router.get('/troupe/:id', function(req, res){/*
        Troupe.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        });*/
    });
    
    router.delete('/troupe/:id', function(req, res){/*
        Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });*/
    });
    
    router.post('/troupe/:id', function(req, res){
        /*
        Troupe.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            troupe.name = req.body.troupename;
            troupe.username = req.body.username;
            troupe.local.author_username = req.user.local.username;
            if(req.body.address) {
                troupe.address.street = req.body.address.street;
                troupe.address.city = req.body.address.city;
                troupe.address.state = req.body.address.state;
                troupe.address.zip = req.body.address.zip;
            }
            
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    */
    });
    
    
}