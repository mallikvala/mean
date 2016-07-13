angular.module('todoService', [])

	// super simple service
	// each function returns a promise object 
	.factory('Todos', ['$http',function($http) {
		return {

			getArticle: function(title){
				return $http.get('/api/articles/'+title);
			}
		}
	}]);