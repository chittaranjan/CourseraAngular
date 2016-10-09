(function () {
'use strict';

angular.module('ShoppingList')
.component('menyItem', {
  templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  bindings: {
    items: '<'
  }
});

})();
