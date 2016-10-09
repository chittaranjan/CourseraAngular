(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['$stateParams', 'ShoppingListService', 'items'];
function ItemDetailController($stateParams, ShoppingListService, items) {
  var itemList = this;
  var shortName = $stateParams.short_name;
  var menuItems = items.data['menu_items'];

  console.log(shortName);

  itemList.items = [];
  menuItems.forEach(function(menuItem) {
    if (menuItem['short_name'].indexOf(shortName) != -1) {
      console.log(menuItem);

      itemList.items.push(menuItem);
    }
  });
  console.log(itemList.items);
}

})();
