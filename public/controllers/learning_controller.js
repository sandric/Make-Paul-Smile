app.controller('LearningController', function ($scope, $routeParams, OpeningsService) {

    OpeningsService.getGroups();

    OpeningsService.getOpenings(
        function(openings) {

            $scope.opening = OpeningsService.getOpening($routeParams.opening_name);

            $scope.learning_game = new LearningController(
                                            $scope.opening.name,
                                            $scope.opening.moves,
                                            $scope.opening.annotations,
                                            $scope.opening.startingMove,
                                            $scope.opening.details
                                        );
        });
});