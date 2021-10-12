class Solution(object):
    def backspaceCompare(self, s, t):
        solution = Solution()
        return solution.deleteBackspaces(s) == solution.deleteBackspaces(t)

    def deleteBackspaces(self, s):
        deleteIndexes = 0
        newS = ""
        sI = len(s)-1
        while sI >= 0:
            if s[sI] == "#": 
                deleteIndexes += 1        
            else: 
                if deleteIndexes > 0:
                    deleteIndexes -= 1
                else:
                    newS += s[sI]
            sI-=1
        return newS

