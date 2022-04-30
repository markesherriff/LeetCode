/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    var headPointer = head;
    var resultHead = new ListNode(0);
    var resultPointer = resultHead;
    while(headPointer != null){
        if(val != headPointer.val){
            resultPointer.next = new ListNode(headPointer.val);
            resultPointer = resultPointer.next;
        }
        headPointer = headPointer.next;
    }
    return resultHead.next;
};