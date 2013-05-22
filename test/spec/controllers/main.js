'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('angularFiltersApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of numbers to the scope', function () {
    expect(scope.filtered.length).toBe(9);
  });
  it('should filter the list down to even numbers', function () {
    scope.filterNumbers('even');
    expect(scope.filtered.length).toBe(4);
    expect(scope.filtered[0]).toBe('2');
  });
  it('should filter the list down to odd numbers', function () {
    scope.filterNumbers('odd');
    expect(scope.filtered.length).toBe(5);
    expect(scope.filtered[0]).toBe('1');
  });
});
