myApp.controller('troupeProfileCtrl', ['$scope', '$routeParams', 'Api', function($scope, $routeParams, Api){
    $scope.userName = $routeParams.userName;
    $scope.usertroupe = {};
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.UserTroupeOne.get({id: $scope.userName }, function(data){
        $scope.usertroupe = data;
        console.log('Troupe (data)');
        console.log(data);
        console.log($scope.usertroupe);
        console.log($scope.usertroupe.name);
    });
}]);