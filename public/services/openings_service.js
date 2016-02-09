app.service('OpeningsService', function ($http, $rootScope, $routeParams) {

    this.setGroups = function () {
        
        this.setLearningGroup($routeParams.group_name);

        $rootScope.groups = [
            "Open",
            "Semi-open",
            "Closed",
            "Semi-closed",
            "Indian-defence",
            "Flank"
        ];
    };

    this.unsetGroups = function () {
        
        this.unsetLearningGroup();
        $rootScope.groups = undefined;
    }; 

    this.setOpenings = function (successCallback, errorCallback) {
        if ($rootScope.openings) {
            if (successCallback)
                successCallback($rootScope.openings);
        }
        else
            $http({
                method: 'GET',
                url: '/api/openings/'
            }).then(function(response){
                        $rootScope.openings = response.data;
                        if (successCallback)
                            successCallback($rootScope.openings);
                    }, 
                    function(response) {
                        console.log("Error: " + error);
                        if (errorCallback)
                            errorCallback(response);
                    });
    };


    this.getOpeningsByGroup = function(groupName) {
        return $rootScope.openings.filter(function(opening) {
            return opening.group == groupName;
        });
    }


    this.getOpening = function (openingName) {
        var result = $rootScope.openings.filter(function(opening) {
            return opening.name == openingName;
        });

        return result[0];
    }





    this.setLearningGroup = function(learningGroup) {
        console.log("setting: " + learningGroup);
        $rootScope.learningGroup = learningGroup;
    }

    this.unsetLearningGroup = function() {
        $rootScope.learningGroup = undefined;
    }

});