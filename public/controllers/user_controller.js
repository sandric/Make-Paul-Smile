app.controller('UserController', function ($scope, OpeningsService, UsersService) {

	OpeningsService.setGroups();

    UsersService.getUser(	7,
    						function(user) {
                                    $scope.user = user;
    							});
});