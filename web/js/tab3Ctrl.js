
app.controller('tab3Ctrl', ['$scope','ngDialog', function ($scope, ngDialog) {

	$scope.informacionModal = JSON.parse(sessionStorage.data);

	$scope.clickToOpen = function() {
		ngDialog.open({template:'parciales/modal.html', className:'ngdialog-theme-default'}); 
	}
	//$scope.setActive("mAlumnos");
	
	


}]);
