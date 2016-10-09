(function () {
'use strict';

angular.module('ShoppingList')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as categories',
    resolve: {
      items: ['ShoppingListService', function (ShoppingListService) {
        return ShoppingListService.getMenuCategories();
      }]
    }
  })

  .state('categories.itemList', {
    url: '/items/{short_name}',
    templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
    controller: "ItemDetailController as itemList",
    resolve: {
      items: ['$stateParams', 'ShoppingListService', function ($stateParams, ShoppingListService) {
        return ShoppingListService.getItemsForCategory($stateParams.short_name);
      }]
    }
  });

}

})();
