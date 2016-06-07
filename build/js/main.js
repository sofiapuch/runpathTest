angular.module("runpathTest", [])

	.controller("runpathTestCtrl", ['$scope', '$http', function ($scope, $http) {

		$scope.loading = false;
		$scope.galleryUrl = 'http://jsonplaceholder.typicode.com/photos';


		//load the images for the API
		$scope.loadImages = function () {

			$scope.loading = true;

			$http.get($scope.galleryUrl)
				.then(function (response) {

					$scope.displayImages(response.data);
					$scope.loading = false;

		    	}, function () {
		    		console.log("error loading the data");
		    		$scope.loading = false;
		    	}
		    );
		};


		$scope.displayImages = function (images, page) {

			$scope.images = images;
			//pagination

			console.log();



		};






	}]);