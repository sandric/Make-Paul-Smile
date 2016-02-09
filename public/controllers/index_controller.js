app.controller('IndexController', function ($scope, $routeParams, OpeningsService) {

	OpeningsService.getGroups();

    OpeningsService.getOpenings();

    if ($routeParams.group_name)
    	OpeningsService.setLearningGroup($routeParams.group_name);
});