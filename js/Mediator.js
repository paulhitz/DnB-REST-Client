/**
 * Mediator for reducing the coupling between applications and the Authentication Interceptor.
 */
var mediator = angular.module('Mediator', []);

/**
 * Service for storing configuration details. E.g. Authentication settings.
 */
mediator.service('ConfigService', function($log) {
	var service = this;

	service.setData = function(data) {
		$log.info("Mediator received configuration data: " + JSON.stringify(data));
		return service.data = data;
	};

	service.getData = function() {
		return service.data;
	};
});
