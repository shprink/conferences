angular.module('invoice', ['finance'])
  .controller('InvoiceController', function($scope, currencyConverter) {
    $scope.qty = 1;
    $scope.cost = 2;
    $scope.inCurr = 'EUR';
    $scope.currencies = currencyConverter.currencies;

    $scope.total = function total(outCurr) {
      return currencyConverter.convert($scope.qty * $scope.cost, $scope.inCurr, outCurr);
    };
    $scope.pay = function pay() {
      window.alert("Thanks!");
    };
  });