app.controller('IndexController', function ($scope, OpeningsService) {

	OpeningsService.setGroups();

    OpeningsService.setOpenings();
});