myApp.controller('userProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.userName = $routeParams.userName;
    $scope.userProfile = {};
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.User.get({id: $scope.userName }, function(data){
        $scope.userProfile = data;
        console.log('User (data)');
        console.log(data);
        console.log($scope.userProfile);
        console.log($scope.userProfile.fname);
    });
}]);