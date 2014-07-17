(function () {
    'use strict';
    
    angular.module('csa', [
    	'ngAnimate'])

    .controller('RootController', ['$http', '$rootScope', '$scope', '$location', 
    	function ($http, $rootScope, $scope, $location) {
    	
    	var screens = ["home", "intro"];
    	var currentScreenIndex = 0;
    	
		$scope.currentScreen = screens[currentScreenIndex];
		
		$scope.nextScreen = function nextScreen() {
		
			if(currentScreenIndex == screens.length - 1)
				return;
			
			currentScreenIndex++;
			$scope.currentScreen = screens[currentScreenIndex];
		};
		
		$scope.prevScreen = function prevScreen() {

			if(currentScreenIndex == 0)
				return;
			
			currentScreenIndex--;
			$scope.currentScreen = screens[currentScreenIndex];
		};
		
    }]);
}());