app.config(function ($routeProvider) {
    $routeProvider

        .when('/:group_name?',
            {
                controller: 'IndexController',
                templateUrl: '/views/index.html'
            })

        .when('/:group_name/learn/:opening_name',
            {
                controller: 'LearningController',
                templateUrl: '/views/learning.html'
            })

        .when('/:group_name/train',
            {
                controller: 'TrainingController',
                templateUrl: '/views/training.html'
            })

        .when('/results/:user_id/:game_id',
            {
                controller: 'ResultsController',
                templateUrl: '/views/results.html'
            })

		.when('/top',
            {
                controller: 'TopController',
                templateUrl: '/views/top.html'
            })

		.when('/profile',
            {
                controller: 'UserController',
                templateUrl: '/views/user.html'
            })

        .otherwise({ redirectTo: '/' });
});