var app = angular.module('bieg', []);

app.directive('ngModals', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'templates/modals.html'
}});

app.directive('ngMobile', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'templates/mobile.html'
}});

app.directive('ngClients', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'templates/clients.html'
}});

app.directive('ngWork', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'templates/work.html'
}});

  // app.directive('ngAbout', function() {

  //   function aboutController() {};

  //   var directive = {
  //     restrict: 'EA',
  //     scope: {},
  //     bindToController: {
  //       ngAbout : '@'
  //     },
  //     transclude: true,
  //     replace: true,
  //     controller: aboutController(),
  //     controllerAs: 'ngAbout',
  //     templateUrl: 'templates/about-him.html'
  //   };
  // });



app.directive('ngAboutHim', function() {
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: 'templates/about-him.html'
}});
