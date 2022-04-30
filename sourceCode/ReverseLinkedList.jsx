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
var reverseList = function(head) {
    //get all values into a list
    //then input them reversed into a new linked list
    var valueList = [];
    while(head != null){
        valueList.push(head.val);
        head = head.next;
    }

    var resultHead = new ListNode(0);
    var resultPointer = resultHead;
    for(var i = valueList.length-1; i >= 0; i--){
        resultPointer.next = new ListNode(valueList[i]);
        resultPointer = resultPointer.next;
    }
    return resultHead;
};