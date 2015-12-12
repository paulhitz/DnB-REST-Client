/**
 * A controller responsible for broadcasting events.
 */
clientApp.controller('EventsCtrl', function($scope, $rootScope) {

	//Show or hide the main content or history content.
	$scope.loadHistory = function(value) {
		$rootScope.displayHistory = value;
		if (value) {
			//Broadcast an event to indicate that the request history should be loaded.
			$rootScope.$broadcast('loadHistory');
		}
	};
});
