app.controller('TopController', function ($scope, OpeningsService, GamesService) {

	OpeningsService.getGroups();

    GamesService.getTopGames(	function(games) {
                                	console.log(games);
                                    $scope.topGames = games;
    							});
});