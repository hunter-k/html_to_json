var app = angular.module("htmlToJSON");
app.controller("mainController", function($scope, nodeService) {
$scope.formItem = {};

	$scope.sendInput = function (input) {
		nodeService.sendHTML(input);
		console.log(input);
		nodeService.getJSONResult().then(function(result) {
			$scope.results = result;
		});
	}

	// function getResult () {
	//     nodeService.getJSONResult().then(function(result) {
 //        $scope.results = result;
 //   	 });
	// }

	// getResult();

});