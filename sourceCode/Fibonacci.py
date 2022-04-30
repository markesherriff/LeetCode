class Solution(object):
    def fib(self, n):
        result = [0 for i in range(n)] 
        index = 0
        while index <= n:
            if index < 2:
                result[index] = index
            else:
                result[index] = result[index-2] + result[index-1]
        return result[n]