
//Javascript process is more efficient only loops through once
prices = [10, 15, 5, 7, 11, 4];
var getMaxProfit = function(prices) {
  var maxProfit = 0;
  var min = prices[0];

  for (var i=0; i<prices.length; i++) {
    min = Math.min(min, prices[i]);
    maxProfit = Math.max(maxProfit, prices[i]-min);
  }
  return maxProfit;
};



//Ruby process less efficient loops through twice
max_sell = 0
min_buy = 0
max_profit = 0
prices.each.with_index do |diff_price, index|
  prices[index-1].each do |diff_price|
    if (max_profit < (diff_price - individual_price)
    max_profit = individual_price - diff_price
    max_sell = individual_price
    min_buy = diff_price
    end
  end
end
