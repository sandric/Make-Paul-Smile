app.controller('ResultsController', function ($scope, $routeParams, GamesService, OpeningsService) {

	OpeningsService.getGroups();

    GamesService.getGameResults($routeParams.user_id,
    							$routeParams.game_id,
                                function(results) {
                                	console.log(results);
                                    $scope.gameResults = results;
    							});
});