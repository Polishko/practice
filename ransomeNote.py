# optimized
def checkMagazine(magazine, note):
    magazineDict = {}

    if len(note) > len(magazine):
        print('No')
        return
    
    for word in magazine:
        magazineDict[word] = magazineDict.get(word, 0) + 1

    for word in note:
        if magazineDict.get(word, 0) == 0:
            print('No')
            return
        else:
            magazineDict[word] -= 1
            
    print('Yes')

# magazine = ['give', 'me', 'one', 'grand', 'today', 'night']
# note = ['give', 'one', 'grand', 'today']

# checkMagazine(magazine, note)


# def checkMagazine(magazine, note):
#     if len(note) > len(magazine):
#         print('No')
#         return
    
#     for word in note:
#         if word not in magazine:
#             print('No')
#             return
#         else:
#             magazine.remove(word)
            
#     print('Yes')