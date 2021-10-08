/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
       var head=new ListNode(0);
    var temp=head;
    var sl1=0;
    var sl2=0;
    var temp1=l1;
    var temp2= l2;
    while(temp1!=null){
        sl1++;
        temp1=temp1.next;
    }
    while(temp2!=null){
        sl2++;
        temp2=temp2.next;
    }
    var i =0;
    var j =0;
    temp1=l1;
    temp2=l2;
    
    while(i<sl1 && j<sl2){
        
        if(temp1.val<temp2.val){
            i++;
            temp.next=new ListNode(temp1.val);
            temp=temp.next;
            temp1=temp1.next;
        }
        
        else if(temp1.val>=temp2.val){
            j++;
            temp.next=new ListNode(temp2.val);
            temp=temp.next;
            temp2=temp2.next;
        }
        
    }
    while(i<sl1){
        i++;
            temp.next=new ListNode(temp1.val);
            temp=temp.next;
            temp1=temp1.next;
    }
    
    while(j<sl2){
        j++;
            temp.next=new ListNode(temp2.val);
            temp=temp.next;
            temp2=temp2.next;
    }
    return head.next;
};