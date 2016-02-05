app.service('UsersService', function ($http) {

    this.getUser = function (userID, successCallback, errorCallback) {
        $http({
            method: 'GET',
            url: '/api/users/' + userID
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