app.factory('navService', ['$http', function($http){
	return {page:  'home'}
}]);


//USER SERVICE

app.factory('userService', ['$http', '$sails',function($http, $sails){
	var o = {
			users: [],
			single:{},
		    loggedUser:{}
	};

	o.getSingle = function() {
		return $http.post('', {id:projectID}).success(function(data){
			angular.copy(data, o.single);
		}).error(function (data, status, headers, config) {
			console.log(status)
		})};
	
	o.getLoggedUser = function() {
		return $http.get('/user/loggedUser').success(function(data){
			angular.copy(data, o.loggedUser);
		}).error(function (data, status, headers, config) {
			console.log(status)
		})};

    o.getAll = function() {
        return $http.get('/user').success(function(data){
            angular.copy(data, o.users);
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

	o.add = function(project) {
        return $http.post('/project/create', project).success(function(data){
            o.projects.push(data);
            console.log(data);
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

				
	o.remove = function(project) {
        return $http.post('', {projectID: project.id}).success(function(data){
            o.projects.splice(o.projects.indexOf(project), 1);
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

	o.subscribe = function(userID) {
		return $http.post('/user/subscribe', {userID: userID}).success(function(){
			console.log(status);
		}).error(function (data, status, headers, config) {
			console.log(status)
		})};
    return o;
}]);


app.factory('todosService', ['$http', function($http){

}]);



//PROJECT SERVICE
app.factory('projectService', ['$http', function($http){
	var o = {
			projects: [],
			single:{}
	};

	o.getSingle = function(projectID) {
		return $http.post('/project/getbyid', {id:projectID}).success(function(data){
			angular.copy(data, o.single);
		}).error(function (data, status, headers, config) {
			console.log(status)
		})};

    o.getAll = function(callback) {
        return $http.get('/project/getAll').success(function(data){
            angular.copy(data, o.projects);
			callback();
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

	o.add = function(project, callback) {
        return $http.post('/project/create', project).success(function(data){
			angular.copy(data, o.single);
            console.log(data);
			callback();
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

				
	o.remove = function(project, callback) {
        return $http.post('/project/remove', {projectID: project.id}).success(function(data){
			console.log(data);
			callback();
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};	


    return o;
}]);


app.factory('messageService', ['$http', '$sails', function($http, $sails){
	var o = {
			messages: [],
			new: [],
			single:{}
	};

	o.getSingle = function() {
		
	};
	
    o.getAll = function() {
        return $http.get('/message/getMyMessages').success(function(data){
            angular.copy(data, o.messages);
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};
	
	o.create = function(message, from, to) {	
        return $sails.post('/message/create', {content:message, from:from, to:to, new: true}).success(function(data){
			console.log(status)
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};
	
	o.getNew = function() {
        return $http.get('/message/getNewMessages').success(function(data){
			angular.copy(data, o.new);
        }).error(function (data, status, headers, config) {
            console.log(status)
        })};

    return o;
}]);


app.factory('customerService', ['$http', function($http){
    	var o = {
			customers: [],
			single:{}
	   };
    
        o.getAll = function(callback) {
            return $http.get('/customer/getAll').success(function(data){
                angular.copy(data, o.customers);
                callback();
            }).error(function (data, status, headers, config) {
                console.log(status)
            })};
}]);
app.factory('participantService', ['$http', function($http){
    	var o = {
			participants: [],
			single:{}
	   };
    
        o.getAll = function(callback) {
            return $http.get('/participant/getAll').success(function(data){
                angular.copy(data, o.participants);
                callback();
            }).error(function (data, status, headers, config) {
                console.log(status)
            })};
}]);

