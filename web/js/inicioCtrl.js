app.controller('inicioCtrl', ['$scope', '$http', '$window', function ($scope, $http, $window) {

	$scope.setActive("mInicio");


	$scope.buscador = ""

	$scope.familia = {};

	$http.get('Data/Familia.json')
		.success(function (data) {
			$scope.familia = data.Familia
		});

	$scope.setSelected = function (familiar) {
		sessionStorage.data = JSON.stringify(familiar);
		localStorage.data = JSON.stringify(familiar);
		$window.location.href = ('#/tab2')
	};
}]);