/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    var visitedValues = [];
    var rHead = new LinkedList(0);
    var rPointer = rHead;

    while(head != null){
        if(visitedValues.includes(head.val)==false){
            visitedValues.push(head.val);
            rPointer.next = new LinkedList(head.val);
            rPointer = rPointer.next;
        }
        head = head.next;
    }
    return rHead.next;
};