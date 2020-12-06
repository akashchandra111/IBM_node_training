var currencyI = require('./indian_curr');
var Currency = require('./canadian_curr');

console.log("USD 100 equals to INR:", currencyI.usdToInr(100) );
console.log("INR 100 equals to USD:", currencyI.inrToUsd(100) );

var canadianDollar = 0.76;
var currencyC = new Currency(canadianDollar);
console.log("CAD 100 equals to USD:", currencyC.canadianToUsd(100));
