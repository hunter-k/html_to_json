 var app = angular.module("htmlToJSON");
 app.service("nodeService", function($http) {

  //retrieve data back from the server using /output 
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
      };

      //send html page to server using /intput
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

      };
    });