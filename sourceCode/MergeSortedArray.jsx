/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.splice(m,n);
    for(var i = 0; i < n; i++){
        console.log("looking at " + nums2[i]);
        for(var j = 0; j < m+n; j++){
            if(nums2[i] <= nums1[j] || nums1[j]==null){
                console.log("adding " + nums2[i]);
                nums1.splice(j,0,nums2[i]);
                break;
            }
        }
    }
    console.log(nums1);
};

console.log("nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3, result = ");
merge([1,2,3,0,0,0], 3, [2,5,6], 3);

console.log("nums1 = [1], m = 1, nums2 = [], n = 0, result = ");
merge([1], 1, [], 0);

console.log("nums1 = [0], m = 0, nums2 = [1], n = 1, result = ");
merge([0], 0, [1], 1);





