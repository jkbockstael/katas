# Watching Movies at 2x
# difficulty rating: 628
# https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MOVIE2X

import sys

input = sys.stdin.readlines();
for line in input:
    x, y = map(int, line.strip().split(' '))
    print(int(x - y / 2))
