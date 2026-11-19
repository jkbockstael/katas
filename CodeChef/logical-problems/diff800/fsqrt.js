// Finding Square Roots
// difficulty rating: 420
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/FSQRT

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const append = item => list => list.concat([item]);
const spread = func => list => func(...list);
const print = s => console.log(s);

// "using in-built functions" you say? where's the fun in that?
const fsqrt = (target, guess) => 
    (guess * guess === target)
    ? guess
    : (guess * guess > target)
        ? guess - 1
        : fsqrt(target, guess + 1);

tail(input)
    .map(parseAsInts)
    .map(append(0))
    .map(spread(fsqrt))
    .map(print);
