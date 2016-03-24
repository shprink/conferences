angular.module('finance', [])
    .factory('currencyConverter', function() {
        var usdToForeignRates = {
            USD: 1,
            EUR: 0.74,
            CNY: 6.09
        };

        return {
            currencies: ['USD', 'EUR', 'CNY'],
            convert: function(amount, inCurr, outCurr) {
                return amount * usdToForeignRates[outCurr] / usdToForeignRates[inCurr];
            }
        };
    });