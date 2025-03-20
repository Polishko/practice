# **Bitwise Operations Cheat Sheet**

## **1️⃣ Introduction to Bitwise Operations**
Bitwise operators operate at the **binary level** and perform operations on **individual bits** of integers.

| Operator | Name | Description |
|----------|------|-------------|
| `&` | AND | 1 if both bits are 1, else 0 |
| `|` | OR | 1 if at least one bit is 1 |
| `^` | XOR | 1 if bits are different, else 0 |
| `~` | NOT | Inverts all bits (bitwise negation) |
| `<<` | Left Shift | Shifts bits to the left, filling with 0s |
| `>>` | Right Shift | Shifts bits to the right, keeping sign bit |

---

## **2️⃣ Bitwise AND (`&`)
✅ Sets each bit to `1` if both bits are `1`**
```python
x = 5  # 0101
y = 3  # 0011
print(x & y)  # 0001 → 1
```

✔ **Use Case:** Checking if a number is even/odd
```python
if num & 1 == 0:
    print("Even")
else:
    print("Odd")
```

---

## **3️⃣ Bitwise OR (`|`)
✅ Sets each bit to `1` if at least one bit is `1`**
```python
x = 5  # 0101
y = 3  # 0011
print(x | y)  # 0111 → 7
```

✔ **Use Case:** Turning bits ON
```python
flags = 0b1010  # Binary 1010
new_flags = flags | 0b0100  # Turns ON the 3rd bit
print(bin(new_flags))  # Output: 0b1110
```

---

## **4️⃣ Bitwise XOR (`^`)
✅ Sets each bit to `1` if bits are different**
```python
x = 5  # 0101
y = 3  # 0011
print(x ^ y)  # 0110 → 6
```
✔ **Use Case:** Swapping two numbers without temp variable
```python
a, b = 5, 7
a = a ^ b
b = a ^ b
a = a ^ b
print(a, b)  # Output: 7, 5
```

---

## **5️⃣ Bitwise NOT (`~`)
✅ Inverts all bits**
```python
x = 5  #  0000 0101
print(~x)  # 1111 1010 (Two’s complement representation)
```
✔ **Use Case:** Finding `-x - 1`
```python
x = 5
print(~x)  # Output: -6 (as Python uses signed integers)
```

---

## **6️⃣ Left Shift (`<<`)
✅ Shifts bits left, filling with 0s**
```python
x = 5  # 0000 0101
print(x << 1)  # 0000 1010 → 10
```
✔ **Use Case:** Fast multiplication by powers of 2
```python
x = 5
print(x << 3)  # 5 * 2^3 = 40
```

---

## **7️⃣ Right Shift (`>>`)
✅ Shifts bits right, keeping sign bit (for signed integers)**
```python
x = 8  # 0000 1000
print(x >> 1)  # 0000 0100 → 4
```
✔ **Use Case:** Fast division by powers of 2
```python
x = 40
print(x >> 3)  # 40 / 2^3 = 5
```

---

## **8️⃣ Masking & Checking Bits**
✔ **Use Case:** Checking if the 3rd bit (from right) is set
```python
num = 0b1010  # Binary 1010
mask = 0b0100  # Mask with 3rd bit set
print(bool(num & mask))  # True, since 3rd bit is 1
```

---

## **9️⃣ Creating a Bitmask (`1 << n`)
✅ Generates a mask with only the `n`-th bit set**
```python
mask = (1 << 4)  # 0001 0000 → 16
```
✔ **Use Case:** Flipping bits in an integer
```python
def flippingBits(n, bit_length=32):
    mask = (1 << bit_length) - 1  # Creates a mask of 1s
    return n ^ mask  # XOR to flip bits
```

---

## **🔟 Summary Table**
| Operation | Effect | Example |
|-----------|--------|---------|
| `x & y` | AND | `5 & 3 → 1` |
| `x | y` | OR | `5 | 3 → 7` |
| `x ^ y` | XOR | `5 ^ 3 → 6` |
| `~x` | NOT | `~5 → -6` |
| `x << n` | Left Shift | `5 << 1 → 10` |
| `x >> n` | Right Shift | `8 >> 1 → 4` |
| `1 << n` | Creates bitmask | `1 << 4 → 16` |
| `x ^ ((1 << n) - 1)` | Flips `n` bits | `5 ^ 15 → 10` |

🚀 **Now you're ready for bitwise interview questions!** 🚀

