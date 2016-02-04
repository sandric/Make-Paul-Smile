app.controller('TrainingController', function ($scope, $routeParams, OpeningsService) {

    OpeningsService.getOpenings(
                                function(openings) {

                                    $scope.trainingOpenings = OpeningsService.getOpeningsByGroup($routeParams.group_name);

                                    

                                    $scope.training_game = new TrainingController($scope.trainingOpenings);

                                    /*
                                    $scope.learning_game = new LearningController(
                                                                    $scope.opening.name,
                                                                    $scope.opening.moves,
                                                                    $scope.opening.annotations,
                                                                    $scope.opening.startingMove,
                                                                    $scope.opening.details
                                                                );
                                    */
    });
});