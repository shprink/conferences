angular.module('invoice', [])
  .controller('InvoiceController', function($scope) {
    $scope.qty = 1;
    $scope.cost = 2;
    $scope.inCurr = 'EUR';
    $scope.currencies = ['USD', 'EUR', 'CNY'];
    $scope.usdToForeignRates = {
      USD: 1,
      EUR: 0.74,
      CNY: 6.09
    };

    $scope.total = function total(outCurr) {
      return $scope.convertCurrency($scope.qty * $scope.cost, $scope.inCurr, outCurr);
    };
    $scope.convertCurrency = function convertCurrency(amount, inCurr, outCurr) {
      return amount * $scope.usdToForeignRates[outCurr] / $scope.usdToForeignRates[inCurr];
    };
    $scope.pay = function pay() {
      window.alert("Thanks!");
    };
  });