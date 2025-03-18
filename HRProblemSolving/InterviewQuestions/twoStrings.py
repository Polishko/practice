def twoStrings(s1, s2):  
    if set(s1) & set(s2):
        return 'YES'
    
    return 'NO'

# finding the substrings
def twoStringsSubs(s1, s2):
    if len(s1) > len(s2):
        s1, s2 = s2, s1

    substrings = set()
    

    for i in range(len(s1)):
        for j in range(i + 1, len(s1) + 1):
            substrings.add(s1[i:j])

    common = set()
    for i in range(len(s2)):
        for j in range(i + 1, len(s2) + 1):
            sub_str = s1[i:j]
            
            if sub_str in substrings:
                common.add(sub_str)
                
    return list(common)

print(twoStringsSubs('a', 'ab'))

