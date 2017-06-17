 var app = angular.module("htmlToJSON");
 app.service("nodeService", function($http) {

  this.getJSONResult = function() {
    var items = [];
    var promise = $http({
      method: 'GET',
      url: '/output'
    }).then(function successCallback(response) {
      items = response.data;
      return items;
    }, function errorCallback(response) {
      console.log('error');
    });
    return promise;
        // TODO Make the HTTP request to the server and return a promise.
      };

      this.sendHTML = function(item) {
        console.log("server = " + item.htmlText);
        var promise = $http({
          url: '/input',
          method: "POST",
          data: item
        })
        .then(function(response) {
          console.log('success')
        }, 
        function(response) {
          console.log('post failed');
        });
        return promise;

        // TODO Make the HTTP request to the server and return a promise.
      };
    });