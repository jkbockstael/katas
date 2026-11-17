// Chess Ratings
// difficulty rating: 651
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/C_RATING

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const drop = count => list => list.slice(count);
const tail = drop(1);
const asInt = s => parseInt(s);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const reverse = list => list.toReversed();
const sub = (a, b) => a - b;
const diff = list => list.reduce(sub);
const print = s => console.log(s);

const requiredWins = points => Math.ceil(points / 8);

tail(input)
    .map(parseAsInts)
    .map(reverse)
    .map(diff)
    .map(requiredWins)
    .map(print);
