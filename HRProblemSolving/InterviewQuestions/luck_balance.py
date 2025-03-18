def luckBalance(k, contests):
    contests.sort(key=lambda x: -x[0])

    sum = 0
    for contest in contests:
        if contest[1] == 1 and k > 0:
            sum += contest[0]
            k -= 1
        elif contest[1] == 1 and k == 0:
            sum -= contest[0]
        else:
            sum += contest[0]
    
    return sum
        

# k = 3
# contests = [[5, 1], [2, 1], [1, 1], [8, 1], [10, 0], [5, 0]]
# print(luckBalance(k, contests))
