myApp.factory('Api',['$resource', function($resource){
    return {
        Troupe:
            $resource('/api/troupe/:id', {id: '@id'}),
        UserTroupe: 
            $resource('/api/user/troupe/:id', {id: '@id'}),
        Project: 
            $resource('/api/project/:id', {id: '@id'}),
        UserProject: 
            $resource('/api/user/project/:id', {id: '@id'}),
        Posts: 
            $resource('/api/posts/:id', {id: '@id'}),
        Likes: 
            $resource('/api/likes/:id', {id: '@id'}),
        Artist: 
            $resource('/api/artist/:id', {id: '@id'}),
        SearchObj: 
            $resource('/api/search/:target/:id', {target: '@target', id: '@id'},
                {
                    'save':  {method:'POST', isArray:true},
                }
            ),
        User: 
            $resource('/api/user/:id', {id: '@id'}),
        UserAddrsbook: 
            $resource('/api/user/addbook/:id', {id: '@id'}),
        Notify: 
            $resource('/api/notify/:type/:sid/:tid/:notf', {type: '@type', sid: '@sid', tid: '@tid', notf: '@notf'})
    }
}])