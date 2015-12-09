myApp.controller('projectListCtrl', ['$scope', 'Api', function($scope, Api){
    $scope.userprojects = {};
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.Project.query({}, function(data){
        $scope.userprojects = data;
        console.log(data);
    });
}]);