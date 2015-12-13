var http = require('http');

var express = require('express');
var app = express();
//var port = process.env.PORT || 8080;
app.set('port', process.env.PORT || 3000);

var path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/auth', express.static(path.join(__dirname, 'public')));
app.use('/user', express.static(path.join(__dirname, 'public')));
app.use('/troupe', express.static(path.join(__dirname, 'public')));
app.use('/project', express.static(path.join(__dirname, 'public')));
var multer = require('multer'); // v1.0.5
var upload = multer();                       // for parsing multipart/form-data
var fs = require('fs');

var AWS = require('aws-sdk');
AWS.config.loadFromPath('./config/aws.json');
//AWS.config.region = 'us-west-2';

var s3 = new AWS.S3();
s3.listBuckets(function(err, data) {
  if (err) { console.log("Error:", err); }
  else {
    for (var index in data.Buckets) {
      var bucket = data.Buckets[index];
      console.log("Bucket: ", bucket.Name, ' : ', bucket.CreationDate);
    }
  }
});
/*
var ec2 = new AWS.EC2({region: 'us-west-2'});
AWS.config.ec2 = { region: 'us-west-2' };
AWS.config.apiVersion = '2012-07-05';
var ec2 = new AWS.EC2({apiVersion: 'latest'});
*/
/*
var s3bucket1 = new AWS.S3({params: {Bucket: 'elasticbeanstalk-us-west-2-093236177960'}});
s3bucket1.createBucket(function() {
  var params = {Key: 'myKey', Body: 'Hello!'};
  s3bucket1.upload(params, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
*/
AWS.config.update({region: 'us-west-2'});
/*
var s3bucket2 = new AWS.S3();
s3bucket2.createBucket(function() {
    var params = {Bucket: 'artistarc-user-profile', Key: 'karan/file_name1', Body: 'Hello KJ!'};
    s3bucket2.putObject(params, function(err, data) {
        if (err) {
            console.log("Error uploading data: ", err);
        } else {
            console.log("Successfully uploaded data to bucket/sub-bucket/");
        }
    });
});
*//*
var s3bucket3 = new AWS.S3();
s3bucket3.createBucket({Bucket: 'artistarc-user-post-media'}, function() {
  var data = {Bucket: 'artistarc-user-post-media', Key: 'post1/post1media', Body: 'Hello!'};
  s3bucket3.putObject(data, function(err, data) {
    if (err) {
      console.log("Error uploading data: ", err);
    } else {
      console.log("Successfully uploaded data to myBucket/myKey");
    }
  });
});
*/
var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var MongoStore = require('connect-mongo')(session);


var configDB = require('./config/database.js');
mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true,
				 store: new MongoStore({ mongooseConnection: mongoose.connection,
				 							ttl: 2 * 24 * 60 * 60 })}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session




app.set('view engine', 'ejs');


// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// 	console.log('================');
// 	console.log(req.session);
// });

// http://... /auth/
var auth = express.Router();
require('./app/routes/auth.js')(auth, passport);
app.use('/auth', auth);

// http://... /
var secure = express.Router();
require('./app/routes/secure.js')(secure, passport);
app.use('/', secure);


// http://... /api/
var api = express.Router();
require('./app/routes/api.js')(api, passport);
app.use('/api', api);

// http://... /media/
var media = express.Router();
require('./app/routes/media.js')(media);
app.use('/media', media);

/*
// http://... /troupes/
var troupes = express.Router();
require('./app/routes/troupes.js')(troupes, passport);
app.use('/troupes', troupes);

// http://... /projects/
var projects = express.Router();
require('./app/routes/projects.js')(projects, passport);
app.use('/projects', projects);
*/

/*
require('./app/routes.js')(app, passport);
*/

var server = http.createServer(app);
server.listen(app.get('port'), function(){
   console.log('Express server listening on port ' + app.get('port'));
});
