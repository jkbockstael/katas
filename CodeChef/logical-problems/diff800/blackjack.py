# Blackjack
# difficulty rating: 681
# https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/BLACKJACK

import sys

input = sys.stdin.readlines();
for line in input[1:]:
    a, b = map(int, line.strip().split(' '))
    diff = 21 - a - b;
    print(diff if diff <= 10 else -1)
