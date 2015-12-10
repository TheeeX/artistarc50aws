myApp.controller('projectListCtrl', ['$scope', 'Api', function($scope, Api){
    $scope.userprojects = {};
    $scope.pageSize = 5;
    $scope.currentPage = 1;
    
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    
    Api.Project.query({}, function(data){
        $scope.userprojects = data;
        console.log(data);
    });
}]);