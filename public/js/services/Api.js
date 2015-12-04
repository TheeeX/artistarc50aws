myApp.factory('Api',['$resource', function($resource){
    return {
        Troupe: $resource('/api/troupe/:id', {id: '@id'}),
        Posts: $resource('/api/posts/:id', {id: '@id'}),
        Likes: $resource('/api/likes/:id', {id: '@id'}),
        Artist: $resource('/api/artist/:id', {id: '@id'}),
        SearchObj: $resource('/api/search/:target/:id', {target: '@target', id: '@id'},
            {
                'save':  {method:'POST', isArray:true},
            }
        ),
        ActiveUser: $resource('/api/activeuser/:id', {id: '@id'}),
        UserTroupeOne: $resource('/api/user/troupe/:id', {id: '@id'}),
        UserAddrsbook: $resource('/api/user/addbook/:id', {id: '@id'}),
        Notify: $resource('/api/notify/:type/:sid/:tid/:notf', {type: '@type', sid: '@sid', tid: '@tid', notf: '@notf'})
    }
}])