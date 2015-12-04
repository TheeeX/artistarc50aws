myApp.directive('yoma', ['$scope', function($scope){
    return {
        template: 'Name: {{customer.name}} Address: {{customer.address}}'
    };
}]);