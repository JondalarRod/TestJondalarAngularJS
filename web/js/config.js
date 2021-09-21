app.config( function($routeProvider){

	$routeProvider
		.when('/',{
			templateUrl: 'parciales/home.html',
			controller: 'inicioCtrl'
		})
		.when('/tab2',{
			templateUrl: 'parciales/tab2.html',
			controller: 'tab2Ctrl'
		})
		.when('/tab3',{
			templateUrl: 'parciales/tab3.html',
			controller: 'tab3Ctrl'
		})
		.otherwise({
			redirectTo: '/'
		});


});