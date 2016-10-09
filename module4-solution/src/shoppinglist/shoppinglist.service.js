(function () {
'use strict';

angular.module('ShoppingList')
.service('ShoppingListService', ShoppingListService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


ShoppingListService.$inject = ['$http', 'ApiBasePath']
function ShoppingListService($http, ApiBasePath) {
  var service = this;

  var items = [];

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    response.then(function (response) {
      items = response.data;
    })
    .catch(function (error) {
        console.log("Something went terribly wrong.");
      });
    return response;
  };

  service.getItemsForCategory = function () {
    items = [];
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    response.then(function(response) {
      var menuItems = response.data.menu_items;
    })
    .catch(function (error) {
        console.log("Something went terribly wrong.");
      });

  return response;
  }

}

})();
