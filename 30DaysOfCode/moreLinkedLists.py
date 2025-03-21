class Node:
    def __init__(self,data):
        self.data = data
        self.next = None 
class Solution: 
    def insert(self,head,data):
            p = Node(data)           
            if head==None:
                head=p
            elif head.next==None:
                head.next=p
            else:
                start=head
                while(start.next!=None):
                    start=start.next
                start.next=p
            return head  
    def display(self,head):
        current = head
        while current:
            print(current.data,end=' ')
            current = current.next
 
    def removeDuplicates(self,head):
        current = head
        
        while current and current.next:
            if current.data == current.next.data:
                current.next = current.next.next
            else:
                current = current.next
                          
        return head


somelist = [1, 2, 2, 3, 3, 4]
mylist= Solution()
T=len(somelist)
head=None
for i in range(T):
    data=somelist[i]
    head=mylist.insert(head,data)    
head=mylist.removeDuplicates(head)
mylist.display(head);
