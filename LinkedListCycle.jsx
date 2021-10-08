/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var slowPointer = head;
    var fastPointer = head;
    while(fastPointer != null && fastPointer.next != null && fastPointer.val != -1){
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if(fastPointer==slowPointer){
            return true;
        }
    }
    return false;
};