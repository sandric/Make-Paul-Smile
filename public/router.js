app.config(function ($routeProvider) {
    $routeProvider

        .when('/groups/:group_name?',
            {
                controller: 'OpeningsController',
                templateUrl: '/views/openings.html'
            })

        .when('/groups/:group_name/learn/:opening_name',
            {
                controller: 'LearningController',
                templateUrl: '/views/learning.html'
            })

        .when('/groups/:group_name/train',
            {
                controller: 'TrainingController',
                templateUrl: '/views/training.html'
            })

        .when('/results',
            {
                controller: 'ResultsController',
                templateUrl: '/views/results.html'
            })

        .otherwise({ redirectTo: '/groups/' });
});