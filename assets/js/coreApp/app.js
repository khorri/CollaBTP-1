var app = angular.module('app', ['dependencies']);

app.constant('angularMomentConfig', {
    preprocess: 'utc', // optional
    timezone: 'Africa/Casablanca' // optional
});

app.config(['notificationServiceProvider', 'uiSelectConfig', function(notificationServiceProvider, uiSelectConfig) {
	notificationServiceProvider.setDefaults({
		history: false,
		delay: 3000,
		closer: false,
		closer_hover: false,
		animate_speed: 'fast'
	});
	
	uiSelectConfig.theme = 'bootstrap';
	uiSelectConfig.resetSearchInput = true;
}]);
