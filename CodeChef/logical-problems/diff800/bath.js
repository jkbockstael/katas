// Bath in Winters
// difficulty rating: 643
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/BATH

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
const floor = n => Math.floor(n);
const print = s => console.log(s);

const baths = (geyserCap, bucketCap) => 
    (geyserCap < bucketCap * 2)
    ? 0
    : geyserCap / (bucketCap * 2);

tail(input)
    .map(parseAsInts)
    .map(spread(baths))
    .map(floor)
    .map(print);
