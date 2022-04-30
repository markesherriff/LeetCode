/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target, low, high) {
    low = low===undefined ? 0 : low;
    high = high===undefined ? nums.length-1 : high;
    var mid = Math.round((high+low) / 2);
    if (low > high) {
        return -1;
    }else if(nums[mid]==target){
        return mid;
    }else if(nums[mid] > target){
        return search(nums, target, low, mid-1);
    }else{
        return search(nums, target, mid+1, high);
    }
};

console.log("nums = [-1,0,3,5,9,12], target = 9, result = " + search([-1,0,3,5,9,12], 9));