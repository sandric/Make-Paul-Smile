app.controller('IndexController', function ($scope, OpeningsService) {

	OpeningsService.getGroups();

    OpeningsService.getOpenings();
});