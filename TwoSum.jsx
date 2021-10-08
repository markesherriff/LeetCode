/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //a+b=target
    for(var a = 0; a < nums.length; a++){
        for(var b = 0; b < nums.length; b++){
            if(a != b && nums[a]+nums[b]==target) return [a,b];
        }
    }
    return 0;
};

console.log("nums = [2,7,11,15], target = 9, result = " + twoSum([2,7,11,15], 9));

console.log("nums = [3,2,4], target = 6, result = " + twoSum([3,2,4], 6));

console.log("nums = [3,3], target = 6, result = " + twoSum([3,3], 6));