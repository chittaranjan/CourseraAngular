(function () {
'use strict';

angular.module('ShoppingList')
.controller('ItemDetailController', ItemDetailController);


ItemDetailController.$inject = ['ShoppingListService', 'items'];
function ItemDetailController($ShoppingListService, items) {
  var itemList = this;
  var menuItems = items.data['menu_items'];
  itemList.items = menuItems;
}

})();
