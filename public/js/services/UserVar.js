myApp.value('userVar', {
        fname: '',
        email: ''
    }).controller('userVarCtrlr', ['$scope', 'userVar', 'Api', function($scope, userVar, Api){
            //console.log('loaded User');
            $scope.currentuser = {};                      
            Api.User.get({}, function(data){
                $scope.currentuser = data;
                //console.log('Active User (data)');
                //console.log($scope.currentuser);
            });
                                   
            userVar.fname= 'KJ';
            userVar.email= 'ma';
            userVar = $scope.currentuser;
        }]);
/*myApp.value('userVar', {
        fname: 'KJ',
        email: 'ma'
    });
*/