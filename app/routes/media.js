var fs = require('fs');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var AWS = require('aws-sdk');
    AWS.config.loadFromPath('./config/aws.json');

var Troupe = require('../models/troupe');
var Gallery = require('../models/gallery');

module.exports = function(router){
    
    router.post('/aws/creds', function(req, res){    
        var Aws = require('../../config/aws.js');
        //console.log(Aws);
        res.json(Aws);
    });
    
    /*------------------------------------------------------
    --------------------- media UPLOAD ---------------------
    ------------------------------------------------------*/
    router.post('/user/uploadfile', multipartMiddleware, function(req, res){
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
    
    router.get('/user/gallery', function(req, res){
        
    });
    router.post('/user/gallery', function(req, res){
        
        /*Gallery.findOne({local.author_username: req.user.local.username}, function(err, data){
            var gallery = data;
            gallery.directory.push({'name': req.body.name, 'cname': req.body.cname});
            gallery.save(function(err, data){
                    if(err)
                        throw err;
                    res.json(data);
                });
          });
    });
    
    router.get('/user/gallery/:id', function(req, res){
        Troupe.findOne({_id: req.params.id}, function(err, data){
            res.json(data);
        });*/
    });
    router.post('/user/gallery/:id', function(req, res){
        
        //Gallery.findOne({local.author_username: req.user.local.username}, function(err, data){
            
        //});
    });
    
    /**************************************************************************************
                                NOT CONFIGURED
    */
    router.put('/user/gallery/:id', function(req, res){/*
        Troupe.find({'local.author_username': req.user.local.username}, function(err, data){
            res.json(data);
        });
        Troupe.findOne({_id: req.params.id}, function(err, data){
            var troupe = data;
            troupe.name = req.body.troupename;
        res.end('hihihi');
        
        
            troupe.save(function(err, data){
                if(err)
                    throw err;
                res.json(data);
            });
            
        });
    */
    });
    router.delete('/user/gallery', function(req, res){/*
    Troupe.remove({_id: req.params.id}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });*/
    });
    router.delete('/user/gallery/:id', function(req, res){/*
        Troupe.remove({}, function(err){
            res.json({result: err ? 'error' : 'ok'});
        });*/
    });
    
    
}