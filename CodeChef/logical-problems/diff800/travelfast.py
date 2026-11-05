# Car or Bike
# difficulty rating: 571
# https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/TRAVELFAST

import sys

input = sys.stdin.readlines();

for line in input[1:]:
    x, y = map(int, line.strip().split(' '))
    if x < y:
        print('BIKE')
    elif x > y:
        print('CAR')
    else:
        print('SAME')