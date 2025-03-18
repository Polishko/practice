def makeAnagram(a, b):
    letters = {}
    for i  in range(97, 123):
        letters[chr(i)] = {'a': 0, 'b': 0} 

    for l in a:
        letters[l]['a'] += 1

    for l in b:
        if letters[l]['a']:
            letters[l]['a'] -= 1
        else:
            letters[l]['b'] += 1

    deletions = 0
    for key in letters.keys():
        deletions += (letters[key]['a'] + letters[key]['b'])

    return deletions

# optimal
# def makeAnagram(a, b):
#     # Step 1: Count occurrences manually
#     count_a = {}
#     count_b = {}

#     for char in a:
#         count_a[char] = count_a.get(char, 0) + 1  # Default to 0 if key doesn’t exist
    
#     for char in b:
#         count_b[char] = count_b.get(char, 0) + 1  # Default to 0 if key doesn’t exist

#     # Step 2: Calculate total deletions
#     unique_chars = set(a) | set(b)  # Union of characters in both strings
#     deletions = sum(abs(count_a.get(ch, 0) - count_b.get(ch, 0)) for ch in unique_chars)

#     return deletions




# a = 'fcrxzwscanmligyxyvym'
# b = 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'

# print(makeAnagram(a, b))