app.controller('OpeningsController', function ($scope, $routeParams, OpeningsService) {

	OpeningsService.getGroups();


    OpeningsService.getOpenings();


    if ($routeParams.group_name)
    	OpeningsService.setLearningGroup($routeParams.group_name);
   	else
   		OpeningsService.setLearningGroup("unmatcable");
});