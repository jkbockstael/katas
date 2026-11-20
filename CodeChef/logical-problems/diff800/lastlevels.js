// The Last Levels
// difficulty rating: 679
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/LASTLEVELS

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

const timeRequired = (levels, cost, pause) => 
    (levels * cost) 
    + ((Math.floor(levels / 3) 
        - (levels % 3 === 0 ? 1 : 0)) * pause);

tail(input)
    .map(parseAsInts)
    .map(spread(timeRequired))
    .map(print);
