# optimum
def alternatingCharacters(s):
    deletions = 0

    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            deletions += 1
    
    return deletions

# def alternatingCharacters(s):
#     deletions = 0
#     sArray = [char for char in s]
    
#     for i in range(len(sArray)):
#         while i < len(sArray) - 1:
#             current = sArray[i]
#             next = sArray[i + 1]
#             if current != next:
#                 break
#             sArray.remove(next)
#             deletions += 1

            
#     return deletions

print(alternatingCharacters('AAABBB'))
