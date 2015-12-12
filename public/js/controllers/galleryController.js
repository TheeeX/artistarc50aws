myApp.controller('galleryController', ['$scope', 'Api', function($scope, Api){
    
    $scope.file = {};
    $scope.creds = {
      bucket: 'artistarc-user-post-media/KJ',
      access_key: 'AKIAIB3N7NAVFNKMT44Q',
      secret_key: '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'
    }
    
    $scope.uploadFile = function(){
  // Configure The S3 Object 
      AWS.config.update({ accessKeyId: $scope.creds.access_key, secretAccessKey: $scope.creds.secret_key });
      AWS.config.region = 'us-west-2';
      var bucket = new AWS.S3({ params: { Bucket: $scope.creds.bucket } });

      if($scope.file) {
        var params = { Key: $scope.file.name, ContentType: $scope.file.type, Body: $scope.file, ServerSideEncryption: 'AES256' };

        bucket.putObject(params, function(err, data) {
          if(err) {
            // There Was An Error With Your S3 Config
            alert(err.message);
            return false;
          }
          else {
            // Success!
            alert('Upload Done');
          }
        })
        .on('httpUploadProgress',function(progress) {
              // Log Progress Information
              console.log(Math.round(progress.loaded / progress.total * 100) + '% done');
            });
      }
      else {
        // No File Selected
        alert('No File Selected');
      }
    }
}]);