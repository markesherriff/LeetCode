/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

var intersect = function(nums1, nums2) {
    var result = [];
    for(var n1I = 0; n1I < nums1.length; n1I++){
        if(nums2.includes(nums1[n1I])){
            result.push(nums1[n1I]);
            var indexInNums2 = nums2.indexOf(nums1[n1I]);
            nums2.splice(indexInNums2, 1);
        }
    }
    return result;
}

console.log("nums1 = [1,2,2,1], nums2 = [2,2], result = " + intersect([1,2,2,1], [2,2]));

console.log("nums1 = [4,9,5], nums2 = [9,4,9,8,4], result = " + intersect([4,9,5], [9,4,9,8,4]));

console.log("nums1 = [1], nums2 = [1,2], result = " + intersect([1], [1,2]));

console.log("nums1 = [1,2], nums2 = [1,1], result = " + intersect([1,2], [1,1]));

console.log("nums1 = [2,1], nums2 = [1,2], result = " + intersect([2,1], [1,2]));

