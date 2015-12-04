myApp.controller('page1Controller', ['$scope', function($scope){
	$scope.user = {
		firstname: "Karan",
		lastname: "Jeet",
		run: function(destination){
			return this.firstname + " is running to " + destination;
		}
	}
}]);