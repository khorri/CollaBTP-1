app.controller('coreCtrl', ['$scope', 'navService', '$sails', 'notificationService', 'userService', 'messageService', 'ngDialog', function($scope, navService, $sails, notificationService, userService, messageService, ngDialog) {
	$scope.ready = false;
	$scope.showChatBox = false;
	$scope.usersHidden = true;
	userService.getLoggedUser();
	messageService.getAll();
	$scope.lastmessages = messageService.messages;

	angular.element(document).ready(function () {
		$scope.ready = true;
	});

	$scope.$watch(function(){
		return navService.page;
	}, function (newValue) {
		$scope.page = newValue;
	});

	$scope.usersNavClicked = function(){
		if($scope.usersHidden){
			$scope.usersHidden = false
		}else{
			$scope.usersHidden = true
		}
	}

	$scope.friendClicked = function(user){
		$scope.chatUser = user;
		$scope.showChatBox = true;
	}

	$scope.closeChatBoxClicked = function(){
		$scope.showChatBox = false;
	}

	$scope.isLogged = function(elm){
		return userService.loggedUser.id == elm.id;
	}

	$scope.sendMsg = function(){
		messageService.create($scope.msgToSend, userService.loggedUser, $scope.chatUser);
		$scope.msgToSend = '';
	}

	$scope.openMsg = function(){

	}

	$sails.on('user', function (m) {
		if(m.verb == 'messaged'){
			messageService.getAll();
			notificationService.notify({
				title: 'New message',
				text: m.data.from.name+': ' + m.data.content,
				icon: 'fa fa-envelope',
				type: 'info',
				animate_speed: 'fast'
			});
		}
	});
	

	$sails.on('disconnect', function(){
		alert('disconnect');
	});

}]);

app.controller('homeCtrl', ['$scope', '$compile', 'navService', 'DTOptionsBuilder', 'DTColumnDefBuilder', 'ngDialog', '$resource', 'projectService', function($scope, $compile, navService, DTOptionsBuilder, DTColumnDefBuilder, ngDialog, $resource, projectService) {
	
	//variable du projet à ajouter
	$scope.project = {};
	$scope.projects= [];

	$scope.dtOptions = DTOptionsBuilder.newOptions().withPaginationType('full_numbers').withDisplayLength(10);

	$scope.dtColumnDefs = [
		DTColumnDefBuilder.newColumnDef(0),
		DTColumnDefBuilder.newColumnDef(1),
		DTColumnDefBuilder.newColumnDef(2),
		DTColumnDefBuilder.newColumnDef(3)
	];
	
	$resource('/project/getAll').query().$promise.then(function(projects) {
		$scope.projects = projects;
	});
	

	//fonction d'ouverture du modal d'ajout de projet
	$scope.openAddDialog = function(){
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
	
	$scope.closeModal = function(){
		ngDialog.closeAll();
	}
	
	
	$scope.createProject = function(){
		projectService.add($scope.project, function(){
			$scope.refreshData();
		});
		$scope.closeModal();
	}
	
	$scope.refreshData = function(){
		projectService.getAll(function(){
			$scope.projects = projectService.projects;
		});
		
	}

	function createdRow(row, data, dataIndex) {
		// Recompiling so we can bind Angular directive to the DT
		$compile(angular.element(row).contents())($scope);
	}

}]);

app.controller('clientsCtrl', ['$scope', 'todosService', 'navService', function($scope, projectService, navService) {



}]);

app.controller('adminCtrl', ['$scope', 'todosService', 'navService', function($scope, projectService, navService) {



}]);


app.controller('profilCtrl', ['$scope', 'navService', '$sails', 'userService', function($scope, navService, $sails, userService){

	$scope.loggedUser = userService.loggedUser;

}]);


app.controller('projectCtrl', ['$scope', 'navService', '$sails', 'userService', 'projectService', '$routeParams', function($scope, navService, $sails, userService, projectService, $routeParams){

	$scope.loggedUser = userService.loggedUser;
	$scope.project = projectService.getSingle($routeParams.id);
	

}]);