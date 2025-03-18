# optimized
def minimumAbsoluteDifference(arr):
    arr.sort()

    min_diff = float('inf')
    for i in range(0, len(arr) - 1):
        min_diff = min(abs(arr[i] - arr[i + 1]), min_diff)

    return min_diff



# def minimumAbsoluteDifference(arr):
#     min_diff = float('inf')
    
#     for i in range(0, len(arr) - 1):
#         for j in range(i + 1, len(arr)):
#             min_diff = min(abs(arr[i] - arr[j]), min_diff)
            
#     return min_diff
