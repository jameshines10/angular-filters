'use strict';

angular.module('angularFiltersApp')
  .controller('MainCtrl', ['$filter', '$scope', function ($filter, $scope) {
    $scope.filtered = [];
    $scope.numbers = [
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9'
    ];

    $scope.filtered = $scope.numbers;

    $scope.filterNumbers = function(parity){
        var filtered = [];

        if(parity !== 'all'){
          filtered = $filter('filter')($scope.numbers, function(number){
            if(parity === 'even' && parseInt(number, 10) % 2 === 0){
              return number;
            }

            if(parity === 'odd' && parseInt(number, 10) % 2 !== 0){
              return number;
            }
          });

          $scope.filtered = filtered;
        }else{
          $scope.filtered = $scope.numbers;
        }
      };

  }]);
