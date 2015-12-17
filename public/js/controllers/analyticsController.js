myApp.controller('analyticsController', ['$scope', function($scope){
    $scope.tabs = [
        { title:'Messages', content:'Dynamic content 2' },
        { title:'Test', content:'Dynamic content 3' }
      ];
    //
      $scope.testtag = {
          title: 'wow',
          content: 'meow'
      };
    //
    // Line Chart
      $scope.labels = ["January", "February", "March", "April", "May", "June"];
      $scope.series = ['Series A', 'Series B'];
      $scope.data = [
        [65, 59, 80, 81, 56, 55],
        [28, 48, 40, 19, 86, 27]
      ];
      $scope.onClick = function (points, evt) {
        console.log(points, evt);
      };
    //Donut Chart
      $scope.dlabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
      $scope.ddata = [300, 500, 100];
    
}]).directive('yoma', function(){
    return {
        template: 'Name: {{testtag.title}} Address: {{testtag.content}}'
    };
});