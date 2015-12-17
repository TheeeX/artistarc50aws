myApp.controller('galleryController', ['$scope', 'userVar', 'Api', function($scope, userVar, Api){
    
    console.log(userVar.fname);
    console.log(userVar.email);
    
    $scope.file = [];
    
    var Aws = {};
    Api.MediaCreds.save({},function(data){
       Aws = data;
    });
    /*
    Api.UserGallery.save({}, $scope.dir, function(data){
       console.log(data);
    });
    */
    $scope.uploadFile = function(){
      // Configure The S3 Object 
      AWS.config.update({ accessKeyId: Aws.accessKeyId, secretAccessKey: Aws.secretAccessKey });
        
      AWS.config.region = 'us-west-2';
      var fileReader = new FileReader();
        
      if($scope.file) {
          var file = $scope.file;
          var fileKey = userVar.fname + "/" + file.name;
          console.log(fileKey);
          fileReader.readAsArrayBuffer(file);
          fileReader.onload = function(e){
          var s3 = new AWS.S3();
                  var params = {Bucket: 'artistarc-user-post-media', Key: fileKey, Body: e.target.result};
                  s3.putObject(params, function(err) {
                  if (err) {
                  console.log(err);
                    res.status(400).send('Bad Request.');
                  } else {
                    console.log("Successfully uploaded data to myBucket/myKey");   
                  }
                });
          }
      }
      else {
        // No File Selected
        alert('No File Selected');
      }
    }
}]).directive('file', function(){
    return {
        restrict: 'AE',
        file: '@',
        link: function(scope, el, attrs){
          el.bind('change', function(event){
            var files = event.target.files;
            var file = files[0];
            scope.file = file;
            scope.$parent.file = file;
            scope.$apply();
          });
        }
    };
});