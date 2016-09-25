/*
 app.js
 AngularJS Coursera  Module 2 Solution
*/
!function(){"use strict";function t(t,e){var n=this;n.items=t.getToBuyLItemsList(),n.removeFromToBuyList=function(o){e.addToAlreadyBoughtList(t.getItemAtIndex(o)),t.removeItem(o),0===t.getItemCount()&&(n.emptyMessage="Everything is bought!")}}function e(t){var e=this;e.items=t.getAlreadyBoughtList(),0===t.getItemCount()&&(e.emptyMessage="Nothing bought yet")}function n(){var t=this;t.$get=function(){var t=new u;return t}}function o(){var t=this;t.$get=function(){var t=new i;return t}}function i(){var t=this,e=[{name:"Cookies",quantity:5},{name:"Biscuits",quantity:6},{name:"Chocolates",quantity:8},{name:"Chips",quantity:12},{name:"Soft Drinks",quantity:"10 bottles"}];t.getItemCount=function(){return e.length},t.removeItem=function(t){e.splice(t,1),console.log(e)},t.getItemAtIndex=function(t){return e[t]},t.getToBuyLItemsList=function(){return e}}function u(){var t=this,e=[];t.addToAlreadyBoughtList=function(t){e.push(t)},t.getItemCount=function(){return e.length},t.getAlreadyBoughtList=function(){return e}}angular.module("ShoppingListCheckOff",[]).controller("ToBuyShoppingController",t).controller("AlreadyBoughtListController",e).provider("AlreadyBoughtList",n).provider("ShoppingList",o),t.$inject=["ShoppingList","AlreadyBoughtList"],e.$inject=["AlreadyBoughtList"]}();
