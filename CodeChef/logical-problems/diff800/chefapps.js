// Chef and his Apps
// difficulty rating: 702
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/CHEFAPPS

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const spread = func => list => func(...list);
const print = s => console.log(s);

const countToDelete = (total, usedA, usedB, required) =>
    (total - usedA - usedB >= required)
    ? 0
    : (total - usedA >= required)
        ? 1
        : 2;

tail(input)
    .map(parseAsInts)
    .map(spread(countToDelete))
    .map(print);
