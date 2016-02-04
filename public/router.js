
app.config(function ($routeProvider) {
    $routeProvider

        .when('/learning/:group_name/:opening_name',
            {
                controller: 'LearningController',
                templateUrl: '/views/opening.html'
            })

        //.otherwise({ redirectTo: '/' });
});
