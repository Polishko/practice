import sys

class Node:
    def __init__(self,data):
        self.right=self.left=None
        self.data = data
class Solution:
    def insert(self,root,data):
        if root==None:
            return Node(data)
        else:
            if data<=root.data:
                cur=self.insert(root.left,data)
                root.left=cur
            else:
                cur=self.insert(root.right,data)
                root.right=cur
        return root

# Solution start
    def levelOrder(self,root):
        queue_arr = [root]
        
        while queue_arr:
            curr = queue_arr.pop(0)
            print(curr.data, end=" ")
            
            if curr.left:
                queue_arr.append(curr.left)
            if curr.right:
                queue_arr.append(curr.right)
# Solution end

T=int(input())
myTree=Solution()
root=None
for i in range(T):
    data=int(input())
    root=myTree.insert(root,data)
myTree.levelOrder(root)
