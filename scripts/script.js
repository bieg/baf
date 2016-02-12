
(function(angular) {
  'use strict';
// declare a module
var myApp = angular.module('myApp', ['ngRoute','css/app.css']);

// configure the module.
// in this example we will create a greeting filter
myApp.filter('greet', function() {
 return function(name) {
    return 'Hello, ' + name + '!';
  };
});
})(window.angular);

