angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope','$http','Todos', function($scope, $http, Todos) {
		$scope.formData = {};
		$scope.loading = true;

		Todos.getArticle('KCR')
			.success(function (data) {
				$scope.article = data[0].text;
				console.log($scope.article);
			})
	}]);