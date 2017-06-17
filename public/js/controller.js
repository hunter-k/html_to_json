var app = angular.module("htmlToJSON");
app.controller("mainController", function($scope, nodeService) {
//Represent the form on index html page
$scope.formItem = {};

	//function triggered by form submit which both sends input data and
	//retrieves parsed data from the server
	$scope.sendInput = function (input) {
		nodeService.sendHTML(input);
		nodeService.getJSONResult().then(function(result) {
			$scope.results = result;
		});
	}

});