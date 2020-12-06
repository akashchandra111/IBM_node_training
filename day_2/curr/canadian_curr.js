var Currency = function(canadianDollar) {
    this.canadianDollar = canadianDollar;
};
Currency.prototype.roundTwoDecimals = function(amount) {
    return Math.round(amount * 100) / 100;
};
Currency.prototype.canadianToUsd = function(canadian) {
    return this.roundTwoDecimals(canadian * this.canadianDollar);
};
Currency.prototype.UsdToCanadian = function(usd) {
    return this.roundTwoDecimals(usd / this.canadianDollar);
};

module.exports = Currency;
