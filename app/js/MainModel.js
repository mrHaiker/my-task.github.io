angular.module('mainQuiz')
	.factory('Quiz', function($http) {
		var quiz = {};

		quiz.getAll = function() {
			return $http.get('//jservice.io/api/random')
		}

		quiz.splice = function(data) {
			var res = [];

			angular.forEach(data, function(val, key){
				res.push(val);
			})

			return res;
		}

		quiz.riffle = function(data) {
			function compareRandom(a, b) {
			  return Math.random() - 0.5;
			}

			return data.sort(compareRandom);;
		}

		return quiz;
	});