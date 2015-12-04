myApp.controller('userController', ['$scope', 'Api', function($scope, Api){
  $scope.tabs = [
    { title:'Messages', content:'Dynamic content 2' },
    { title:'Test', content:'Dynamic content 3' }
  ];
    $scope.currentuser = {};
    $scope.cuser = {};
  Api.ActiveUser.get({id: 'user'}, function(data){
        $scope.currentuser = data;
        console.log('Active User (data)');
        console.log($scope.currentuser);
    });
    
    
    $scope.updateinfo = function(){
        Api.ActiveUser.save({id: 'user'}, $scope.cuser,
        function(){
            console.log('updated');
        });
    }
}]);