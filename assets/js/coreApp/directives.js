app.directive('spinner', ['$rootScope','$location', function ($rootScope, $location) {
	return {
		restrict:'E',
		template:"<h1 ng-if='isRouteLoading' class='loader-small'>Loading <i class='fa fa-cog fa-spin'></i></h1>",
		link:function(scope, elem, attrs){
		  scope.isRouteLoading = false;

		  $rootScope.$on('$routeChangeStart', function(){
			scope.isRouteLoading = true;
		  });

		  $rootScope.$on('$routeChangeSuccess', function(){
			scope.isRouteLoading = false;
		  });
		}
	}
}]);

app.directive('friendList', ['$sails', 'userService', 'notificationService', '$filter', '$window',function ($sails, userService, notificationService, $filter, $window) {
	return {
		restrict:'E',
		templateUrl:"js/coreApp/partials/friendlist.html",
		link:function(scope, elem, attrs){
			$sails.get("/user/subscribe");
			
			userService.getAll();
			scope.users = userService.users;
			
			$sails.on("user", function (message){
				if(message.verb == 'updated'){
					userService.getAll();
					if(message.id == userService.loggedUser.id && !message.data.loggedIn){
						$window.location.href = '/index';
					}
				}
			});
			$sails.on("userLogin", function (userID){
				userService.subscribe(userID);
				userService.getAll();
			});

		    $sails.on("userLogout", function (message){
				userService.getAll();
			});
		}
	}
}]);


app.directive('messageBadge', ['$sails', 'messageService', '$filter', function ($sails, messageService, $filter) {
	return {
		restrict:'AE',
		template:'<span ng-show="newMessages.length	 > 0" class="badge">{{newMessages.length}}</span>',
		link:function(scope, elem, attrs){
			messageService.getNew();
			scope.newMessages = messageService.new;
			
			$sails.on('user', function (m) {
				messageService.getNew();
			});
		}
	}
}]);

