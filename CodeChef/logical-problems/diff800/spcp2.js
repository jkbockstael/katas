// Airlines
// difficulty rating: 712
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/SPCP2

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
const clampMin = n => x => (x >= n) ? x : n;
const print = s => console.log(s);

const countToPurchase = (inventory, targetCapacity) => 
    Math.ceil(targetCapacity / 100) - inventory;

tail(input)
    .map(parseAsInts)
    .map(spread(countToPurchase))
    .map(clampMin(0))
    .map(print);
