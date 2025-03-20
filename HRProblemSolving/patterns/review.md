**HackerRank Python Quick Reference Guide**

### 1. **Python Built-in Functions**

- `sorted(iterable, key=lambda x: x, reverse=False)` – Sorts elements.
- `zip(*iterables)` – Combines multiple iterables.
- `enumerate(iterable, start=0)` – Iterates with index.
- `map(function, iterable)` – Applies function to iterable.
- `filter(function, iterable)` – Filters elements.
- `sum(iterable, start=0)` – Sums elements.
- `all(iterable)` – Returns True if all elements are True.
- `any(iterable)` – Returns True if any element is True.
- `max(iterable, key=lambda x: x)` – Finds max element.
- `min(iterable, key=lambda x: x)` – Finds min element.

### 2. **Data Structures & Common Methods**

#### **Lists**

- `append(value)`, `extend(iterable)`, `insert(index, value)`
- `remove(value)`, `pop(index)`, `index(value)`, `count(value)`
- `sort()`, `reverse()`

#### **Strings**

- `strip()`, `split(delimiter)`, `join(iterable)`, `replace(old, new)`
- `startswith(prefix)`, `endswith(suffix)`, `find(substring)`
- `isdigit()`, `isalpha()`, `isalnum()`, `lower()`, `upper()`

#### **Dictionaries**

- `get(key, default)`, `keys()`, `values()`, `items()`
- `pop(key, default)`, `update(dict)`, `setdefault(key, default)`

#### **Sets**

- `add(value)`, `remove(value)`, `discard(value)`, `pop()`
- `union(set2)`, `intersection(set2)`, `difference(set2)`
- `issubset(set2)`, `issuperset(set2)`

### 3. **List Comprehensions & Lambda Functions**

```python
squared = [x**2 for x in range(10) if x % 2 == 0]
squared_dict = {x: x**2 for x in range(10)}
lambda_func = lambda x: x**2
```

### 4. **Common Algorithms**

#### **Binary Search (O(log n))**

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

#### **Two Pointers Technique**

```python
def two_sum(nums, target):
    nums.sort()
    left, right = 0, len(nums) - 1
    while left < right:
        if nums[left] + nums[right] == target:
            return (left, right)
        elif nums[left] + nums[right] < target:
            left += 1
        else:
            right -= 1
    return None
```

### 5. **Graph Traversal (BFS & DFS)**

#### **Breadth-First Search (BFS)**

```python
from collections import deque

def bfs(graph, start):
    queue = deque([start])
    visited = set([start])
    while queue:
        node = queue.popleft()
        for neighbor in graph[node]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
```

#### **Depth-First Search (DFS)**

```python
def dfs(graph, node, visited=set()):
    if node not in visited:
        visited.add(node)
        for neighbor in graph[node]:
            dfs(graph, neighbor, visited)
```

### 6. **Dynamic Programming (Memoization & Tabulation)**

#### **Fibonacci with Memoization**

```python
from functools import lru_cache

@lru_cache(None)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)
```

#### **Knapsack Problem (DP Table)**

```python
def knapsack(weights, values, capacity):
    n = len(weights)
    dp = [[0] * (capacity + 1) for _ in range(n + 1)]
    
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i-1] <= w:
                dp[i][w] = max(dp[i-1][w], values[i-1] + dp[i-1][w-weights[i-1]])
            else:
                dp[i][w] = dp[i-1][w]
    return dp[n][capacity]
```

### 7. **Handling Large Numbers & Modulo Operations**

- `pow(base, exp, mod)` – Fast modular exponentiation.
- `(a * b) % c = [(a % c) * (b % c)] % c`

### 8. **Common Edge Cases to Consider**

- Empty inputs, single-element cases.
- Duplicates in data structures.
- Large inputs (consider O(n) vs. O(n^2)).
- Integer overflow (use modulo when needed).
- String casing issues (`lower()`, `upper()`).

### 9. **Debugging & Testing Tips**

- `print(vars(obj))` – Debug objects.
- `assert condition, "Error Message"` – Quick test.
- `try/except` for error handling.
- Use `timeit` for performance checking.

---

**Final Tips:**

- Read problem constraints carefully.
- Write out sample inputs/outputs before coding.
- Use list comprehensions for cleaner code.
- Avoid unnecessary loops in large input cases.
- If stuck, reframe the problem (brute force → optimized solution).

## **Sliding Window Technique (O(n))**
The **Sliding Window** technique is used to efficiently process subarrays or substrings, particularly for problems involving **fixed or variable window sizes**.

---

### **🟢 Fixed-Size Sliding Window**
Used when the **window size `k` is constant**.

```python
def max_sum_subarray(arr, k):
    max_sum = float('-inf')
    window_sum = sum(arr[:k])  # Initial window sum
    for i in range(len(arr) - k):
        window_sum = window_sum - arr[i] + arr[i + k]  # Slide the window
        max_sum = max(max_sum, window_sum)
    return max_sum

# ✅ Example Usage
print(max_sum_subarray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))  # Output: 24
```

**🔹 Used for:**
- Finding the **maximum sum of `k` consecutive elements**.
- Moving averages and sum-based problems.

---

### **🟢 Variable-Size Sliding Window**
Used when the **window size can change dynamically**.

```python
def min_subarray_with_sum(arr, target):
    left = 0
    window_sum = 0
    min_length = float('inf')

    for right in range(len(arr)):
        window_sum += arr[right]

        while window_sum >= target:  # Shrink the window from left
            min_length = min(min_length, right - left + 1)
            window_sum -= arr[left]
            left += 1

    return min_length if min_length != float('inf') else 0

# ✅ Example Usage
print(min_subarray_with_sum([2, 3, 1, 2, 4, 3], 7))  # Output: 2 (subarray [4,3])
```

**🔹 Used for:**
- Finding the **smallest subarray with a sum ≥ `target`**.
- Longest substring problems (e.g., **longest substring with distinct characters**).
- **Optimized searching in large datasets**.

---

### **🔍 Key Differences**
| Approach | Window Size | Best For |
|----------|------------|----------|
| **Fixed-Size Window** | Constant `k` | Problems where `k` is predefined (max sum of `k` elements) |
| **Variable-Size Window** | Dynamic | Problems where the window expands/shrinks based on conditions (min sum subarray) |

---

