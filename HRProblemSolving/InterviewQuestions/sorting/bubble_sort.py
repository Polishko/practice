def countSwaps(a):
    swaps = 0
    for i in range(0, len(a)):
        for j in range(0, len(a) - 1):
            if a[j] > a[j + 1]:
                a[j + 1], a[j] = a[j], a[j + 1]
                swaps += 1
                
# print(f"Array is sorted in {swaps} swaps.")
# print(f"First Element: {a[0]}")
# print(f"Last Element: {a[len(a) - 1]}")
