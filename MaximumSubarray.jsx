/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var max_so_far = nums[0];
    var max_ending_here = 0;
    for (var i = 0; i < nums.length; i++)
    {
        max_ending_here += nums[i];
        
        max_so_far = Math.max(max_so_far, max_ending_here);

        if( max_ending_here < 0 )
            max_ending_here = 0;
    }
   return max_so_far;
}

console.log(maxSubArray([-2, -1]));