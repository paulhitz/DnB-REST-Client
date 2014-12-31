var module = angular.module('AuthInterceptor', []);

module.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('authInterceptor');
}]);


module.factory('authInterceptor', function() {  
    var requestInterceptor = {
        request: function(config) {
			console.log("intercepting request");
			//config.headers['Authorization'] = "foo"; //TODO call AuthService
			//config.headers['ApplicationId'] = 36; //TODO do we want to handle this here also?
			config.headers['x-test'] = "foo";
			return config;
		}		
    };
    return requestInterceptor;
});


