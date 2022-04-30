/**
 * LeetCode problem .217 from DataStructure 1
 * @param {number[]} nums
 * @return {boolean}
 * 
 */
var containsDuplicate = function(nums) {
    for(var i = 0; i < nums.length; i++)
    {
        var num = nums[i];
        nums.slice(0,1);
        if(nums.indexOf(num) != i) return true;
    }
    return false;
};

console.log("set: [1,2,3,1]," + " result: " + containsDuplicate([1,2,3,1]));
console.log("set: [1,2,3,4]," + " result: " + containsDuplicate([1,2,3,4]));
console.log("set: [1,1,1,3,3,4,3,2,4,2]," + " result: " + containsDuplicate([1,1,1,3,3,4,3,2,4,2]));
