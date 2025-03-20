## **🚀 Internship Algorithm Practice Problems**

These are **medium-easy problems** focusing on common patterns that may appear in coding tests. Try solving them first, and if stuck, focus on understanding the approach.

---

### **1️⃣ Arrays & Two Pointers**

✅ **Find the two numbers in a sorted array that sum to a target**

```python
def two_sum_sorted(arr, target):
    left, right = 0, len(arr) - 1
    while left < right:
        total = arr[left] + arr[right]
        if total == target:
            return (left, right)  # Indices of the numbers
        elif total < target:
            left += 1
        else:
            right -= 1
    return None
```

✔ **Pattern:** Two Pointers  
✔ **Variations:** Subarray sum, checking for duplicates

✅ **Find a subarray with a given sum**

```python
def subarray_sum(arr, target):
    left, curr_sum = 0, 0
    for right in range(len(arr)):
        curr_sum += arr[right]
        while curr_sum > target:
            curr_sum -= arr[left]
            left += 1
        if curr_sum == target:
            return (left, right)
    return None
```

✅ **Find duplicate numbers in an array**

```python
def find_duplicates(arr):
    seen, duplicates = set(), set()
    for num in arr:
        if num in seen:
            duplicates.add(num)
        seen.add(num)
    return list(duplicates)
```

---

### **2️⃣ Sliding Window**

✅ **Find the maximum sum of any subarray of size `k`**

```python
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    window_sum = sum(arr[:k])  # First window
    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]  # Slide
        max_sum = max(max_sum, window_sum)
    return max_sum
```

✔ **Pattern:** Sliding Window  
✔ **Variations:** Find min/max window sum, longest substring problems

✅ **Find the longest substring with distinct characters**

```python
def longest_unique_substring(s):
    char_index, left, max_length = {}, 0, 0
    for right in range(len(s)):
        if s[right] in char_index and char_index[s[right]] >= left:
            left = char_index[s[right]] + 1
        char_index[s[right]] = right
        max_length = max(max_length, right - left + 1)
    return max_length
```

---

### **3️⃣ Recursion & DFS**

✅ **Find the height of a binary tree**

```python
def height(root):
    if root is None:
        return -1  # Empty tree has height -1
    return max(height(root.left), height(root.right)) + 1
```

✔ **Pattern:** DFS Recursion  
✔ **Variations:** LCA, tree traversal

✅ **Find the Lowest Common Ancestor (LCA) of two nodes**

```python
def lca(root, p, q):
    if not root or root == p or root == q:
        return root
    left = lca(root.left, p, q)
    right = lca(root.right, p, q)
    return root if left and right else left or right
```
**LCA if it's not guaranteed that the two nodes exist**
```python
def find_lca(root, p, q):
    def lca(root, p, q):
        if not root or root == p or root == q:
            return root
        left = lca(root.left, p, q)
        right = lca(root.right, p, q)
        return root if left and right else left or right

    # Step 1: Find LCA candidate
    lca_candidate = lca(root, p, q)

    # Step 2: Verify both p and q exist in the tree
    def exists(root, target):
        if not root:
            return False
        if root == target:
            return True
        return exists(root.left, target) or exists(root.right, target)

    # If both p and q exist, return LCA. Otherwise, return None.
    return lca_candidate if exists(root, p) and exists(root, q) else None
```

✅ **Preorder Traversal of a Binary Tree**

```python
def preorder(root):
    return [root.info] + preorder(root.left) + preorder(root.right) if root else []
```

---

### **4️⃣ String Manipulation**

✅ **Check if a string is a palindrome (ignoring non-alphanumeric characters)**

```python
def is_palindrome(s):
    s = ''.join(c.lower() for c in s if c.isalnum())  # Remove spaces and symbols
    return s == s[::-1]  # Check if reversed string matches
```

✔ **Pattern:** Two Pointers / String Processing  
✔ **Variations:** Longest palindromic substring, anagram checking

✅ **Find the longest palindromic substring**

```python
def longest_palindrome(s):
    res = ""
    for i in range(len(s)):
        for j in range(i, len(s)):
            if s[i:j+1] == s[i:j+1][::-1] and (j - i + 1) > len(res):
                res = s[i:j+1]
    return res
```

✅ **Check if two strings are anagrams**

```python
def is_anagram(s1, s2):
    return sorted(s1) == sorted(s2)
```

---

### **5️⃣ Binary Search**

✅ **Find target element in a sorted array**

```python
def binary_search(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        elif arr[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1
```

✔ **Pattern:** Binary Search  
✔ **Variations:** Find first/last occurrence, search in rotated array

✅ **Search in a rotated sorted array**

```python
def search_rotated(arr, target):
    left, right = 0, len(arr) - 1
    while left <= right:
        mid = (left + right) // 2
        if arr[mid] == target:
            return mid
        if arr[left] <= arr[mid]:
            if arr[left] <= target < arr[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if arr[mid] < target <= arr[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1
```

---

## **🔥 Strategy for Test Day**

1. **Today:**

   - Solve these problems quickly.
   - Focus on recognizing the **pattern** behind each problem.

2. **Tomorrow, before the test:**

   - Review the solutions you struggled with.
   - Don’t learn completely new topics—**reinforce what you already understand.**

3. **During the test:**
   - Approach each problem systematically.
   - **Most candidates struggle**, so structured thinking matters more than a perfect score.

---

🚀 **Good luck! You got this!** 😊
