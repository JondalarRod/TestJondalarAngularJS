app.controller('tab2Ctrl', ['$scope', 'ngDialog', function($scope, ngDialog) {
	
	$scope.setActive("mTab2");

	$scope.informacion = JSON.parse(localStorage.data);

}]);