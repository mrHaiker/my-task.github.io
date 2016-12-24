angular.module('mainQuiz', [])

.controller('mainCtrl', function($scope, Quiz, $http, $timeout, $filter){
	var reg = /(\<(\/?[^>]+)>)/g;
	$scope.list1 = [];
	$scope.list2 = [];
	$scope.answerCounter = 0;
	$scope.successCounter = 0;
	$scope.result = '';

	$scope.filterIt = function() {
	    return $filter('orderBy')($scope.list2, 'title');
	};

	function getQuestion (){
		Quiz.getAll().then(function(res){
			$scope.list1 = [];
			$scope.quiz = res.data[0];

			$scope.latters = $scope.quiz.answer.replace(reg, '');
			$scope.list2 = Quiz.splice($scope.latters);
			$scope.list2 = Quiz.riffle($scope.list2);
			$scope.answerCounter++;
			console.log('Answer: '+$scope.quiz.answer);
		}) 
	}

	var init = function() {
		getQuestion();
	}

	$scope.skip = function() {
		$scope.result = '';
		getQuestion();
	}

	$scope.next = function() {
		$scope.result = '';
		$scope.successCounter++;
		getQuestion();
	}

	$scope.reset = function() {
		$scope.list1 = [];
		$scope.list2 = Quiz.splice($scope.latters);
	}

	$scope.validate = function() {
		$timeout(function(){
			var matchStr = $scope.list1.join('');

			if ($scope.list2.length) return;
			$scope.result = 'error';

			if (matchStr != $scope.quiz.answer) return;
			$scope.result = 'success'
		},50);
	}


	init();

})
