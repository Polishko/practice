#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'getMax' function below.
#
# The function is expected to return an INTEGER_ARRAY.
# The function accepts STRING_ARRAY operations as parameter.
#

def getMax(operations):
    # Write your code here
    sequence = []
    max_nums = []
    results = []
    
    for op in operations:
        type_op, *rest = op.split()
        x = int(rest[0]) if rest else None
        
        if type_op == '1':
            sequence.append(x)
            if not max_nums or x >= max_nums[-1]:
                max_nums.append(x)
        elif type_op == '2':
            if sequence:
                popped = sequence.pop()
                if popped == max_nums[-1]:
                    max_nums.pop()
        elif type_op == '3':
            if max_nums:
                results.append(max_nums[-1])
            
    return results


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    n = int(input().strip())

    ops = []

    for _ in range(n):
        ops_item = input()
        ops.append(ops_item)

    res = getMax(ops)

    fptr.write('\n'.join(map(str, res)))
    fptr.write('\n')

    fptr.close()
