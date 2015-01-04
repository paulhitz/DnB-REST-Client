/**
 * An interceptor that adds an authentication token to certain requests.
 */
var requestInterceptor = angular.module('AuthInterceptor', ['Mediator']);

requestInterceptor.config(['$httpProvider', function($httpProvider) {
	$httpProvider.interceptors.push('authInterceptor');
}]);

/**
 * TODO should this use $q so we can surface any errors in the UI?
 */
requestInterceptor.factory('authInterceptor', function($log, $injector, ConfigService) {
    var requestInterceptor = {
        request: function(config) {
			$log.info("Intercepting");

			//Need to manually inject the AuthService to avoid a circular dependency.
			var AuthService = $injector.get('AuthService');

			//Check that authentication is required and that we have the necessary authentication settings.
			var authSettings = ConfigService.getData();
			if (authSettings && config.authenticate) {
				$log.info("Authenticating");
				AuthService.getAuthToken(authSettings).then(
					function(success) {
						//Update the request headers with the authentication token.
						$log.info("Using Auth Token: " + success.authorization);
						config.headers['Authorization'] = success.authorization;
					},
					function(error) {
						//TODO best way to handle a requestInterceptor error? Does the UI need to know that an auth error happened?
						//TODO and presumably we should abort the request?
						$log.error("Error Authenticating: " + error.msg + ". Error Code: " + error.code);

						// var errorMessage = "An error occurred while authenticating... " + error.msg + ". Error Code: " + error.code;
						// $scope.alerts.push({type: 'danger', msg: errorMessage});
						// $scope.processing = false;
					}
				);
			}
			return config;
		}
    };
    return requestInterceptor;
});


/**
 * Retrieves an Authentication Token for a specified environment. Caches them per environment.
 */
requestInterceptor.service('AuthService', function($q, $http, AUTH_ENDPOINTS) {
	var cachedAuthTokens = [];

	this.getAuthToken = function(settings) {
		var deferred = $q.defer();

		//Determine the authentication endpoint to use.
		var authEndpoint = AUTH_ENDPOINTS[settings.env];
		if (!authEndpoint) {
			deferred.reject({msg: "Unable to determine Authentication Endpoint"});
			return deferred.promise;
		}

		//Use a cached token if available. Otherwise call the authentication service.
		if (typeof cachedAuthTokens[authEndpoint] !== 'undefined') {
			deferred.resolve({authorization: cachedAuthTokens[authEndpoint]});
		} else {
			var authHeaders = { headers: {
				'ApplicationId': settings['ApplicationId'],
				'x-dnb-user': settings['x-dnb-user'],
				'x-dnb-pwd': settings['x-dnb-pwd']
			}};

			$http.get(authEndpoint, authHeaders).
				success(function(data, status, headers, config) {
					cachedAuthTokens[authEndpoint] = headers('authorization');
					deferred.resolve({authorization: headers('authorization')});
				}).
				error(function(msg, code) {
					deferred.reject({msg: msg, code: code});
				}
			);
		}
		return deferred.promise;
	};
});


/**
 * The authentication service endpoints for various environments.
 */
requestInterceptor.constant('AUTH_ENDPOINTS', {
	qa : "http://services-ext-qa.dnb.com/rest/Authentication",
	stg : "http://services-ext-stg.dnb.com/rest/Authentication"
});

