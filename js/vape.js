(function() {
	var app = angular.module('vape', []);
	app.controller('RecordCountController', function($scope, $http) {
		$http.get('api/vapes')
			.then(function(response) {
				$scope.count = response.data.Count;
			});
	});

	$(document).ready(function() {
		$('.record-vape').click(function(){
			$.get("api/vape", function() {
				});
		});

		$('.delete-last-record').click(function() {
			$.get("api/delete-vape", function() {
				});
		});
	});
 })();
