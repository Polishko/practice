def maximumToys(prices, k):
    prices.sort()
    
    count = 0
    for item in prices:
        if k >= item:
            k -= item
            count += 1
        else:
            return count