var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var AWS = require('aws-sdk');
    AWS.config.loadFromPath('./config/aws.json');

var Troupe = require('../models/troupe');

module.exports = function(router){
    
    router.post('/aws/creds', function(req, res){    
        var Aws = require('../../config/aws.js');
        console.log(Aws);
        res.json(Aws);
    });
    
    /*------------------------------------------------------
    --------------------- media UPLOAD ---------------------
    ------------------------------------------------------*/
    router.post('/user/upload', multipartMiddleware, function(req, res){
        console.log('req recieved upload');
        var file = req.files.file;
        console.log(file.path);
        var body = fs.createReadStream(file.path);
        var filename =  'post7/media33.jpg';
        
        var s3bucket3 = new AWS.S3();
        s3bucket3.createBucket({Bucket: 'artistarc-user-post-media'}, function() {
          var data = {Bucket: 'artistarc-user-post-media', Key: filename, Body: body};
          s3bucket3.putObject(data, function(err, data) {
            if (err) {
              console.log("Error uploading data: ", err);
            } else {
              console.log("Successfully uploaded data to Bucket");
            }
          });
        });
        res.end('Uploaded');
    });
    
    router.post('/user/upload/obj', function(req, res){
       
    });
    
    router.get('/troupe', function(req, res){/*
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data)         {
            res.json(data);
        });*/
        res.end('hihihi');
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