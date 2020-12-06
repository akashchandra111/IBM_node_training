var indianRsFactor = 67.5;

function roundTwoDecimals(amount) {
  return Math.round(amount * 100) / 100;
}

exports.inrToUsd = (rupees) => {
  return roundTwoDecimals(rupees / indianRsFactor);
}

exports.usdToInr = function(usd) {
  return roundTwoDecimals(usd * indianRsFactor);
}

