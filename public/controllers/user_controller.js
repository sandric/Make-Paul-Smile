app.controller('UserController', function ($scope, OpeningsService, UsersService) {

	OpeningsService.getGroups();

    UsersService.getUser(	7,
    						function(user) {
                                    $scope.user = user;
    							});
});