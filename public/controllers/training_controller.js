app.controller('TrainingController', function ($scope, $routeParams, OpeningsService) {

	OpeningsService.getGroups();

    OpeningsService.setLearningGroup($routeParams.group_name);

    OpeningsService.getOpenings(
                                function(openings) {

                                    $scope.trainingOpenings = OpeningsService.getOpeningsByGroup($routeParams.group_name);

                                    $scope.training_game = new TrainingController($scope.trainingOpenings);
    });
});