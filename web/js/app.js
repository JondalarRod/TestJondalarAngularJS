var app = angular.module('universidadApp',['ngRoute', 'ngDialog']);

app.controller('mainCtrl', ['$scope','$http', function($scope, $http){
  
	$scope.TestApp = 'parciales/menu.html';
	$scope.footer = 'parciales/footer.html';
	$scope.setActive = function(Opcion){

		$scope.mInicio     = "";
		$scope.mTab2 = "";
		$scope.mTab3   = "";

		$scope[Opcion] = "active";

	}

}]);
