app.controller('coreCtrl', ['$scope', 'navService', '$sails', 'notificationService', 'userService', 'messageService', 'ngDialog', function ($scope, navService, $sails, notificationService, userService, messageService, ngDialog) {
	$scope.ready = false;
	$scope.showChatBox = false;
	$scope.usersHidden = true;
	userService.getLoggedUser();
	messageService.getAll();
	$scope.lastmessages = messageService.messages;

	angular.element(document).ready(function () {
		$scope.ready = true;
	});

	$scope.$watch(function () {
		return navService.page;
	}, function (newValue) {
		$scope.page = newValue;
	});

	$scope.usersNavClicked = function () {
		if ($scope.usersHidden) {
			$scope.usersHidden = false
		} else {
			$scope.usersHidden = true
		}
	}

	$scope.friendClicked = function (user) {
		$scope.chatUser = user;
		$scope.showChatBox = true;
	}

	$scope.closeChatBoxClicked = function () {
		$scope.showChatBox = false;
	}

	$scope.isLogged = function (elm) {
		return userService.loggedUser.id == elm.id;
	}

	$scope.sendMsg = function () {
		messageService.create($scope.msgToSend, userService.loggedUser, $scope.chatUser);
		$scope.msgToSend = '';
	}

	$scope.openMsg = function () {

	}

	$sails.on('user', function (m) {
		if (m.verb == 'messaged') {
			messageService.getAll();
			notificationService.notify({
				title: 'New message',
				text: m.data.from.name + ': ' + m.data.content,
				icon: 'fa fa-envelope',
				type: 'info',
				animate_speed: 'fast'
			});
		}
	});


	$sails.on('disconnect', function () {
		notificationService.notify({
			title: 'Deconnection',
			text: 'La connection avec le serveur a été perdu',
			icon: 'fa fa-power-off',
			type: 'error',
			hide: false,
			buttons: {
				closer: false,
				sticker: false
			}
		});
	});

}]);


// DASHBOARD CONTROLLER

app.controller('homeCtrl', ['$scope', '$compile', 'navService', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'ngDialog', '$resource', 'projectService', 'notificationService', function ($scope, $compile, navService, DTOptionsBuilder, DTColumnDefBuilder, ngDialog, $resource, projectService, notificationService) {

	//variable du projet à ajouter
	$scope.project = {};
	$scope.projects = [];
	$scope.model = {};
	$scope.projectToDel = {};

	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10).withOption('responsive', true);

	$scope.dtColumnDefs = [
		DTColumnDefBuilder.newColumnDef(0),
		DTColumnDefBuilder.newColumnDef(1),
		DTColumnDefBuilder.newColumnDef(2),
		DTColumnDefBuilder.newColumnDef(3).withClass('none'),
		DTColumnDefBuilder.newColumnDef(4).notSortable(),
		DTColumnDefBuilder.newColumnDef(5).notSortable(),
	];

	$resource('/project/getAll').query().$promise.then(function (projects) {
		$scope.projects = projects;
	});


	//Ajout de Projet

	$scope.openAddDialog = function () {
		$scope.project = {};
		ngDialog.open({
			template: 'addProjectModal',
			scope: $scope,
			showClose: true,
			closeByDocument: false,
			closeByEscape: true,
			className: 'ngdialog-theme-flat ngdialog-big'
		});
	}

	$scope.closeModal = function () {
		ngDialog.closeAll();
	}


	$scope.createProject = function () {
		projectService.add($scope.project, function () {
			$scope.refreshData();
			notificationService.notify({
				title: 'Projet ajouté',
				text: 'Le projet "' + $scope.project.name + '" a été ajouté',
				icon: 'fa fa-plus',
				type: 'success',
				animate_speed: 'fast'
			});
		});
		$scope.closeModal();
	}

	//Supression de Projet

	$scope.openDeleteDialog = function (project) {
		$scope.projectToDel = project;
		ngDialog.open({
			template: 'delProjectModal',
			scope: $scope,
			showClose: true,
			closeByDocument: true,
			closeByEscape: true,
			className: 'ngdialog-theme-flat ngdialog-small'
		});
	}

	$scope.deleteProject = function () {
		projectService.remove($scope.projectToDel, function () {
			$scope.refreshData();
			notificationService.notify({
				title: 'Projet supprimé',
				text: 'Le projet "' + $scope.projectToDel.name + '" a été supprimé',
				icon: 'fa fa-trash',
				type: 'success',
				animate_speed: 'fast',
			});
		})
		$scope.closeModal();

	}


	//actualisation des donnés du tableau

	$scope.refreshData = function () {
		projectService.getAll(function () {
			$scope.projects = projectService.projects;
		});

	}

	function createdRow(row, data, dataIndex) {
		// Recompiling so we can bind Angular directive to the DT
		$compile(angular.element(row).contents())($scope);
	}

}]);

// ADD PROJECT CONTROLLER

app.controller('addProjectCtrl', ['$scope', 'navService', '$sails', 'projectService', function ($scope, navService, $sails, projectService) {
	$scope.project = {};
	$scope.items =  [
		{ name: 'Adam',      email: 'adam@email.com',      age: 12, country: 'United States' },
		{ name: 'Amalie',    email: 'amalie@email.com',    age: 12, country: 'Argentina' },
		{ name: 'Estefanía', email: 'estefania@email.com', age: 21, country: 'Argentina' },
		{ name: 'Adrian',    email: 'adrian@email.com',    age: 21, country: 'Ecuador' },
		{ name: 'Wladimir',  email: 'wladimir@email.com',  age: 30, country: 'Ecuador' },
		{ name: 'Samantha',  email: 'samantha@email.com',  age: 30, country: 'United States' },
		{ name: 'Nicole',    email: 'nicole@email.com',    age: 43, country: 'Colombia' },
		{ name: 'Natasha',   email: 'natasha@email.com',   age: 54, country: 'Ecuador' },
		{ name: 'Michael',   email: 'michael@email.com',   age: 15, country: 'Colombia' },
		{ name: 'Nicolás',   email: 'nicole@email.com',    age: 43, country: 'Colombia' }
	];
	
	$scope.paymentMethods =  [
		{ content: 'signature du contrat',      percentage: '10%' },
		{ content: 'Examination du document',    percentage: '20%'},
		{ content: 'Aprés la premiere visite', percentage: '70%' }
	];

}]);




// ADMIN CONTROLLER

app.controller('adminCtrl', ['$scope', 'todosService', 'navService', function ($scope, projectService, navService) {



}]);

// PROFIL CONTROLLER

app.controller('profilCtrl', ['$scope', 'navService', '$sails', 'userService', function ($scope, navService, $sails, userService) {

	$scope.loggedUser = userService.loggedUser;

}]);

// PROJECT CONTROLLER

app.controller('projectCtrl', ['$scope', 'navService', '$sails', 'userService', 'projectService', '$routeParams', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'ngDialog', function ($scope, navService, $sails, userService, projectService, $routeParams, DTOptionsBuilder, DTColumnDefBuilder, ngDialog) {

	projectService.getSingle($routeParams.id);
	$scope.project = projectService.single;
	$scope.dynamic = 69;

	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10).withOption('responsive', true);
	
	$scope.closeModal = function () {
		ngDialog.closeAll();
	}




	//	 DOCEXAMINATION LOGIC

	$scope.dtColumnDefsED = [
		DTColumnDefBuilder.newColumnDef(0),
		DTColumnDefBuilder.newColumnDef(1).withClass('none'),
		DTColumnDefBuilder.newColumnDef(2).notSortable(),
	];
	
	$scope.openAddDocExaminationDialog = function () {
		ngDialog.open({
			template: 'addDocExaminationModal',
			scope: $scope,
			showClose: true,
			closeByDocument: false,
			closeByEscape: true,
			className: 'ngdialog-theme-flat ngdialog-big'
		});
	}


}]);


app.controller('customerCtrl', ['$scope', '$resource', 'navService', 'DTOptionsBuilder', 'DTColumnDefBuilder', '$sails', 'userService', 'customerService', '$routeParams', function ($scope, $resource, navService, DTOptionsBuilder, DTColumnDefBuilder, $sails, userService, customerService, $routeParams) {
	$scope.customers = [];

	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);

	$scope.dtColumnDefs = [
		DTColumnDefBuilder.newColumnDef(0),
		DTColumnDefBuilder.newColumnDef(1),
		DTColumnDefBuilder.newColumnDef(2),
		DTColumnDefBuilder.newColumnDef(3).notSortable(),
	];

	$resource('/customer/getAll').query().$promise.then(function (customers) {
		$scope.customers = customers;
	});


}]);