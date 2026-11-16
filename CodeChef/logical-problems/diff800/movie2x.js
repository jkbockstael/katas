// Watching Movies at 2x
// difficulty rating: 628
// https://www.codechef.com/practice/course/logical-problems/DIFF800/problems/MOVIE2X

const input = require('fs')
    .readFileSync(0, 'utf-8')
    .split('\n')
    .filter(s => s !== '');

const asInt = (x) => parseInt(x);
const parse = func => line => line.split(' ').map(func);
const parseAsInts = parse(asInt);
const first = pair => pair[0];
const second = pair => pair[1];
const print = s => console.log(s);

totalTime = pair => first(pair) - second(pair) / 2;

input
    .map(parseAsInts)
    .map(totalTime)
    .map(print);
