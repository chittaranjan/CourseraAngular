(function () {
'use strict';

angular.module('MenuCategoriesApp', [])
.controller('MenuCategoriesController', MenuCategoriesController)
.service('MenuCategoriesService', MenuCategoriesService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


function FoundItemsDirective() {
  return {
           templateUrl: 'foundItems.html',
           scope: {
              items: '<',
              onRemove: '&'
            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'menu',
            bindToController: true
        };
}


function FoundItemsDirectiveLink(scope, element, attrs, controller) {


}

function FoundItemsDirectiveController() {
  var menu = this;
}

MenuCategoriesController.$inject = ['MenuCategoriesService'];
function MenuCategoriesController(MenuCategoriesService) {
  var menu = this;

  menu.searchTerm = "";
  menu.searchResult = "";
  menu.searchItems = function() {
    menu.found = [];
    menu.searchTerm = menu.searchTerm.replace(/\s+/g,' ').trim();

    if (menu.searchTerm==='') {
      menu.searchResult = "Nothing found";
      return;
    }
    var promise = MenuCategoriesService.getMenuCategories();
    menu.searchResult = "Looking for Menu Items.....";
    menu.isSearchCompleted = false;
    promise.then(function (response) {

      var menuResponse = response.data;
      if (typeof(menuResponse) !== undefined && menuResponse !== null ) {
        var menuItems = menuResponse['menu_items'];
        menuItems.forEach(function(menuItem) {
          var description = menuItem['description'];

          if (description.indexOf(menu.searchTerm) > 0) {
            menu.found.push(menuItem);
          }
        });
        menu.isSearchCompleted = true;
        if (menu.found.length <=0) {
          menu.searchResult = "Nothing found";
        } else {
          menu.searchResult = "";
        }
      }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  };

menu.removeItem = function (itemIndex) {
  console.log("'this' is: ", this);
  menu.found.splice(itemIndex, 1);
};

}


MenuCategoriesService.$inject = ['$http', 'ApiBasePath']
function MenuCategoriesService($http, ApiBasePath) {
  var service = this;

  service.getMenuCategories = function () {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });

    return response;
  };

}

})();
