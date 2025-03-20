## **Graph & Tree Traversal Patterns (BFS & DFS)**

📌 **This guide covers**:
- **Graph traversal:** BFS & DFS (iterative & recursive)
- **Tree traversal:** Preorder, finding height, Lowest Common Ancestor (LCA)

---

## **1️⃣ Graph Traversal (BFS & DFS)**

### **🔹 Breadth-First Search (BFS)**
✅ **Explores neighbors before deeper levels** (level-order traversal).  
✅ **Uses a queue** (FIFO structure).  

```python
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = set([start])
    while queue:
        node = queue.popleft()  # Remove from front of queue
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```
✔ **Use Case:** Shortest path in an unweighted graph.

---

### **🔹 Depth-First Search (DFS - Iterative & Recursive)**
✅ **Explores as deep as possible before backtracking.**  
✅ **Uses a stack (LIFO) in iterative form** OR **recursion**.  

#### **🔸 Recursive DFS**
✅ **Pattern:** Recursive traversal with a `set` to track visited nodes.  
✅ **Use Case:** Used for connected component detection and full graph traversal.  

```python
def dfs(graph, node, visited=set()):
    if node not in visited:
        visited.add(node)
        for neighbor in graph[node]:
            dfs(graph, neighbor, visited)
```

#### **🔸 Iterative DFS (Using Stack)**
✅ **Pattern:** Uses an explicit stack instead of recursion.  
✅ **Use Case:** Useful when recursion depth might be too large.  

```python
def iterative_dfs(graph, start):
    stack = [start]
    visited = set()
    while stack:
        node = stack.pop()  # LIFO: Process last added element
        if node not in visited:
            visited.add(node)
            stack.extend(graph[node])  # Add all neighbors to stack
```

---

## **2️⃣ Recursion & DFS in Trees**

### **🔹 Find the Height of a Binary Tree**
✅ **Height = longest path from root to a leaf**  
✅ **Uses DFS (recursive)**  

```python
def height(root):
    if root is None:
        return -1  # Empty tree has height -1
    return max(height(root.left), height(root.right)) + 1
```
✔ **Pattern:** DFS Recursion  
✔ **Variations:** LCA, tree traversal  
✔ **Use Case:** Used to determine tree depth for balancing operations.  

---

### **🔹 Find the Lowest Common Ancestor (LCA)**
✅ **LCA = The lowest node that has both `p` and `q` as descendants.**  
✅ **Uses DFS recursion.**  
✅ **Use Case:** Helps in hierarchical data searches.  

```python
def lca(root, p, q):
    if not root or root == p or root == q:
        return root  # Found one of the nodes OR reached leaf

    left = lca(root.left, p, q)
    right = lca(root.right, p, q)

    return root if left and right else left or right
```

---

### **🔹 Preorder Traversal of a Binary Tree**
✅ **Preorder = Root → Left → Right**  
✅ **Use Case:** Used for tree reconstruction and serialization.  

```python
def preorder(root):
    return [root.info] + preorder(root.left) + preorder(root.right) if root else []
```

---

## **🚀 Final Summary: When to Use Each Algorithm?**

| **Algorithm**  | **Use Case** |
|---------------|-------------|
| **BFS** | Shortest path in an **unweighted** graph (e.g., social networks, mazes). |
| **DFS (Recursive)** | Tree traversal, connected components detection. |
| **DFS (Iterative - Stack)** | When recursion depth is too large. |
| **Binary Tree Height (DFS)** | Finding max depth of a tree. |
| **LCA (DFS)** | Finding closest common ancestor of two nodes in a tree. |
| **Preorder DFS** | Tree serialization, quick lookup of structure. |

---

### **📌 Want More?**
Would you like variations of **inorder/postorder traversal or iterative tree traversal** included? 🚀😊

