/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    var maxProfit = 0;
    var buy = prices[0];
    for (var i = 1; i < prices.length; i++) {
        var curr = prices[i];
        
        // check if its lower then bought stock
        if (curr < buy) {
            buy = curr;
            continue;
        }
        
        maxProfit = Math.max(maxProfit, (curr - buy));
    }
    
    return maxProfit;
};

console.log(maxProfit([7,1,5,3,6,4]));