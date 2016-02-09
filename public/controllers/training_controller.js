app.controller('TrainingController', function ($scope, $routeParams, OpeningsService) {

	OpeningsService.setGroups();

    OpeningsService.setLearningGroup($routeParams.group_name);

    OpeningsService.setOpenings(
                                function(openings) {

                                    $scope.trainingOpenings = OpeningsService.getOpeningsByGroup($routeParams.group_name);

                                    $scope.training_game = new TrainingController($scope.trainingOpenings);
    });
});