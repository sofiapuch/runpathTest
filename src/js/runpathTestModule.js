angular.module("runpathTest", ['ui.bootstrap'])

	//main controller
	.controller('mainCtrl', ['$scope', '$http', function ($scope, $http) {

		//pagination
        $scope.currentPage = 1;
        $scope.maxSize = 5;
        $scope.bigTotalItems = 5;
        $scope.imagesPerPage = 12;

		$scope.galleryUrl = 'http://jsonplaceholder.typicode.com/photos';
		$scope.loading = false;
		

		// pagination 
        $scope.setPage = function (pageNo) {
            $scope.currentPage = pageNo;
        };

        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };


		//load the images for the API
		$scope.loadImages = function () {

			$scope.loading = true;

			$http.get($scope.galleryUrl)
				.then(function (response) {

					$scope.images = response.data;
					$scope.totalImages = response.data.length/$scope.imagesPerPage;
					$scope.loading = false;

		    	}, function () {
		    		console.log("error loading the data");
		    		$scope.loading = false;
		    	}
		    );
		};

	}]);