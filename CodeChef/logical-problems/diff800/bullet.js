// Mario and Bullet
// difficulty rating: 650
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/BULLET

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

const delay = (speed, distance, targetTime) => 
    targetTime - distance / speed;

const clampMin = n => x => (x >= n) ? x : n;

tail(input)
    .map(parseAsInts)
    .map(spread(delay))
    .map(clampMin(0))
    .map(print);
