app.controller('TopController', function ($scope, OpeningsService, GamesService) {

	OpeningsService.getGroups();

    GamesService.getTopGames(	function(games) {
                                    $scope.topGames = games;
    							});
});