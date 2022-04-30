/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
    var maximumDifferenceSoFar = 0;
    for(var i = 0; i < nums.length-1; i++){
        for(var j = i+1; j < nums.length; j++){
            if(nums[j]-nums[i] > maximumDifferenceSoFar) maximumDifferenceSoFar = nums[j]-nums[i];
        }
    }
    return maximumDifferenceSoFar != 0 ? maximumDifferenceSoFar : -1;
};