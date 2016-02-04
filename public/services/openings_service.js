app.service('OpeningsService', function ($http) {

    this.getGroups = function () {
        return [
                "Open",
                "Semi-open",
                "Closed",
                "Semi-closed",
                "Indian-defence",
                "Flank"
        ];
    };

    this.getOpenings = function (successCallback, errorCallback) {

        $http({
            method: 'GET',
            url: '/api/openings/'
        }).then(successCallback, errorCallback);
    };

    this.getOpening = function (openingName, successCallback, errorCallback) {

        $http({
            method: 'GET',
            url: '/api/openings/' + openingName
        }).then(successCallback, errorCallback);
    };

});