angular.module("runpathTest", [])

	.controller("runpathTestCtrl", ['$scope', '$http', function ($scope, $http) {

		$scope.galleryUrl = 'http://jsonplaceholder.typicode.com/photos';

		$scope.loadImages = function () {


			$http.get($scope.galleryUrl)
				.then(function (response) {
		        	console.log("data: ", response.data);
		    	}, function () {
		    		console.log("error loading the data");
		    	}
		    );



		};









	}]);