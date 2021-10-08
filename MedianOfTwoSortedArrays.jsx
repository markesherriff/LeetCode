/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    var mergedArray = [];
    var n1I = 0;
    var m = nums1.length;
    var n2I = 0;
    var n = nums2.length;
    while(n1I < m && n2I < n){
        if(n1I==m){
            mergedArray.push(nums2[n2I]);
            n2I++;
        }else if(n2I==n){
            mergedArray.push(nums1[n1I]);
            n1I++;
        }else if(nums1[n1I] <= nums2[n2I]){
            mergedArray.push(nums1[n1I]);
            n1I++;
        }else{
            mergedArray.push(nums2[n2I]);
            n2I++;
        }
    }
    var mid = (m+n)/2;
    
    if(mid != Math.floor(mid))
        return mergedArray[Math.floor(mid)] / mergedArray[Math.floor(mid+1)];

    return mergedArray[mid];
};
