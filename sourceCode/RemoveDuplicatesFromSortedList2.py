class Solution(object):
    def deleteDuplicates(self, head):
        ##look for duplicates then add to array
        ##iterate through array and make new list
        dupsArray = []
        fullArray = []
        pointer = head
        while pointer != None:
            if(fullArray.__contains__(pointer.val)): dupsArray.append(pointer.val)
            else: fullArray.append(pointer.val)
            pointer = pointer.next
        
        newHead = ListNode(0)
        newPointer = newHead
        i = 0
        while i < len(fullArray):
            if(dupsArray.__contains__(fullArray[i]) == False):
                newPointer.next = ListNode(fullArray[i])
                newPointer = newPointer.next
            i+=1
        return newHead.next

        

