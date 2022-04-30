class Solution(object):
    def threeSum(self, nums):
        nums = sorted(nums)
        ret = []
        for i, n1 in enumerate(nums[:-2]):
            if n1 > 0:
                break
            if i > 0 and nums[i] == nums[i-1]:
                continue
            l, r = i+1, len(nums)-1
            while l < r:
                n2, n3 = nums[l], nums[r]
                total = n1 + n2 + n3
                if total < 0 or (i + 1 < l and nums[l] == nums[l-1]):
                    l += 1
                elif total > 0 or (r < len(nums)-1 and nums[r] == nums[r+1]):
                    r -= 1
                else:
                    ret.append([n1, n2, n3])
                    l += 1
                    r -= 1
        return ret
