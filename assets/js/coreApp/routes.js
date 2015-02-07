app.config(['$routeProvider', '$locationProvider',
  function ($routeProvider, $locationProvider) {
		$routeProvider.
		when('/home', {
			templateUrl: 'js/coreApp/partials/home.html',
			controller: 'homeCtrl',
			resolve: {
				navPromise: ['navService', function (navService) {
					navService.page = 'home';
			}]
			}
		}).
		when('/customers', {
			templateUrl: 'js/coreApp/partials/clients.html',
			controller: 'customerCtrl',
			resolve: {
				navPromise: ['navService', function (navService) {
					navService.page = 'Clients';
				}]
			}
		}).
        when('/participants', {
			templateUrl: 'js/coreApp/partials/participants.html',
			controller: 'participantCtrl',
			resolve: {
				navPromise: ['navService', function (navService) {
					navService.page = 'Participants';
				}]
			}
		}).
		when('/admin', {
			templateUrl: 'js/coreApp/partials/admin.html',
			controller: 'adminCtrl',
			resolve: {
				navPromise: ['projectService', 'navService', function (projectService, navService) {
					navService.page = 'Administration';
			}],
			}
		}).
		when('/myprofil', {
			templateUrl: 'js/coreApp/partials/profil.html',
			controller: 'profilCtrl',
			resolve: {
				navPromise: ['projectService', 'navService', function (projectService, navService) {
					navService.page = 'profil';
			}],
				userPromise: ['userService', function (userService) {
					return userService.getLoggedUser();
			}]
			}
		}).
		when('/addproject', {
			templateUrl: 'js/coreApp/partials/addProject.html',
			controller: 'addProjectCtrl',
			resolve: {
				navPromise: ['navService', function (navService) {
					navService.page = 'Ajouter un nouveau projet';
				}],
				userPromise: ['userService', function (userService) {
					return userService.getLoggedUser();
				}]
			}
		}).
		when('/project/:id', {
			templateUrl: 'js/coreApp/partials/project.html',
			controller: 'projectCtrl',
			resolve: {
				navPromise: ['navService', function (navService) {
					navService.page = 'project management';
				}],
				userPromise: ['userService', function (userService) {
					return userService.getLoggedUser();
				}],
				projectPromise: ['projectService', '$routeParams', function (projectService, $routeParams) {
					//return projectService.getSingle($routeParams.id);
				}]
			}
		}).
		otherwise({
			redirectTo: '/home'
		});
  }]);