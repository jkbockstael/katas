# Test Score
# difficulty rating: 610
# https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHEFSCORE

import sys

input = sys.stdin.readlines();
for line in input[1:]:
    n, x, y = map(int, line.strip().split(' '))
    possible = (y == 0) or ((y % x == 0) and (y / x <= n))
    print('YES' if possible else 'NO')
