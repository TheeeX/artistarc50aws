myApp.controller('userProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
 $scope.tabs = [
    { title:'Messages', content:'Dynamic content 2' },
    { title:'Test', content:'Dynamic content 3' }
  ];
    $scope.currentuser = {};
    $scope.cuser = {};
    $scope.userName = $routeParams.userName;
    
  Api.User.get({id: $scope.userName }, function(data){
        $scope.currentuser = data;
        console.log('Active User (data)');
        console.log($scope.currentuser);
    });
    
    
    $scope.updateinfo = function(){
        Api.User.save({id: $scope.userName }, $scope.cuser,
        function(){
            console.log('updated');
        });
    }
}]);