app.service('GamesService', function ($http) {

    this.getGameResults = function (userID, gameID, successCallback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/users/' + userID + "/games/" + gameID
        }).then(function(response){
                    if (successCallback)
                        successCallback(response.data);
                }, 
                function(error) {
                    console.log("Error: " + error);
                    if (errorCallback)
                        errorCallback(error);
                });
    };

    this.getTopGames = function (successCallback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/top'
        }).then(function(response){
                    if (successCallback)
                        successCallback(response.data);
                }, 
                function(error) {
                    console.log("Error: " + error);
                    if (errorCallback)
                        errorCallback(error);
                });
    };
});