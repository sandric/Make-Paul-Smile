app.controller('OpeningsController', function ($scope, $routeParams, $rootScope, OpeningsService) {


    this.getOpenings = function() {
        OpeningsService.getOpenings(function(response) {
                                        $scope.openings = response.data;
                                    }, function(response) {
                                        console.log("Error: " + response);
                                    });
    }



	$scope.groups = OpeningsService.getGroups();

	$rootScope.learningGroup = 'Flank';

	$scope.openings = this.getOpenings();



    $scope.learnGroup = function(groupName) {
    	$rootScope.learningGroup = groupName;

    	//$scope.learningGroup = OpeningsService.learningGroup;
    }
});