app.controller('LearningController', function ($scope, $rootScope, $routeParams, OpeningsService) {

    this.getOpening = function(openingName) {
        OpeningsService.getOpening( openingName,
                                    function(response) {
                                        $scope.opening = response.data;
                                    }, function(response) {
                                        console.log("Error: " + response);
                                    });
    }


    if ($routeParams.opening_name) {

        $rootScope.learningGroup = $routeParams.group_name;


        
        $scope.openingName = $routeParams.opening_name;

        this.getOpening($scope.openingName);
    }
});