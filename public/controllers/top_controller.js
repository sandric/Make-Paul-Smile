app.controller('TopController', function ($scope, OpeningsService, GamesService) {

	OpeningsService.setGroups();

    GamesService.getTopGames(	function(games) {
                                    $scope.topGames = games;
    							});
});