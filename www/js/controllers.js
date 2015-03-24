angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.factory('localStorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])


.controller('RecordCtrl', ['$scope', 'localStorage', function ($scope, localStorage) {
  var vm = this;
  vm.title = 'Foosball';

  vm.wins = localStorage.get('wins') > 0 ? parseInt(localStorage.get('wins')) : 0;
  vm.losses = localStorage.get('losses') > 0 ? parseInt(localStorage.get('losses')) : 0;

  vm.totalGames = vm.wins + vm.losses;
  vm.winRatio = (vm.wins / vm.totalGames).toFixed(2) * 100;

  vm.addWin = function() {
    vm.wins++;
    vm.totalGames = vm.wins + vm.losses;
    vm.winRatio = (vm.wins / vm.totalGames).toFixed(2) * 100;
    localStorage.set('wins', vm.wins);
  };

  vm.addLoss = function() {
    vm.losses++;
    vm.totalGames = vm.wins + vm.losses;
    vm.winRatio = (vm.wins / vm.totalGames).toFixed(2) * 100;
    localStorage.set('losses', vm.losses);
  };

  vm.decrementWin = function() {
    // total games still needs to be the same
  };

  vm.decrementWin = function() {
    // total games still needs to be the same
  };

}]);
